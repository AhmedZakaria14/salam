'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle, BookOpen } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const displayPhone = "0508348048";
  const whatsappPhone = "966508348048";
  const logoSrc = "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879636/%D8%B4%D8%B1%D9%83%D8%A9_%D8%B3%D9%84%D8%A7%D9%85_%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84_%D9%84%D9%88%D8%AC%D9%88_korawo.png";
  const logoAlt = "شعار سلام موبايل";

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full max-w-full bg-brand-secondary py-3 text-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="container relative mx-auto flex h-16 min-w-0 items-center justify-between px-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="z-10 shrink-0 text-white transition hover:text-[#009045] md:hidden"
            aria-label="افتح القائمة"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={32} />
          </button>
          <nav className="z-10 hidden flex-1 items-center gap-6 md:flex" aria-label="القائمة الرئيسية">
            <Link href="/" className="text-lg font-bold transition hover:text-[#009045]">الرئيسية</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 text-lg font-bold transition hover:text-[#009045]"><BookOpen size={18} /> المدونة</Link>
          </nav>
          <Link href="/" className="absolute left-1/2 top-1/2 z-20 max-w-[55vw] -translate-x-1/2 -translate-y-1/2">
            <Image src={logoSrc} alt={logoAlt} width={200} height={100} className="h-16 w-auto max-w-full object-contain py-1 drop-shadow-md md:h-24" priority loading="eager" />
          </Link>
          <div className="z-10 hidden flex-1 justify-end gap-6 md:flex">
            <Link href="/" className="text-lg font-bold text-[#009045] transition hover:text-[#009045]">سلام فايبر و 5G</Link>
          </div>
          <div className="w-8 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] h-dvh w-screen max-w-full overflow-hidden bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            id="mobile-navigation"
            className="fixed right-0 top-0 flex h-dvh w-[min(86vw,22rem)] max-w-full flex-col overflow-y-auto border-l border-[#009045] bg-brand-secondary p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <div className="mb-8 flex items-center justify-between border-b border-gray-700 pb-4 sm:mb-10">
              <Image src={logoSrc} alt={logoAlt} width={120} height={60} className="h-12 w-auto max-w-[65%] object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="shrink-0 rounded-full bg-gray-800 p-2 text-gray-400 transition hover:text-white" aria-label="إغلاق القائمة"><X size={24} /></button>
            </div>
            <nav className="flex min-w-0 flex-col gap-2 text-lg font-bold text-white">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="break-words rounded-lg p-3 transition hover:bg-white/5 hover:text-[#009045]">الرئيسية</Link>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="break-words rounded-lg p-3 text-[#009045] transition hover:bg-white/5 hover:text-[#009045]">عروض سلام فايبر و 5G</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="flex min-w-0 items-center gap-3 rounded-lg p-3 transition hover:bg-white/5 hover:text-[#009045]"><BookOpen size={20} className="shrink-0" /> <span className="min-w-0 break-words">المدونة</span></Link>
            </nav>
            <div className="mt-auto border-t border-gray-700 pt-6">
              <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white bg-[#009045] py-3 text-center font-bold text-white shadow-lg transition hover:bg-[#007035]"><MessageCircle size={20} className="shrink-0" /><span>تواصل واتساب</span></a>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 left-4 z-[55] flex flex-col gap-3 sm:bottom-5 sm:left-5 sm:gap-4">
        <a href={`tel:${displayPhone}`} className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#009045] text-white shadow-[0_3px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 md:h-14 md:w-14 md:hover:scale-110" aria-label="اتصل بنا الآن"><Phone size={25} /><span className="absolute left-16 hidden whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-sm text-white shadow-md md:group-hover:block">اتصل بنا الآن!</span></a>
        <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#18d26e] text-white shadow-[0_3px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 md:h-14 md:w-14 md:hover:scale-110" aria-label="تواصل معنا عبر واتساب"><MessageCircle size={25} /><span className="absolute left-16 hidden whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-sm text-white shadow-md md:group-hover:block">تواصل واتساب</span></a>
      </div>
    </>
  );
}

export function Footer() {
  const displayPhone = "0508348048";
  const whatsappPhone = "966508348048";
  return (
    <footer className="w-full max-w-full overflow-x-clip bg-[#009045] pt-12 text-white sm:pt-16">
      <div className="mb-8 bg-brand-gray py-10 text-center text-[#444] shadow-inner sm:py-12">
        <div className="container mx-auto max-w-2xl min-w-0 px-4">
          <h4 className="mb-6 text-xl font-bold text-[#009045] sm:text-2xl">احصل على استشارة لتغطية حيك</h4>
          <div className="flex min-w-0 flex-col gap-2 rounded-2xl bg-white p-2 shadow-md sm:flex-row sm:rounded-full">
            <input type="text" placeholder="اكتب موقعك للتحقق من التغطية..." className="min-w-0 w-full flex-1 rounded-xl px-4 py-3 outline-none sm:rounded-r-full" />
            <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-xl bg-[#009045] px-5 py-3 text-center font-bold text-white shadow-md transition hover:bg-[#007035] sm:rounded-full sm:px-6">تحقق الآن</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-12 grid min-w-0 gap-8 px-4 text-center md:grid-cols-3 md:text-right">
        <div className="min-w-0 rounded-lg bg-white p-6 text-[#5e5e5e] shadow-sm"><h3 className="mb-4 text-2xl font-bold uppercase text-[#009045]">تواصل معنا</h3><p className="mb-4 break-words">اتصل بنا الآن للحصول على أفضل عروض 5G والألياف البصرية المتطورة، نوفر لك راوتر مجاني مع التركيب.</p><a href={`tel:${displayPhone}`} className="block max-w-full break-all text-2xl font-bold text-[#009045] sm:text-3xl" dir="ltr">{displayPhone}</a></div>
        <div className="min-w-0"><h4 className="mb-4 inline-block border-b-2 border-[#00b255] pb-2 text-lg font-bold">الأقسام والمدونة</h4><ul className="space-y-3"><li><Link href="/" className="flex items-center justify-center gap-2 break-words transition hover:text-gray-200 md:justify-start"><span>›</span> الرئيسية</Link></li><li><Link href="/" className="flex items-center justify-center gap-2 break-words font-bold text-white transition hover:text-gray-200 md:justify-start"><span>›</span> سلام فايبر و 5G</Link></li><li><Link href="/blog" className="flex items-center justify-center gap-2 break-words font-bold transition hover:text-gray-200 md:justify-start"><span>›</span> المدونة</Link></li></ul></div>
        <div className="min-w-0"><h4 className="mb-4 inline-block border-b-2 border-[#00b255] pb-2 text-lg font-bold">خدماتنا الرئيسية</h4><ul className="space-y-3"><li>› تأسيس إنترنت 5G منزلي</li><li>› تركيب ألياف بصرية (فايبر)</li><li>› ترقية الباقات والسرعات</li><li>› دعم فني واستفسار مجاني</li></ul></div>
      </div>
      <div className="border-t border-gray-700 bg-brand-secondary py-8 text-center text-sm"><div className="container mx-auto flex min-w-0 flex-col items-center justify-between gap-6 px-4 md:flex-row"><p className="break-words text-gray-300">&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمحرك إنترنت سلام.</p><div className="flex min-w-0 flex-col items-center gap-6 md:flex-row"><div className="group flex min-w-0 flex-wrap items-center justify-center gap-2"><span className="text-gray-400">تم التصميم والتطوير بواسطة</span><a href="https://NasharHub.com" target="_blank" rel="noopener noreferrer" className="group/link relative overflow-hidden rounded-lg border border-[#009045]/20 bg-gradient-to-r from-[#009045]/10 to-[#009045]/5 px-4 py-1.5 shadow-sm transition-all duration-300 hover:border-[#009045]/50"><span className="relative z-10 font-bold text-[#009045] transition-colors duration-300 group-hover/link:text-white">NasharHub.com</span></a></div><a href={`https://wa.me/${whatsappPhone}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-[#009045] hover:bg-[#009045] hover:text-white" aria-label="واتساب"><MessageCircle size={20} /></a></div></div></div>
    </footer>
  );
}
