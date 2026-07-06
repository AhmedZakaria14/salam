'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/LayoutComponents';
import { salamPackages } from '@/data/salamPackages';
import { Check, Wifi, Download, Upload, Server, ArrowLeft, Loader2, Sparkles, PhoneCall, Zap, PlaySquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SalamPage() {
  const [activeTab, setActiveTab] = useState<'fiber' | '5g'>('5g');
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  
  const [contactForm, setContactForm] = useState({ name: '', phone: '', city: '' });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const filteredPackages = salamPackages.filter(pkg => pkg.type === activeTab);

  const toggleExpand = (id: string) => {
    if (expandedPackage === id) {
      setExpandedPackage(null);
    } else {
      setExpandedPackage(id);
    }
  };

  const WHATSAPP_NUMBER = "966508348048"; // Updated to Salam number

  const getWhatsappUrl = (pkgTitle: string) => {
    const text = `السلام عليكم، أريد الاشتراك في باقة ${pkgTitle} من سلام.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    
    const text = `السلام عليكم، أريد طلب تأسيس إنترنت سلام.\n\nالاسم: ${contactForm.name}\nرقم الهاتف: ${contactForm.phone}\nالمدينة: ${contactForm.city}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmittingContact(false);
      setContactForm({ name: '', phone: '', city: '' });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col font-cairo bg-gray-50 dir-rtl">
      {/* Schema.org JSON-LD for LocalBusiness and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "name": "تأسيس إنترنت سلام فايبر و 5G",
                "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png",
                "@id": "https://xn-----ctdcm0aqck5plajre8a.com/",
                "url": "https://xn-----ctdcm0aqck5plajre8a.com/",
                "telephone": "0508348048",
                "priceRange": "SAR 174 - 300",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "الرياض",
                  "addressLocality": "الرياض",
                  "addressRegion": "الرياض",
                  "postalCode": "12211",
                  "addressCountry": "SA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 24.7136,
                  "longitude": 46.6753
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "كيف يمكنني طلب تأسيس إنترنت سلام؟",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "يمكنك طلب تأسيس الإنترنت من خلال التواصل معنا عبر الواتساب على الرقم 0508348048، أو من خلال تعبئة نموذج الطلب في الموقع."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "هل راوتر سلام مجاني؟",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "نعم، جميع باقات سلام سواء الفايبر أو 5G تأتي مع راوتر مجاني وتأسيس مجاني بالكامل."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "ما هي أرخص باقة في سلام؟",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "أرخص باقة فايبر هي سلام فايبر 300 بسعر 174 ريال (شامل الضريبة للشهور الثلاثة الأولى)."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "الرئيسية",
                    "item": "https://xn-----ctdcm0aqck5plajre8a.com/"
                  }
                ]
              }
            ]
          })
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[#009045] mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#009045] to-[#00b255] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" fill="white" />
           </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 rounded-full font-bold mb-6 text-xs sm:text-sm items-center justify-center gap-2 mx-auto w-auto max-w-full overflow-hidden text-center">
            <span>أقوى عروض الصيف من سلام</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            ارتق بتجربة الإنترنت في منزلك <br />
            مع <span className="text-yellow-300">سلام فايبر و 5G</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            استمتع باتصال آمن وموثوق ومستقر وبدون انقطاع. سرعات تناسب التصفح السريع والبث والرياضات الإلكترونية بسعر منافس وعروض خيالية.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-[#009045] hover:bg-yellow-300 font-bold py-4 px-8 rounded-full transition-transform transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 text-lg"
            >
              <PhoneCall className="w-5 h-5" />
              تواصل لطلب التأسيس
            </a>
          </div>
        </div>
      </section>

      {/* SEO Introduction Area */}
      <section className="container mx-auto px-4 mb-10 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          أفضل عروض سلام للإنترنت في السعودية
        </h2>
        <p className="text-gray-600 leading-relaxed">
          اكتشف التغطية الأوسع والسرعات الأقوى مع <strong className="text-[#009045]">انترنت سلام 5G</strong> وباقات <strong className="text-[#009045]">سلام فايبر</strong> المنزلية المتميزة. 
          سواء كنت تبحث عن استقرار الألعاب والبث بدقة 4K عبر <strong>باقات سلام فايبر</strong>، أو سهولة التوصيل الفوري مع أجهزة 5G، وفرنا لك 
          <strong>تغطية سلام</strong> الشاملة مع تأسيس فوري وبدون رسوم مخفية. احصل الآن على <strong>اشتراك سلام فايبر</strong> بأفضل الأسعار.
        </p>
      </section>

      <main className="flex-grow container mx-auto px-4 pb-20">
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-row gap-2 max-w-md w-full">
            <button
              onClick={() => setActiveTab('5g')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === '5g' 
                  ? 'bg-[#009045] text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Wifi className="w-5 h-5" />
                <span>سلام 5G</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('fiber')}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === 'fiber' 
                  ? 'bg-[#009045] text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Server className="w-5 h-5" />
                <span>سلام فايبر</span>
              </div>
            </button>
          </div>
        </div>

        {/* Promotion Banner for 5G */}
        {activeTab === '5g' && (
          <div className="max-w-7xl mx-auto mb-16 space-y-12">
            <div className="flex justify-center">
              <Image 
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780876904/WhatsApp_Image_2026-06-08_at_2.17.07_AM_3_jkenru.jpg" 
                alt="Salam 5G Routers" 
                width={800} 
                height={400} 
                className="rounded-3xl shadow-lg object-contain w-full max-w-4xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-900 mb-8 border-b-4 border-[#009045] inline-block pb-2">تفاصيل راوتر هوم فاي ماكس (HomeFi Max)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877247/WhatsApp_Image_2026-06-08_at_2.17.07_AM_5_mooiql.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877247/WhatsApp_Image_2026-06-08_at_2.17.07_AM_6_k1cd8z.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877247/WhatsApp_Image_2026-06-08_at_2.17.07_AM_4_wkdccn.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877271/WhatsApp_Image_2026-06-08_at_2.17.08_AM_2_poizua.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877272/WhatsApp_Image_2026-06-08_at_2.17.08_AM_1_ynmvjr.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877272/WhatsApp_Image_2026-06-08_at_2.17.08_AM_htkbmj.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877271/WhatsApp_Image_2026-06-08_at_2.17.06_AM_4_er8cj6.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780877271/WhatsApp_Image_2026-06-08_at_2.17.05_AM_z06gm4.jpg"
                ].map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white p-2">
                    <Image 
                      src={src} 
                      alt={`HomeFi Max Detail ${index + 1}`}
                      width={500} 
                      height={500} 
                      className="rounded-xl w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Promotion Banner for Fiber */}
        {activeTab === 'fiber' && (
          <div className="max-w-7xl mx-auto mb-16 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-black text-gray-900 mb-8 border-b-4 border-[#009045] inline-block pb-2">تفاصيل ومزايا سلام فايبر</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {[
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781053456/WhatsApp_Image_2026-06-10_at_2.25.03_AM_s6tdwk.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781053455/WhatsApp_Image_2026-06-10_at_2.25.03_AM_4_o1klra.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781053456/WhatsApp_Image_2026-06-10_at_2.25.03_AM_1_mkrv2z.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781053456/WhatsApp_Image_2026-06-10_at_2.25.03_AM_3_azoiii.jpg",
                  "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781053456/WhatsApp_Image_2026-06-10_at_2.25.03_AM_2_zlrecv.jpg"
                ].map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white p-2">
                    <Image 
                      src={src} 
                      alt={`Salam Fiber Detail ${index + 1}`}
                      width={500} 
                      height={500} 
                      className="rounded-xl w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col relative group">
              {/* Discount Badge */}
              {pkg.discountText && (
                <div className="absolute top-0 right-6 bg-yellow-400 text-gray-900 font-bold text-sm px-4 py-1.5 rounded-b-lg shadow-sm z-10 transform origin-top md:group-hover:scale-105 transition-transform">
                  {pkg.discountText}
                </div>
              )}
              
              <div className="p-8 pb-6 bg-gradient-to-b from-gray-50 to-white flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block bg-[#009045] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">مفوتر</span>
                    <h2 className="text-3xl font-bold text-gray-900">{pkg.title}</h2>
                  </div>
                </div>

                {/* Main Stats */}
                <div className="flex justify-between border-t border-b border-gray-100 py-4 mb-6">
                   <div className="text-center flex-1">
                      <div className="bg-[#009045]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-[#009045]">
                        <Download className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-gray-800">{pkg.speed.download}</span>
                   </div>
                   <div className="w-px bg-gray-100"></div>
                   <div className="text-center flex-1">
                      <div className="bg-[#009045]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-[#009045]">
                        <Upload className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-gray-800">{pkg.speed.upload}</span>
                   </div>
                   <div className="w-px bg-gray-100"></div>
                   <div className="text-center flex-1">
                      <div className="bg-[#009045]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-[#009045]">
                        <Server className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-[#009045]">راوتر مجاناً</span>
                   </div>
                </div>

                {/* Highlights */}
                {pkg.highlights.length > 0 && (
                  <div className="mb-6">
                     <div className="flex gap-2 justify-center mb-4">
                        <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-lg text-white">
                          <PlaySquare className="w-5 h-5 fill-current" />
                        </div>
                        {pkg.title === 'سلام فايبر 1000' && (
                           <div className="bg-[#ff0055] w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-xs uppercase text-center leading-tight">
                               OSN+
                           </div>
                        )}
                        <div className="bg-red-600 w-10 h-10 flex items-center justify-center rounded-lg text-white">
                          <PlaySquare className="w-5 h-5 fill-current" />
                        </div>
                     </div>
                     {pkg.highlights.map((highlight, idx) => (
                        <p key={idx} className="text-center font-bold text-gray-700 text-sm mb-1">
                          {highlight.split("ر.س").map((part, partIdx, arr) => (
                            <React.Fragment key={partIdx}>
                              {part}
                              {partIdx < arr.length - 1 && (
                                <svg viewBox="0 0 1086 1114" className="w-3 h-3 fill-current inline-block mx-0.5 mb-0.5 shadow-sm opacity-90" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37zM1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97V743.77l132.25-28.11v270.4l424.53-90.28Z"></path>
                                </svg>
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                     ))}
                  </div>
                )}

                {/* Details Accordion */}
                <div className="border border-gray-200 rounded-xl overflow-hidden mt-6">
                  <button 
                    onClick={() => toggleExpand(pkg.id)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-bold text-gray-700">رؤية المزيد من المزايا</span>
                    <ArrowLeft className={`w-5 h-5 text-gray-500 transition-transform ${expandedPackage === pkg.id ? 'rotate-90' : '-rotate-90'}`} />
                  </button>
                  
                  {expandedPackage === pkg.id && (
                    <div className="p-4 bg-white border-t border-gray-100 space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="mt-1 flex-shrink-0 text-[#009045]">
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm font-medium leading-tight">
                            {feature.split("ر.س").map((part, partIdx, arr) => (
                              <React.Fragment key={partIdx}>
                                {part}
                                {partIdx < arr.length - 1 && (
                                  <svg viewBox="0 0 1086 1114" className="w-3 h-3 fill-current inline-block mx-0.5 mb-0.5 shadow-sm opacity-90" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37zM1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97V743.77l132.25-28.11v270.4l424.53-90.28Z"></path>
                                  </svg>
                                )}
                              </React.Fragment>
                            ))}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Price and Action */}
              <div className="p-8 pt-0 bg-white">
                <div className="flex flex-col items-center mb-6 mt-4">
                  {pkg.originalPrice && (
                    <div className="text-gray-400 line-through font-bold text-lg mb-1 relative">
                      {pkg.originalPrice}
                      <span className="absolute w-full h-[2px] bg-red-500 left-0 top-1/2 -rotate-12 transform origin-center"></span>
                    </div>
                  )}
                  <div className="flex items-end gap-1 text-[#009045]">
                    <span className="text-5xl font-black">{pkg.price}</span>
                    <span className="text-xl font-bold mb-1 flex items-center justify-center">
                      <svg viewBox="0 0 1086 1114" className="w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37zM1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97V743.77l132.25-28.11v270.4l424.53-90.28Z"></path>
                      </svg>
                    </span>
                    <span className="text-gray-500 font-medium mb-1">/ {pkg.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 font-medium bg-gray-100 px-3 py-1 rounded-full">شاملة ضريبة القيمة المضافة</p>
                </div>

                <a
                  href={getWhatsappUrl(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center border-2 border-[#009045] text-[#009045] hover:bg-[#009045] hover:text-white font-bold text-xl py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                >
                  اشتراك
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4 inline-block relative">
              الأسئلة الشائعة حول خدمات سلام
              <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-1 bg-[#009045] rounded-full"></span>
            </h2>
            <p className="text-gray-600 mt-6">أبرز الاستفسارات التي تهمك حول باقاتنا وعروضنا الحالية</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#009045]/30 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-[#009045] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">؟</span>
                كيف يمكنني طلب تأسيس إنترنت سلام؟
              </h3>
              <p className="text-gray-600 leading-relaxed mr-11">
                يمكنك طلب تأسيس الإنترنت من خلال التواصل معنا عبر الواتساب على الرقم 0508348048، أو من خلال تعبئة نموذج الطلب في أسفل هذه الصفحة وسنقوم بالتواصل معك فوراً لتحديد موعد التركيب.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#009045]/30 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-[#009045] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">؟</span>
                هل راوتر سلام مجاني؟
              </h3>
              <p className="text-gray-600 leading-relaxed mr-11">
                نعم، جميع باقات سلام سواء الفايبر أو 5G تأتي مع راوتر مجاني متطور يدعم أحدث التقنيات، وتأسيس مجاني بالكامل بدون أي رسوم إضافية مخفية.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#009045]/30 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-[#009045] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">؟</span>
                ما هي أرخص باقة إنترنت في سلام؟
              </h3>
              <p className="text-gray-600 leading-relaxed mr-11">
                أرخص باقة فايبر هي (سلام فايبر 300) بسعر 174 ريال فقط شاملة ضريبة القيمة المضافة للشهور الثلاثة الأولى، وهي مثالية للتصفح ومشاهدة المحتوى بدقة عالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#009045]/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-[#009045]/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-4">اطلب التأسيس الآن</h2>
              <p className="text-gray-600">
                سجل بياناتك وسنتواصل معك فوراً لتأكيد طلبك وإرسال المندوب
              </p>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">الاسم الكريم</label>
                <input 
                  type="text" 
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#009045] focus:ring-2 focus:ring-[#009045]/20 outline-none transition-all"
                  placeholder="أدخل اسمك"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال</label>
                <input 
                  type="tel" 
                  id="phone"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  required
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#009045] focus:ring-2 focus:ring-[#009045]/20 outline-none transition-all text-right"
                  placeholder="05xxxxxxxx"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-2">المدينة / الحي</label>
                <input 
                  type="text" 
                  id="city"
                  value={contactForm.city}
                  onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#009045] focus:ring-2 focus:ring-[#009045]/20 outline-none transition-all"
                  placeholder="مثال: الرياض، حي النرجس"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmittingContact}
                className="w-full bg-[#009045] hover:bg-[#007035] disabled:bg-[#009045]/70 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {isSubmittingContact ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <PhoneCall className="w-6 h-6" />
                    <span>إرسال الطلب عبر واتساب</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Extended SEO Footer Area */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600 leading-relaxed text-center sm:text-right">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 border-b-2 border-[#009045] inline-block pb-1">تغطية سلام في جميع أنحاء المملكة</h3>
              <p>
                نحرص على توفير <strong className="text-gray-800">تغطية سلام</strong> الشاملة بأعلى معايير الجودة لضمان اتصال إنترنت مستقر وسريع. 
                نقوم بتركيب <strong className="text-gray-800">انترنت سلام 5G</strong> وتأسيس خطوط الفايبر في مدن 
                الرياض، جدة، الدمام وكافة أنحاء <strong className="text-gray-800">السعودية</strong> بأسرع وقت ممكن. يمكنك الاستعلام عن تغطية منطقتك والتأكد من إمكانية الاشتراك الفوري.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 border-b-2 border-[#009045] inline-block pb-1">أرخص وأسرع إنترنت منزلي</h3>
              <p>
                تُعد <strong className="text-gray-800">عروض سلام للانترنت</strong> الخيار الأمثل لمن يبحث عن سرعة متميزة مع توفير اقتصادي. 
                استمتع بخيارات مرنة مع <strong className="text-gray-800">باقات سلام فايبر</strong> التي تناسب احتياج العائلات، أو احصل 
                على راوتر محمول ومميز عبر عروض <strong className="text-gray-800">سلام 5G</strong>. اتصل الآن بمندوب المبيعات لتأكيد اشتراكك.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
