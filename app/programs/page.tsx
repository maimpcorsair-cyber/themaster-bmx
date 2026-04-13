'use client';

import Link from 'next/link';
import Image from 'next/image';

const programs = [
  {
    id: 1,
    name: 'Little Rider',
    age: '4-6 ปี',
    emoji: '👶',
    color: 'from-gray-700 to-gray-800',
    description: 'เริ่มต้นเรียนรู้การทรงตัว + ความสนุก',
    features: ['สอนทรงตัวบนจักรยาน', 'ฝึกเบรกอย่างปลอดภัย', 'เกมส์และกิจกรรมสนุกๆ', 'ฝึกในสนามที่ปลอดภัย'],
    price: 1500,
  },
  {
    id: 2,
    name: 'Junior Rider',
    age: '7-12 ปี',
    emoji: '🐰',
    color: 'from-gray-600 to-gray-700',
    description: 'พัฒนาทักษะ + เทคนิคต่างๆ',
    features: ['ฝึก Bunny Hop', 'เทคนิคการบังคับ', 'ฝึกใน Pump Track', 'เตรียมแข่งขัน'],
    price: 2000,
  },
  {
    id: 3,
    name: 'Competitor',
    age: '13+ ปี',
    emoji: '🏆',
    color: 'from-gray-500 to-gray-600',
    description: 'ฝึกแข่งขันระดับทีมชาติ',
    features: ['ฝึกแข่งขันทุกสัปดาห์', 'เทคนิคขั้นสูง', 'ร่วมทีม Academy', 'เข้าร่วม RUSTFEST'],
    price: 2500,
    featured: true,
  },
];

const locations = [
  { name: 'สเกตปาร์ครัชดาภิเษก', city: 'กรุงเทพฯ', days: 'จันทร์ - ศุกร์', emoji: '🏙️' },
  { name: 'สเกตปาร์คบางแค', city: 'กรุงเทพฯ', days: 'เสาร์ - อาทิตย์', emoji: '🌆' },
  { name: 'สเกตปาร์คพัทยา', city: 'ชลบุรี', days: 'Camp รายเดือน', emoji: '🏖️' },
];

const coaches = [
  {
    name: 'โค้ชพี่โจ้',
    title: 'หัวหน้าโค้ช',
    brand: 'ทีมชาติไทย BMX',
    image: '/coach.jpg',
    achievements: ['อดีตนักกีฬาทีมชาติไทย', 'แชมป์ Asia Cup 5 สมัย', 'ประสบการณ์สอน 15 ปี'],
  },
  {
    name: 'โค้ชพี่เบียร์',
    title: 'โค้ชผู้ช่วย',
    brand: 'อดีตนักกีฬาทีมชาติ',
    image: '/coach_race1.jpg',
    achievements: ['แชมป์ประเทศไทย 3 สมัย', 'ประสบการณ์สอน 10 ปี', 'ผู้ก่อตั้ง The Master BMX'],
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded" />
            <span className="text-lg font-bold tracking-tight">THE MASTER <span className="text-gray-500">BMX</span></span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/rustfest" className="text-gray-400 hover:text-white transition-colors text-sm">RUSTFEST</Link>
            <Link href="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">ร้านค้า</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">คอร์สเรียน</h1>
          <p className="text-gray-500 text-lg">เลือกคอร์สที่เหมาะกับลูกคุณ</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.id} className={`bg-black border ${program.featured ? 'border-white' : 'border-gray-800'} hover:border-white transition-all p-6`}>
                {program.featured && (
                  <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 mb-4">POPULAR</span>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-3xl">{program.emoji}</span>
                </div>
                <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{program.age}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{program.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="text-white">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-2xl font-bold mb-3">฿{program.price.toLocaleString()}<span className="text-sm font-normal text-gray-500">/เดือน</span></p>
                  <button className={`w-full font-bold py-3 px-4 transition-all ${program.featured ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                    สมัครเรียน
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-6 tracking-tight border-b border-gray-800 pb-4">สถานที่สอน</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, i) => (
              <div key={i} className="bg-black border border-gray-800 p-6 hover:border-white transition-all">
                <div className="text-3xl mb-3">{location.emoji}</div>
                <h3 className="font-bold mb-1">{location.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{location.city}</p>
                <p className="text-white text-sm font-medium">{location.days}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-6 tracking-tight border-b border-gray-800 pb-4">โค้ชผู้สอน</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coaches.map((coach, i) => (
              <div key={i} className="bg-black border border-gray-800 p-6 hover:border-white transition-all">
                <div className="flex gap-6">
                  <div className="w-32 h-32 flex-shrink-0">
                    <Image 
                      src={coach.image} 
                      alt={coach.name} 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{coach.title}</p>
                    <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                    <p className="text-white text-sm mb-3">{coach.brand}</p>
                    <ul className="space-y-1">
                      {coach.achievements.map((a, j) => (
                        <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="text-white">•</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Video Profile Placeholder */}
                <div className="mt-4 aspect-video bg-gray-900 rounded flex items-center justify-center border border-gray-800">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">▶️</span>
                    </div>
                    <p className="text-gray-500 text-sm">ดู Profile Video ของ {coach.name}</p>
                    <p className="text-gray-600 text-xs">Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">สนใจสมัครเรียน?</h2>
          <p className="text-gray-500 mb-6">ติดต่อเราได้เลย รับทดลองเรียนฟรี 1 ครั้ง!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:081-234-5678" className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors">
              📱 โทร 081-234-5678
            </a>
            <a href="https://line.me" target="_blank" className="bg-gray-800 text-white font-bold py-3 px-6 hover:bg-gray-700 transition-colors">
              💬 แอดไลน์ @themasterbmx
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
