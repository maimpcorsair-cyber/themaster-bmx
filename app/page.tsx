'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder - ใส่ video.mp4 ที่ public/video.mp4 */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-darkblue to-dark">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center opacity-30" />
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm">เปิดรับสมัครแล้ววันนี้!</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            โรงเรียนสอน<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BMX ยุค 2026
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            เราไม่ได้สอนขี่จักรยาน เราสอนเด็กให้เป็น<strong className="text-white">นักกีฬา</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-4 px-8 rounded-full transition-all text-lg">
              🚀 ลงทะเบียนเรียน
            </Link>
            <Link href="/rustfest" className="border-2 border-primary hover:bg-primary/10 text-primary font-bold py-4 px-8 rounded-full transition-all text-lg">
              🔥 RUSTFEST
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 px-4 bg-darkblue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-4">
              คอร์สเรียน
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              เลือกสายที่<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">เหมาะสม</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* BMX Racing */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 hover:border-primary/50 transition-all">
              <div className="text-6xl mb-4">🏁</div>
              <h3 className="text-2xl font-bold mb-2">BMX Racing</h3>
              <p className="text-gray-400 mb-4">สายแข่งขัน วิ่งรอบแทร็ก ความเร็วสูง</p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ ฝึกท่านั่งแข่ง</li>
                <li>✓ เทคนิคการออกตัว</li>
                <li>✓ ฝึกในสนามจริง</li>
                <li>✓ เข้าร่วมแข่งขัน</li>
              </ul>
              <Link href="/programs" className="mt-6 inline-block bg-primary text-white font-bold py-3 px-6 rounded-full">
                ดูรายละเอียด
              </Link>
            </div>
            
            {/* BMX Freestyle */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="text-6xl mb-4">🎪</div>
              <h3 className="text-2xl font-bold mb-2">BMX Freestyle</h3>
              <p className="text-gray-400 mb-4">สายเล่นท่า กระโดด ทริก งาม</p>
              <ul className="space-y-2 text-gray-400">
                <li>✓ ฝึก Bunny Hop</li>
                <li>✓ เทคนิคManual</li>
                <li>✓ ฝึกใน Skatepark</li>
                <li>✓ เรียนรู้ท่าใหม่ตลอด</li>
              </ul>
              <Link href="/programs" className="mt-6 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-full">
                ดูรายละเอียด
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 px-4 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/20 text-secondary text-sm font-bold px-4 py-2 rounded-full mb-4">
              📍 สถานที่สอน
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              สถานที่<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">หลากหลาย</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="text-4xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold mb-2">สเกตปาร์ครัชดาภิเษก</h3>
              <p className="text-gray-400">กรุงเทพมหานคร</p>
              <p className="text-primary font-bold mt-2">วันจันทร์ - ศุกร์</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
              <div className="text-4xl mb-4">🌆</div>
              <h3 className="text-xl font-bold mb-2">สเกตปาร์คบางแค</h3>
              <p className="text-gray-400">กรุงเทพมหานคร</p>
              <p className="text-primary font-bold mt-2">วันเสาร์ - อาทิตย์</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold mb-2">สเกตปาร์คพัทยา</h3>
              <p className="text-gray-400">ชลบุรี</p>
              <p className="text-primary font-bold mt-2">Camp รายเดือน</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-darkblue border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-xl">🏍️</span>
            </div>
            <span className="text-lg font-bold">THE MASTER <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BMX</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 The Master BMX. สงวนลิขสิทธิ์.</p>
        </div>
      </footer>
    </div>
  );
}
