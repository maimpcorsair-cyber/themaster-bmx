'use client';

import Link from 'next/link';

const programs = [
  {
    id: 1,
    name: 'Little Rider',
    age: '4-6 ปี',
    emoji: '👶',
    color: 'from-pink-500 to-primary',
    description: 'เริ่มต้นเรียนรู้การทรงตัว + ความสนุก',
    features: ['สอนทรงตัวบนจักรยาน', 'ฝึกเบรกอย่างปลอดภัย', 'เกมส์และกิจกรรมสนุกๆ', 'ฝึกในสนามที่ปลอดภัย'],
    price: 1500,
  },
  {
    id: 2,
    name: 'Junior Rider',
    age: '7-12 ปี',
    emoji: '🐰',
    color: 'from-blue-500 to-cyan-500',
    description: 'พัฒนาทักษะ + เทคนิคต่างๆ',
    features: ['ฝึก Bunny Hop', 'เทคนิคการบังคับ', 'ฝึกใน Pump Track', 'เตรียมแข่งขัน'],
    price: 2000,
  },
  {
    id: 3,
    name: 'Competitor',
    age: '13+ ปี',
    emoji: '🏆',
    color: 'from-yellow-500 to-orange-500',
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

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-darkblue to-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">คอร์ส<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">เรียน</span></h1>
          <p className="text-gray-400 text-lg">เลือกคอร์สที่เหมาะกับลูกคุณ</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className={`bg-gradient-to-br from-white/5 to-white/2 rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all relative ${program.featured ? 'border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/5' : ''}`}>
                {program.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                    ⭐ POPULAR
                  </span>
                )}
                <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-4xl">{program.emoji}</span>
                </div>
                <div className="text-center mb-6">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 bg-gradient-to-r ${program.color} text-white`}>
                    {program.age}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                  <p className="text-gray-400">{program.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400">
                      <span className="text-green-400">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-3xl font-black mb-2">฿{program.price.toLocaleString()}<span className="text-sm font-normal text-gray-400">/เดือน</span></p>
                  <Link href="/programs#contact" className={`w-full font-bold py-3 px-6 rounded-full transition-all ${program.featured ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                    สมัครเรียน
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4 bg-darkblue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">📍 สถานที่สอน</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, i) => (
              <div key={i} className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-6 text-center border border-white/10 hover:border-secondary/50 transition-all">
                <div className="text-5xl mb-4">{location.emoji}</div>
                <h3 className="font-bold text-xl mb-1">{location.name}</h3>
                <p className="text-gray-400 mb-2">{location.city}</p>
                <p className="text-primary font-bold">{location.days}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">📞 สนใจสมัครเรียน?</h2>
          <p className="text-gray-400 mb-6">ติดต่อเราได้เลย รับทดลองเรียนฟรี 1 ครั้ง!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:081-234-5678" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all">
              📱 โทร 081-234-5678
            </a>
            <a href="https://line.me" target="_blank" className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-all">
              💬 แอดไลน์ @themasterbmx
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
