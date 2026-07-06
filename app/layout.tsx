import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const baseUrl = 'https://xn-----ctdcm0aqck5plajre8a.com';

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
    url: 'https://xn-----ctdcm0aqck5plajre8a.com/',
    siteName: 'تأسيس إنترنت وتركيب فايبر 5G',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
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
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png'],
  },
  alternates: {
    canonical: 'https://xn-----ctdcm0aqck5plajre8a.com/',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png',
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
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#009045" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-gray text-[#444] font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "عروض سلام فايبر و 5G | تأسيس إنترنت سلام في السعودية",
              "description": "استمتع بأفضل باقات إنترنت سلام فايبر و 5G المنزلية في السعودية، سرعات عالية تصل إلى 1000 ميجابت وعروض حصرية، راوتر وتأسيس مجاني.",
              "url": "https://xn-----ctdcm0aqck5plajre8a.com/",
              "publisher": {
                "@type": "Organization",
                "name": "تأسيس إنترنت وتركيب فايبر 5G",
                "telephone": "0508348048",
                "logo": {
                   "@type": "ImageObject",
                   "url": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png"
                }
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "SAR",
                "lowPrice": "174",
                "highPrice": "300",
                "offerCount": "6"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
