'use client';

import Link from 'next/link';
import { useState } from 'react';

const content = {
  th: {
    hero: {
      badge: 'เปิดรับสมัครแล้ว',
      title: 'ปั่น BMX ยังไงให้เยี่ยมผู้ชาย',
      cta: 'ลงทะเบียนเรียน',
      cta2: 'RUSTFEST',
    },
    programs: {
      title: 'คอร์สเรียน',
      subtitle: 'เลือกสายที่เหมาะกับลูกคุณ',
      little: { age: '4-6 ปี', name: 'Little Rider', desc: 'เริ่มต้นเรียนรู้การทรงตัว + ความสนุก' },
      junior: { age: '7-12 ปี', name: 'Junior Rider', desc: 'พัฒนาทักษะ + เทคนิคต่างๆ' },
      competitor: { age: '13+ ปี', name: 'Competitor', desc: 'ฝึกแข่งขันระดับทีมชาติ' },
      detail: 'ดูรายละเอียด',
    },
    locations: {
      title: 'สถานที่สอน',
      rush: { name: 'สเกตปาร์ครัชดาภิเษก', city: 'กรุงเทพฯ', days: 'จันทร์ - ศุกร์' },
      bang: { name: 'สเกตปาร์คบางแค', city: 'กรุงเทพฯ', days: 'เสาร์ - อาทิตย์' },
      pattaya: { name: 'สเกตปาร์คพัทยา', city: 'ชลบุรี', days: 'Camp รายเดือน' },
    },
    cta: {
      title: 'พร้อมเริ่มต้นแล้วหรือยัง?',
      subtitle: 'รับทดลองเรียนฟรี 1 ครั้ง',
      call: 'โทร 081-234-5678',
      line: 'แอดไลน์ @themasterbmx',
    },
    footer: {
      rights: '© 2026 The Master BMX.',
    },
  },
  en: {
    hero: {
      badge: 'Now Enrolling',
      title: 'Just Ride BMX',
      cta: 'Register Now',
      cta2: 'RUSTFEST',
    },
    programs: {
      title: 'Programs',
      subtitle: 'Choose the right path for your child',
      little: { age: '4-6 years', name: 'Little Rider', desc: 'Start learning balance + fun' },
      junior: { age: '7-12 years', name: 'Junior Rider', desc: 'Develop skills + techniques' },
      competitor: { age: '13+ years', name: 'Competitor', desc: 'Train for national competition' },
      detail: 'View Details',
    },
    locations: {
      title: 'Training Locations',
      rush: { name: 'Ratchada Skate Park', city: 'Bangkok', days: 'Mon - Fri' },
      bang: { name: 'Bang Khae Skate Park', city: 'Bangkok', days: 'Sat - Sun' },
      pattaya: { name: 'Pattaya Skate Park', city: 'Chonburi', days: 'Monthly Camp' },
    },
    cta: {
      title: 'Ready to Start?',
      subtitle: 'Free trial class 1 session',
      call: 'Call 081-234-5678',
      line: 'Line @themasterbmx',
    },
    footer: {
      rights: '© 2026 The Master BMX.',
    },
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<'th' | 'en'>('th');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase">
            THE MASTER <span className="text-red-600">BMX</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/programs" className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide">{t.programs.title}</Link>
            <Link href="/rustfest" className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide">RUSTFEST</Link>
            <Link href="/shop" className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide">{lang === 'th' ? 'ร้านค้า' : 'Shop'}</Link>
            <Link href="/programs#contact" className="bg-white text-black px-5 py-2 text-sm font-bold hover:bg-red-600 hover:text-white transition-colors uppercase tracking-wide">
              {lang === 'th' ? 'ติดต่อ' : 'Contact'}
            </Link>
          </nav>
          {/* Language Toggle */}
          <button 
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="border border-gray-600 px-3 py-1 text-xs font-bold uppercase tracking-wider hover:border-white transition-colors"
          >
            {lang === 'th' ? 'EN' : 'TH'}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block bg-red-600 px-4 py-1 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            {t.hero.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="bg-white text-black font-bold py-4 px-10 hover:bg-red-600 hover:text-white transition-all text-sm uppercase tracking-widest">
              {t.hero.cta}
            </Link>
            <Link href="/rustfest" className="border-2 border-white text-white font-bold py-4 px-10 hover:bg-white hover:text-black transition-all text-sm uppercase tracking-widest">
              {t.hero.cta2}
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.programs.title}</h2>
          <p className="text-gray-500 text-lg mb-16 uppercase tracking-wide">{t.programs.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-0">
            <div className="border border-gray-800 p-12 hover:border-red-600 transition-colors group">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.programs.little.age}</span>
              <h3 className="text-4xl font-black uppercase tracking-tight mt-2 mb-4 group-hover:text-red-500 transition-colors">{t.programs.little.name}</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">{t.programs.little.desc}</p>
              <Link href="/programs" className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:border-red-500 hover:text-red-500 transition-colors">
                {t.programs.detail}
              </Link>
            </div>
            
            <div className="border border-gray-800 p-12 hover:border-red-600 transition-colors group">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.programs.junior.age}</span>
              <h3 className="text-4xl font-black uppercase tracking-tight mt-2 mb-4 group-hover:text-red-500 transition-colors">{t.programs.junior.name}</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">{t.programs.junior.desc}</p>
              <Link href="/programs" className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:border-red-500 hover:text-red-500 transition-colors">
                {t.programs.detail}
              </Link>
            </div>
            
            <div className="border border-red-600 p-12 bg-red-600/5">
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{t.programs.competitor.age}</span>
              <h3 className="text-4xl font-black uppercase tracking-tight mt-2 mb-4 text-red-500">{t.programs.competitor.name}</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">{t.programs.competitor.desc}</p>
              <Link href="/programs" className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b border-red-500 text-red-500 pb-1">
                {t.programs.detail}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.locations.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-black uppercase">{t.locations.rush.name}</h3>
              <p className="text-gray-600 uppercase text-sm tracking-wide mt-1">{t.locations.rush.city}</p>
              <p className="font-bold mt-2">{t.locations.rush.days}</p>
            </div>
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-black uppercase">{t.locations.bang.name}</h3>
              <p className="text-gray-600 uppercase text-sm tracking-wide mt-1">{t.locations.bang.city}</p>
              <p className="font-bold mt-2">{t.locations.bang.days}</p>
            </div>
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-black uppercase">{t.locations.pattaya.name}</h3>
              <p className="text-gray-600 uppercase text-sm tracking-wide mt-1">{t.locations.pattaya.city}</p>
              <p className="font-bold mt-2">{t.locations.pattaya.days}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">{t.cta.title}</h2>
          <p className="text-gray-500 uppercase tracking-wide mb-10">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:081-234-5678" className="bg-red-600 text-white font-bold py-4 px-10 hover:bg-white hover:text-black transition-all text-sm uppercase tracking-widest">
              {t.cta.call}
            </a>
            <a href="https://line.me" target="_blank" className="border-2 border-white text-white font-bold py-4 px-10 hover:bg-white hover:text-black transition-all text-sm uppercase tracking-widest">
              {t.cta.line}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wide">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
