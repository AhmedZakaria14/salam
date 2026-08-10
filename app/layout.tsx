import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const baseUrl = 'https://www.mandoubsalam5g.com';

const brandLogo = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#009045',
};

export const metadata: Metadata = {
  title: 'عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية',
  description: 'تعرف على أفضل باقات إنترنت سلام فايبر و 5G المنزلية في السعودية، سرعات عالية وتأسيس مجاني. أرقام مناديب سلام واشتراك فوري للتواصل: 0508348048.',
  keywords: ['سلام فايبر', 'انترنت سلام 5G', 'عروض سلام للانترنت', 'تغطية سلام', 'اشتراك سلام فايبر', 'باقات سلام فايبر', 'نت سلام منزلي', 'تأسيس سلام', 'أرخص إنترنت منزلي السعودية', 'الرياض', 'جدة', 'الدمام', 'مندوب سلام', 'راوتر سلام مجاني', 'ألياف بصرية سلام', 'سلام موبايل', 'تغطية سلام 5G', 'انترنت لامحدود', 'فايبر سلام', 'اسعار انترنت سلام', 'تأسيس انترنت مجاني'],
  authors: [{ name: 'مندوب مبيعات سلام' }],
  creator: 'مبيعات سلام',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  openGraph: {
    title: 'عروض وباقات سلام فايبر و 5G | إنترنت منزلي سريع',
    description: 'احصل على أرخص وأسرع إنترنت منزلي من سلام فايبر و 5G في السعودية. راوتر مجاني، سرعات تصل لـ 1000 ميجا. اطلب التأسيس الآن عبر 0508348048.',
    url: `${baseUrl}/`,
    siteName: 'تأسيس إنترنت وتركيب فايبر 5G',
    images: [
      {
        url: brandLogo,
        width: 1200,
        height: 630,
        alt: 'شعار سلام فايبر و 5G',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية',
    description: 'أسرع إنترنت منزلي من سلام فايبر و 5G في السعودية. راوتر مجاني، سرعات تصل لـ 1000 ميجا.',
    images: [brandLogo],
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
  icons: {
    icon: brandLogo,
    shortcut: brandLogo,
    apple: brandLogo,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'تأسيس إنترنت وتركيب فايبر 5G',
        url: baseUrl,
        telephone: '0508348048',
        logo: {
          '@type': 'ImageObject',
          url: brandLogo,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'مندوب سلام فايبر و5G',
        inLanguage: 'ar-SA',
        publisher: { '@id': `${baseUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="max-w-full overflow-x-clip bg-brand-gray font-sans text-[#444] antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
