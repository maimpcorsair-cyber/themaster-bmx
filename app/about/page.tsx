'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t, lang } = useLanguage();

  const timeline = lang === 'th' ? [
    { year: '2018', event: 'ก่อตั้ง The Master BMX โดย โค้ชพี่เบียร์' },
    { year: '2019', event: 'เปิดสอนคอร์สแรกที่สเกตปาร์ครัชดาภิเษก' },
    { year: '2020', event: 'นักเรียนได้แชมป์ระดับประเทศครั้งแรก' },
    { year: '2021', event: 'ขยายสาขาสู่พัทยา' },
    { year: '2022', event: 'จัดตั้งทีม Academy เพื่อฝึกนักกีฬาขั้นสูง' },
    { year: '2023', event: 'เปิดตัว RUSTFEST - งานแข่งขันเด็กระดับภูมิภาค' },
    { year: '2024', event: 'นักเรียนตัวแทนทีมชาติไทยในรายการ Asia Cup' },
    { year: '2025', event: 'เปิดคอร์สออนไลน์และ Workshop ทั่วประเทศ' },
    { year: '2026', event: 'พร้อมสอนรุ่นใหม่และเตรียมนักกีฬาสู่โอลิมปิก!' },
  ] : [
    { year: '2018', event: 'Founded The Master BMX by Coach Beer' },
    { year: '2019', event: 'Opened first classes at Ratchada Skate Park' },
    { year: '2020', event: 'First student became national champion' },
    { year: '2021', event: 'Expanded to Pattaya branch' },
    { year: '2022', event: 'Established Academy team for advanced training' },
    { year: '2023', event: 'Launched RUSTFEST - Regional kids competition' },
    { year: '2024', event: 'Students represented Thailand in Asia Cup' },
    { year: '2025', event: 'Launched online courses and nationwide Workshops' },
    { year: '2026', event: 'Ready to train new generation and prepare athletes for Olympics!' },
  ];

  const values = lang === 'th' ? [
    { title: 'ความปลอดภัย', desc: 'สนามฝึกมาตรฐาน อุปกรณ์ครบ โค้ชที่ได้รับการฝึกอบรม', icon: '🛡️' },
    { title: 'ความสนุก', desc: 'เรียนรู้ผ่านเกมและกิจกรรมที่เด็กๆ ชอบ', icon: '🎮' },
    { title: 'พัฒนา', desc: 'เติบโตอย่างเป็นระบบ จากพื้นฐานสู่การแข่งขัน', icon: '📈' },
    { title: 'ทัศนคติ', desc: 'สอนนักกีฬาให้มีวินัย ความมุ่งมั่น และเคารพ', icon: '💪' },
  ] : [
    { title: 'Safety', desc: 'Standard training ground, complete equipment, trained coaches', icon: '🛡️' },
    { title: 'Fun', desc: 'Learn through games and activities kids love', icon: '🎮' },
    { title: 'Development', desc: 'Systematic growth from basics to competition', icon: '📈' },
    { title: 'Attitude', desc: 'Teach athletes discipline, determination, and respect', icon: '💪' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            {lang === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {lang === 'th' 
              ? 'The Master BMX ก่อตั้งขึ้นเพื่อสร้างนักกีฬา BMX รุ่นใหม่ที่มีคุณภาพ เราไม่ได้สอนขี่จักรยาน เราสอนเด็กให้เป็นนักกีฬาตัวจริง'
              : 'The Master BMX was founded to create quality young BMX athletes. We do not teach riding bikes, we teach kids to become real athletes.'}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
            {lang === 'th' ? 'เรื่องราวของเรา' : 'Our Story'}
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 leading-relaxed mb-4">
              {lang === 'th' 
                ? 'เราเริ่มต้นจากความรักในกีฬา BMX และความต้องการเห็นเด็กไทยได้มีโอกาสเรียนรู้อย่างถูกต้องจากโค้ชที่มีประสบการณ์ ด้วยความมุ่งมั่นที่จะสร้างมาตรฐานการสอน BMX ที่ดีที่สุดในประเทศไทย เราจึงก่อตั้ง The Master BMX ขึ้นมา'
                : 'We started from a love for BMX sport and the desire to see Thai kids have the opportunity to learn correctly from experienced coaches. With determination to create the best BMX teaching standards in Thailand, we founded The Master BMX.'}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {lang === 'th' 
                ? 'ปัจจุบันเรามีนักเรียนกว่า 200 คน โค้ชจากทีมชาติ 3 คน และได้ส่งนักกีฬาตัวแทนประเทศไทยในรายการระดับเอเชียหลายรายการ'
                : 'Currently we have over 200 students, 3 coaches from the national team, and have sent athletes representing Thailand in several international Asian competitions.'}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
            {lang === 'th' ? 'ค่านิยมของเรา' : 'Our Values'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-black border border-gray-800 p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
            {lang === 'th' ? 'ไทม์ไลน์' : 'Timeline'}
          </h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-20 flex-shrink-0">
                  <span className="text-red-500 font-black text-xl">{item.year}</span>
                </div>
                <div className="flex-1 border-l-2 border-gray-800 pl-6 pb-6">
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">200+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                {lang === 'th' ? 'นักเรียน' : 'Students'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">8</div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                {lang === 'th' ? 'ปีที่แล้ว' : 'Years Experience'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">3</div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                {lang === 'th' ? 'สถานที่ฝึก' : 'Locations'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">15+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                {lang === 'th' ? 'แชมป์' : 'Championships'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-4">
            {lang === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
          </h2>
          <p className="text-gray-500 mb-6">
            {lang === 'th' 
              ? 'พร้อมเริ่มต้นเส้นทาง BMX กับเราหรือยัง?' 
              : 'Ready to start your BMX journey with us?'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:081-234-5678" className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors">
              081-234-5678
            </a>
            <a href="https://line.me/R/ti/p/@rushfest" target="_blank" className="bg-green-600 text-white font-bold py-3 px-6 hover:bg-green-700 transition-colors">
              LINE @rushfest
            </a>
            <a href="https://www.instagram.com/rushfestth" target="_blank" className="bg-gray-800 text-white font-bold py-3 px-6 hover:bg-gray-700 transition-colors">
              IG @rushfestth
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
