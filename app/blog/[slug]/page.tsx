import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpLeft, BookOpen, ChevronLeft, Home, Link2 } from 'lucide-react';
import { Header, Footer } from '@/components/LayoutComponents';
import { blogArticles, getBlogArticle } from '@/data/blogArticles';
import { getArticleContent } from '@/lib/blogContent';

const baseUrl = 'https://xn-----ctdcm0aqck5plajre8a.com';

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
        dateModified: '2026-08-08',
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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-5">
          <nav aria-label="مسار التنقل" className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-[#009045]"><Home size={15} /> الرئيسية</Link>
            <ChevronLeft size={15} />
            <Link href="/blog" className="hover:text-[#009045]">المدونة</Link>
            <ChevronLeft size={15} />
            <span className="max-w-[70vw] truncate font-semibold text-gray-700">{article.title}</span>
          </nav>
        </div>
      </section>

      <main>
        <header className="bg-white pb-10 pt-10 md:pb-14 md:pt-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-[#007a3b]"><BookOpen size={17} /> دليل سلام فايبر</span>
              <h1 className="mb-5 text-3xl font-black leading-[1.5] text-gray-950 md:text-5xl">{article.title}</h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">{article.description}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {article.keywords.slice(0, 5).map((keyword) => <span key={keyword} className="rounded-full border border-green-100 bg-white px-3 py-1.5 text-xs font-bold text-[#007a3b]">{keyword}</span>)}
              </div>
            </div>
            <div className="relative mx-auto mt-9 aspect-[1200/630] max-w-5xl overflow-hidden rounded-3xl bg-[#009045] shadow-xl">
              <Image src={article.image} alt={article.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
            </div>
          </div>
        </header>

        <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <nav aria-label="جدول المحتويات" className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-gray-900"><BookOpen size={19} className="text-[#009045]" /> جدول المحتويات</h2>
              <ol className="max-h-[68vh] space-y-1 overflow-y-auto pl-1 text-sm leading-6">
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? 'pr-4' : ''}>
                    <a href={`#${item.id}`} className={`block rounded-lg px-2 py-1.5 transition hover:bg-green-50 hover:text-[#009045] ${item.level === 2 ? 'font-bold text-gray-800' : 'text-gray-600'}`}>{item.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 md:p-10">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            <section className="mt-12 border-t border-gray-100 pt-9" aria-labelledby="related-articles">
              <h2 id="related-articles" className="mb-5 flex items-center gap-2 text-2xl font-black text-gray-900"><Link2 size={22} className="text-[#009045]" /> مقالات مرتبطة</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {related.map((item) => item && (
                  <Link key={item.slug} href={`/blog/${item.slug}`} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition hover:border-green-200 hover:bg-green-50">
                    <span className="mb-2 block text-xs font-bold text-[#009045]">{item.keywords[0]}</span>
                    <span className="flex items-start justify-between gap-3 font-black leading-7 text-gray-900 group-hover:text-[#009045]">{item.title}<ArrowUpLeft size={18} className="mt-1 shrink-0" /></span>
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
