import fs from 'node:fs';
import path from 'node:path';
import type { BlogArticle } from '@/data/blogArticles';

export type TocItem = { level: number; title: string; id: string };
export type FaqItem = { question: string; answer: string };

type ParsedArticle = { contentHtml: string; toc: TocItem[]; faq: FaqItem[] };

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function inline(value: string) {
  let out = escapeHtml(value.replace(/\\\./g, '.'));
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return out;
}

function cleanHeading(value: string) {
  return value.trim().replace(/^\*\*(.*?)\*\*$/, '$1').replace(/\\\./g, '.').trim();
}

function isTableSeparator(line: string) {
  return /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$/.test(line);
}

function tableCells(line: string) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
}

export function parseArticleMarkdown(markdown: string): ParsedArticle {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const html: string[] = [];
  const toc: TocItem[] = [];
  const faq: FaqItem[] = [];
  let section = 0;
  let firstH1Skipped = false;
  let paragraph: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let inFaq = false;
  let faqQuestion = '';
  let faqAnswer: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.join(' ').trim();
    if (text) html.push(`<p>${inline(text)}</p>`);
    if (inFaq && faqQuestion && text) faqAnswer.push(text);
    paragraph = [];
  };
  const closeList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = null;
  };
  const flushFaq = () => {
    const answer = faqAnswer.join(' ').trim();
    if (faqQuestion && answer) faq.push({ question: faqQuestion, answer });
    faqQuestion = '';
    faqAnswer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trimEnd();
    const trimmed = line.trim();
    const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);

    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      const title = cleanHeading(heading[2]);
      if (level === 1 && !firstH1Skipped) { firstH1Skipped = true; continue; }
      if (level === 2 && title.includes('الأسئلة الشائعة')) { inFaq = true; flushFaq(); }
      else if (level === 2 && inFaq) { flushFaq(); inFaq = false; }
      if (level === 3 && inFaq) { flushFaq(); faqQuestion = title; }
      section += 1;
      const id = `section-${section}`;
      if (level === 2 || level === 3) toc.push({ level, title, id });
      html.push(`<h${level} id="${id}">${inline(title)}</h${level}>`);
      continue;
    }

    // Ignore empty Markdown heading markers without changing any meaningful source text.
    if (/^#{1,6}$/.test(trimmed)) { flushParagraph(); closeList(); continue; }
    if (!trimmed) { flushParagraph(); closeList(); continue; }

    if (i + 1 < lines.length && line.includes('|') && isTableSeparator(lines[i + 1])) {
      flushParagraph(); closeList();
      const headers = tableCells(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        rows.push(tableCells(lines[i]));
        i += 1;
      }
      i -= 1;
      html.push('<div class="article-table-wrap"><table><thead><tr>' + headers.map((cell) => `<th>${inline(cell)}</th>`).join('') + '</tr></thead><tbody>' + rows.map((row) => '<tr>' + row.map((cell) => `<td>${inline(cell)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>');
      continue;
    }

    const bullet = /^[-*]\s+(.+)$/.exec(trimmed);
    const ordered = /^(\d+)[.)]\s+(.+)$/.exec(trimmed);
    if (bullet || ordered) {
      flushParagraph();
      const nextType = ordered ? 'ol' : 'ul';
      if (listType !== nextType) { closeList(); listType = nextType; html.push(`<${nextType}>`); }
      const text = ordered ? ordered[2] : bullet![1];
      html.push(`<li>${inline(text)}</li>`);
      if (inFaq && faqQuestion) faqAnswer.push(text);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  closeList();
  flushFaq();
  return { contentHtml: html.join('\n'), toc, faq };
}

export function getArticleContent(article: BlogArticle): ParsedArticle {
  const filePath = path.join(process.cwd(), article.sourcePath);
  return parseArticleMarkdown(fs.readFileSync(filePath, 'utf8'));
}
