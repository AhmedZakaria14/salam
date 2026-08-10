import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpLeft, BookOpen, ChevronLeft, Home, Link2 } from 'lucide-react';
import { Header, Footer } from '@/components/LayoutComponents';
import { blogArticles, getBlogArticle } from '@/data/blogArticles';
import { getArticleContent } from '@/lib/blogContent';

const baseUrl = 'https://www.mandoubsalam5g.com';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  const url = `${baseUrl}/blog/${article.slug}`;
  return {
    title: article.seoTitle,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: article.seoTitle,
      description: article.description,
      url,
      type: 'article',
      locale: 'ar_SA',
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: { card: 'summary_large_image', title: article.seoTitle, description: article.description, images: [article.image] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();
  const { contentHtml, toc, faq } = getArticleContent(article);
  const related = article.relatedSlugs.map((relatedSlug) => getBlogArticle(relatedSlug)).filter(Boolean);
  const url = `${baseUrl}/blog/${article.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: `${baseUrl}${article.image}`,
        mainEntityOfPage: url,
        datePublished: '2026-08-08',
        dateModified: '2026-08-10',
        inLanguage: 'ar-SA',
        author: { '@type': 'Organization', name: 'مندوب مبيعات سلام' },
        publisher: { '@type': 'Organization', name: 'تأسيس إنترنت سلام فايبر و5G' },
        keywords: article.keywords.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      },
      ...(faq.length ? [{ '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }] : []),
    ],
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-gray-50 text-gray-800">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="w-full max-w-full border-b border-gray-100 bg-white">
        <div className="container mx-auto min-w-0 px-4 py-4 sm:py-5">
          <nav aria-label="مسار التنقل" className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
            <Link href="/" className="inline-flex shrink-0 items-center gap-1 hover:text-[#009045]"><Home size={15} /> الرئيسية</Link>
            <ChevronLeft size={15} className="shrink-0" />
            <Link href="/blog" className="shrink-0 hover:text-[#009045]">المدونة</Link>
            <ChevronLeft size={15} className="shrink-0" />
            <span className="min-w-0 max-w-full flex-1 truncate font-semibold text-gray-700">{article.title}</span>
          </nav>
        </div>
      </section>

      <main className="min-w-0 overflow-x-clip">
        <header className="w-full max-w-full bg-white pb-8 pt-8 sm:pb-10 sm:pt-10 md:pb-14 md:pt-14">
          <div className="container mx-auto min-w-0 px-4">
            <div className="mx-auto min-w-0 max-w-5xl text-center">
              <span className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-[#007a3b]"><BookOpen size={17} className="shrink-0" /> <span className="min-w-0">دليل سلام فايبر</span></span>
              <h1 className="mb-5 max-w-full break-words text-3xl font-black leading-[1.45] text-gray-950 sm:text-4xl md:text-5xl">{article.title}</h1>
              <p className="mx-auto max-w-3xl break-words text-base leading-8 text-gray-600 sm:text-lg">{article.description}</p>
              <div className="mt-6 flex max-w-full flex-wrap justify-center gap-2">
                {article.keywords.slice(0, 5).map((keyword) => <span key={keyword} className="max-w-full break-words rounded-full border border-green-100 bg-white px-3 py-1.5 text-xs font-bold text-[#007a3b]">{keyword}</span>)}
              </div>
            </div>
            <div className="relative mx-auto mt-7 aspect-[1200/630] w-full max-w-5xl overflow-hidden rounded-2xl bg-[#009045] shadow-xl sm:mt-9 sm:rounded-3xl">
              <Image src={article.image} alt={article.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
            </div>
          </div>
        </header>

        <div className="container mx-auto grid w-full min-w-0 max-w-7xl gap-6 px-4 py-8 sm:gap-8 sm:py-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <aside className="min-w-0 lg:sticky lg:top-28">
            <nav aria-label="جدول المحتويات" className="min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5">
              <h2 className="mb-4 flex min-w-0 items-center gap-2 text-lg font-black text-gray-900"><BookOpen size={19} className="shrink-0 text-[#009045]" /> <span className="min-w-0">جدول المحتويات</span></h2>
              <ol className="max-h-[50vh] min-w-0 space-y-1 overflow-y-auto overflow-x-hidden pl-1 text-sm leading-6 sm:max-h-[58vh] lg:max-h-[68vh]">
                {toc.map((item) => (
                  <li key={item.id} className={`min-w-0 ${item.level === 3 ? 'pr-3 sm:pr-4' : ''}`}>
                    <a href={`#${item.id}`} className={`block min-w-0 break-words rounded-lg px-2 py-1.5 transition hover:bg-green-50 hover:text-[#009045] ${item.level === 2 ? 'font-bold text-gray-800' : 'text-gray-600'}`}>{item.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-8 md:p-10">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            <section className="mt-10 min-w-0 border-t border-gray-100 pt-8 sm:mt-12 sm:pt-9" aria-labelledby="related-articles">
              <h2 id="related-articles" className="mb-5 flex min-w-0 items-center gap-2 text-xl font-black text-gray-900 sm:text-2xl"><Link2 size={22} className="shrink-0 text-[#009045]" /> <span className="min-w-0">مقالات مرتبطة</span></h2>
              <div className="grid min-w-0 gap-4 md:grid-cols-2">
                {related.map((item) => item && (
                  <Link key={item.slug} href={`/blog/${item.slug}`} target="_blank" rel="noopener noreferrer" className="group min-w-0 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-green-200 hover:bg-green-50 sm:p-5">
                    <span className="mb-2 block max-w-full break-words text-xs font-bold text-[#009045]">{item.keywords[0]}</span>
                    <span className="flex min-w-0 items-start justify-between gap-3 font-black leading-7 text-gray-900 group-hover:text-[#009045]"><span className="min-w-0 break-words">{item.title}</span><ArrowUpLeft size={18} className="mt-1 shrink-0" /></span>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
