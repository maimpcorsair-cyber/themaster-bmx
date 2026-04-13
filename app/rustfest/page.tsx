'use client';

import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Kids Street BMX Workshop #3',
    date: '16 สิงหาคม 2568',
    location: 'Crazy Park @ Ratchaburi',
    cost: 'สมัครฟรี! ไม่มีค่าใช้จ่าย',
    image: '/rustfest_1.jpg',
    description: 'Workshop สำหรับเด็ก ฝึก BMX Street กับโค้ชมืออาชีพ',
  },
  {
    id: 2,
    title: 'RUSTFEST Mini Competition',
    date: 'ทุกเดือน',
    location: 'สเกตปาร์คทั่วกรุงเทพ',
    cost: 'ค่าสมัคร 200 บาท',
    image: '/rustfest_2.jpg',
    description: 'แข่งขัน Mini Pump Track + Time Trial',
  },
  {
    id: 3,
    title: 'Family Fun Day',
    date: 'ทุกเดือน',
    location: 'สเกตปาร์คพัทยา',
    cost: 'เข้าฟรี',
    image: '/rustfest_3.jpg',
    description: 'กิจกรรมครอบครัว ปั่นแต่งแฟนซี',
  },
  {
    id: 4,
    title: 'Progress Showcase',
    date: 'ทุก 3 เดือน',
    location: 'The Master BMX School',
    cost: 'เข้าฟรี',
    image: '/rustfest_4.jpg',
    description: 'เด็กโชว์ทักษะ รับ Certificate',
  },
];

const pastEvents = [
  { year: '2025', event: 'Kids Street BMX Workshop #1', month: 'มิถุนายน' },
  { year: '2025', event: 'Kids Street BMX Workshop #2', month: 'กรกฎาคม' },
];

export default function RustfestPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-primary/20 via-darkblue to-dark">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            🔥 RUSTFEST 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            งาน<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BMX</span> สุดมันส์
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            แข่งขัน Mini Competition + Workshop + Fun Day ทุกเดือน
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs#contact" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-3 px-6 rounded-full transition-all">
              สมัครแข่งขัน
            </Link>
            <Link href="/shop" className="border-2 border-white/30 hover:border-primary text-white font-bold py-3 px-6 rounded-full transition-all">
              ดูร้านค้า
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">📅 งานที่จะจัด</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all group">
                <div className="relative aspect-video">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-3">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-bold">{event.cost}</span>
                    <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm font-bold py-2 px-4 rounded-full transition-all">
                      สมัครเลย
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-4 bg-darkblue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">🏁 รูปแบบงาน</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center border border-primary/20">
              <div className="text-5xl mb-4">🏁</div>
              <h3 className="font-bold text-lg mb-2">Mini Competition</h3>
              <p className="text-gray-400 text-sm">เสาร์ - แข่ง Pump Track, Time Trial, Trick Contest</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 text-center border border-blue-500/20">
              <div className="text-5xl mb-4">🎪</div>
              <h3 className="font-bold text-lg mb-2">Workshop</h3>
              <p className="text-gray-400 text-sm">Workshop สอนเทคนิค BMX ให้เด็กๆ</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 text-center border border-green-500/20">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-bold text-lg mb-2">Family Fun Day</h3>
              <p className="text-gray-400 text-sm">อาทิตย์ - กิจกรรมครอบครัว แต่งแฟนซี</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">📋 งานที่จัดแล้ว</h2>
          <div className="space-y-4">
            {pastEvents.map((e, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{e.event}</h3>
                  <p className="text-gray-400 text-sm">{e.month} {e.year}</p>
                </div>
                <span className="text-green-400 text-sm">✓ เสร็จสิ้น</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">📞 สนใจร่วมงาน?</h2>
          <p className="text-gray-400 mb-6">ติดต่อเราได้เลย!</p>
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
