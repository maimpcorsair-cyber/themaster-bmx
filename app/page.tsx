'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block mr-2" />
            <span className="text-sm">เปิดรับสมัครแล้ววันนี้</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            โรงเรียนสอน<br />
            <span className="text-white">BMX ยุค 2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            เราไม่ได้สอนขี่จักรยาน เราสอนเด็กให้เป็นนักกีฬา
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="bg-white text-black font-bold py-4 px-8 hover:bg-gray-200 transition-all text-lg">
              ลงทะเบียนเรียน
            </Link>
            <Link href="/rustfest" className="bg-transparent border border-white text-white font-bold py-4 px-8 hover:bg-white hover:text-black transition-all text-lg">
              RUSTFEST
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">คอร์สเรียน</h2>
            <p className="text-gray-500 text-lg">เลือกสายที่เหมาะกับลูกคุณ</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Little Rider */}
            <div className="bg-black border border-gray-800 hover:border-white transition-all p-8">
              <span className="text-gray-500 text-xs uppercase tracking-wider">4-6 ปี</span>
              <h3 className="text-xl font-bold mt-2 mb-2">Little Rider</h3>
              <p className="text-gray-500 text-sm mb-4">เริ่มต้นเรียนรู้การทรงตัว + ความสนุก</p>
              <Link href="/programs" className="text-sm font-bold text-white hover:underline">ดูรายละเอียด →</Link>
            </div>
            
            {/* Junior Rider */}
            <div className="bg-black border border-gray-800 hover:border-white transition-all p-8">
              <span className="text-gray-500 text-xs uppercase tracking-wider">7-12 ปี</span>
              <h3 className="text-xl font-bold mt-2 mb-2">Junior Rider</h3>
              <p className="text-gray-500 text-sm mb-4">พัฒนาทักษะ + เทคนิคต่างๆ</p>
              <Link href="/programs" className="text-sm font-bold text-white hover:underline">ดูรายละเอียด →</Link>
            </div>
            
            {/* Competitor */}
            <div className="bg-black border border-white p-8">
              <span className="text-gray-500 text-xs uppercase tracking-wider">13+ ปี</span>
              <h3 className="text-xl font-bold mt-2 mb-2">Competitor</h3>
              <p className="text-gray-500 text-sm mb-4">ฝึกแข่งขันระดับทีมชาติ</p>
              <Link href="/programs" className="text-sm font-bold text-white hover:underline">ดูรายละเอียด →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight mb-12 text-center">สถานที่สอน</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-800 p-6">
              <h3 className="font-bold text-lg mb-1">สเกตปาร์ครัชดาภิเษก</h3>
              <p className="text-gray-500 text-sm mb-2">กรุงเทพฯ</p>
              <p className="text-white text-sm">จันทร์ - ศุกร์</p>
            </div>
            <div className="bg-black border border-gray-800 p-6">
              <h3 className="font-bold text-lg mb-1">สเกตปาร์คบางแค</h3>
              <p className="text-gray-500 text-sm mb-2">กรุงเทพฯ</p>
              <p className="text-white text-sm">เสาร์ - อาทิตย์</p>
            </div>
            <div className="bg-black border border-gray-800 p-6">
              <h3 className="font-bold text-lg mb-1">สเกตปาร์คพัทยา</h3>
              <p className="text-gray-500 text-sm mb-2">ชลบุรี</p>
              <p className="text-white text-sm">Camp รายเดือน</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
          <p className="text-gray-500 mb-8">รับทดลองเรียนฟรี 1 ครั้ง</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:081-234-5678" className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-all">
              โทร 081-234-5678
            </a>
            <a href="https://line.me" target="_blank" className="bg-gray-800 text-white font-bold py-3 px-6 hover:bg-gray-700 transition-all">
              แอดไลน์ @themasterbmx
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2026 The Master BMX.</p>
        </div>
      </footer>
    </div>
  );
}
