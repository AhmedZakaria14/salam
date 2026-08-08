import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft, BookOpen, Search } from 'lucide-react';
import { Header, Footer } from '@/components/LayoutComponents';
import { blogArticles } from '@/data/blogArticles';

const baseUrl = 'https://www.mandoubsalam5g.com';

export const metadata: Metadata = {
  title: 'مدونة سلام فايبر | عروض وباقات فايبر سلام وأرقام التواصل',
  description: 'مقالات شاملة عن فايبر سلام، عروض سلام، باقات سلام فايبر، مندوب سلام، رقم فايبر سلام وسداد سلام فايبر.',
  keywords: ['فايبر سلام','السلام فايبر','عروض سلام','باقات سلام','سلام فايبر مسبق الدفع','مندوب سلام','رقم فايبر سلام','سلام فايبر سداد'],
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: 'مدونة سلام فايبر | الأدلة والعروض والباقات',
    description: 'دليلك إلى عروض وباقات وخدمة سلام فايبر في مكان واحد.',
    url: `${baseUrl}/blog`,
    type: 'website',
    locale: 'ar_SA',
    images: [{ url: '/blog/salam-fiber-home-packages.svg', width: 1200, height: 630, alt: 'مدونة سلام فايبر' }],
  },
};

export default function BlogPage() {
  const itemList = blogArticles.map((article, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${baseUrl}/blog/${article.slug}`,
    name: article.title,
  }));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'مدونة سلام فايبر',
        itemListElement: itemList,
      }) }} />

      <section className="relative overflow-hidden bg-[#009045] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-white" />
          <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full border-[60px] border-white" />
        </div>
        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-bold backdrop-blur">
            <BookOpen size={18} /> مدونة سلام فايبر
          </div>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">دليلك إلى فايبر سلام وعروض وباقات سلام</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            أدلة عملية تجمع تفاصيل خدمة سلام فايبر، العروض والباقات وطرق التواصل والسداد في صفحات منظمة وسهلة التصفح.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-[#009045]"><Search size={17} /> أحدث الأدلة</span>
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">مقالات سلام فايبر</h2>
          </div>
          <p className="max-w-xl leading-7 text-gray-600">اختر المقال المناسب لاحتياجك. تفتح صفحات المقالات في تبويب جديد لتسهيل المقارنة بينها.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogArticles.map((article) => (
            <article key={article.slug} className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <Link href={`/blog/${article.slug}`} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[1200/630] overflow-hidden bg-[#009045]">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {article.keywords.slice(0, 2).map((keyword) => <span key={keyword} className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-[#007a3b]">{keyword}</span>)}
                  </div>
                  <h3 className="mb-3 text-2xl font-black leading-9 text-gray-900 group-hover:text-[#009045]">{article.title}</h3>
                  <p className="mb-5 line-clamp-3 leading-7 text-gray-600">{article.excerpt || article.description}</p>
                  <span className="inline-flex items-center gap-2 font-bold text-[#009045]">قراءة المقال <ArrowUpLeft size={18} /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
