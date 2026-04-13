'use client';

import Link from 'next/link';

const content = {
  th: {
    nav: {
      home: 'หน้าแรก',
      programs: 'คอร์สเรียน',
      rustfest: 'RUSTFEST',
      shop: 'ร้านค้า',
      contact: 'ติดต่อ',
    },
    hero: {
      badge: 'เปิดรับสมัครแล้ว',
      title: 'BMX ยุค 2026',
      subtitle: 'เราไม่ได้สอนขี่จักรยาน เราสอนเด็กให้เป็นนักกีฬา',
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
    nav: {
      home: 'Home',
      programs: 'Programs',
      rustfest: 'RUSTFEST',
      shop: 'Shop',
      contact: 'Contact',
    },
    hero: {
      badge: 'Now Enrolling',
      title: 'BMX 2026',
      subtitle: "We don't teach riding bikes. We teach kids to become athletes.",
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
  const t = content.th;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header - Nike Style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase">
            THE MASTER <span className="text-red-600">BMX</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/programs" className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide">{t.nav.programs}</Link>
            <Link href="/rustfest" className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide">{t.nav.rustfest}</Link>
            <Link href="/shop" className="text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide">{t.nav.shop}</Link>
            <Link href="/programs#contact" className="bg-white text-black px-5 py-2 text-sm font-bold hover:bg-red-600 hover:text-white transition-colors uppercase tracking-wide">{t.nav.contact}</Link>
          </nav>
        </div>
      </header>

      {/* Hero - Nike Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
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
        
        {/* Nike-style Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Hero Content - Bold Typography */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block bg-red-600 px-4 py-1 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto uppercase tracking-wide">
            {t.hero.subtitle}
          </p>
          
          <div className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            <p className="uppercase tracking-wide">We don&apos;t teach riding bikes.</p>
            <p className="uppercase tracking-wide">We teach kids to become athletes.</p>
            <p className="mt-4 text-red-500 font-bold uppercase tracking-wide">เราไม่ได้สอนขี่จักรยาน เราสอนเด็กให้เป็นนักกีฬา</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="bg-white text-black font-bold py-4 px-10 hover:bg-red-600 hover:text-white transition-all text-sm uppercase tracking-widest">
              {t.hero.cta}
            </Link>
            <Link href="/rustfest" className="border-2 border-white text-white font-bold py-4 px-10 hover:bg-white hover:text-black transition-all text-sm uppercase tracking-widest">
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* Programs - Nike Grid */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.programs.title}</h2>
          <p className="text-gray-500 text-lg mb-16 uppercase tracking-wide">{t.programs.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-0">
            {/* Little Rider */}
            <div className="border border-gray-800 p-12 hover:border-red-600 transition-colors group">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.programs.little.age}</span>
              <h3 className="text-4xl font-black uppercase tracking-tight mt-2 mb-4 group-hover:text-red-500 transition-colors">{t.programs.little.name}</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">{t.programs.little.desc}</p>
              <Link href="/programs" className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:border-red-500 hover:text-red-500 transition-colors">
                {t.programs.detail}
              </Link>
            </div>
            
            {/* Junior Rider */}
            <div className="border border-gray-800 p-12 hover:border-red-600 transition-colors group">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.programs.junior.age}</span>
              <h3 className="text-4xl font-black uppercase tracking-tight mt-2 mb-4 group-hover:text-red-500 transition-colors">{t.programs.junior.name}</h3>
              <p className="text-gray-500 uppercase tracking-wide text-sm">{t.programs.junior.desc}</p>
              <Link href="/programs" className="inline-block mt-8 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:border-red-500 hover:text-red-500 transition-colors">
                {t.programs.detail}
              </Link>
            </div>
            
            {/* Competitor */}
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

      {/* CTA - Bold */}
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
