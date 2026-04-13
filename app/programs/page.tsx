'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const coaches = [
  {
    name: 'โค้ชพี่โจ้',
    titleKey: 'headCoach' as const,
    brandKey: 'nationalTeam' as const,
    image: '/coach.jpg',
    achievements: ['อดีตนักกีฬาทีมชาติไทย', 'แชมป์ Asia Cup 5 สมัย', 'ประสบการณ์สอน 15 ปี'],
    videoId: 'W6Kn4-b2XIM',
  },
  {
    name: 'โค้ชพี่เบียร์',
    titleKey: 'assistant' as const,
    brandKey: 'nationalTeam' as const,
    image: '/coach_race1.jpg',
    achievements: ['แชมป์ประเทศไทย 3 สมัย', 'ประสบการณ์สอน 10 ปี', 'ผู้ก่อตั้ง The Master BMX'],
    videoId: '9B0RpT90SnQ',
  },
];

export default function ProgramsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <section className="py-16 px-6 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">{t.programs.title}</h1>
          <p className="text-gray-500 text-lg">{t.programs.subtitle}</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-800 hover:border-white transition-all p-8">
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{t.programs.little.age}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{t.programs.little.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.programs.little.desc}</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-400 text-sm">✓ สอนทรงตัวบนจักรยาน</li>
                <li className="text-gray-400 text-sm">✓ ฝึกเบรกอย่างปลอดภัย</li>
                <li className="text-gray-400 text-sm">✓ เกมส์และกิจกรรมสนุกๆ</li>
                <li className="text-gray-400 text-sm">✓ ฝึกในสนามที่ปลอดภัย</li>
              </ul>
              <p className="text-2xl font-bold">฿1,500<span className="text-sm font-normal text-gray-500">/เดือน</span></p>
            </div>
            
            <div className="bg-black border border-gray-800 hover:border-white transition-all p-8">
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{t.programs.junior.age}</span>
              <h3 className="text-xl font-bold mt-2 mb-2">{t.programs.junior.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.programs.junior.desc}</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-400 text-sm">✓ ฝึก Bunny Hop</li>
                <li className="text-gray-400 text-sm">✓ เทคนิคการบังคับ</li>
                <li className="text-gray-400 text-sm">✓ ฝึกใน Pump Track</li>
                <li className="text-gray-400 text-sm">✓ เตรียมแข่งขัน</li>
              </ul>
              <p className="text-2xl font-bold">฿2,000<span className="text-sm font-normal text-gray-500">/เดือน</span></p>
            </div>
            
            <div className="bg-red-600/5 border border-red-600 p-8">
              <span className="text-red-500 text-xs font-medium uppercase tracking-wider">{t.programs.popular}</span>
              <h3 className="text-xl font-bold mt-2 mb-2 text-red-500">{t.programs.competitor.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{t.programs.competitor.desc}</p>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-400 text-sm">✓ ฝึกแข่งขันทุกสัปดาห์</li>
                <li className="text-gray-400 text-sm">✓ เทคนิคขั้นสูง</li>
                <li className="text-gray-400 text-sm">✓ ร่วมทีม Academy</li>
                <li className="text-gray-400 text-sm">✓ เข้าร่วม RUSTFEST</li>
              </ul>
              <p className="text-2xl font-bold text-red-500">฿2,500<span className="text-sm font-normal text-gray-500">/เดือน</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-6 border-b border-gray-800 pb-4 uppercase tracking-tight">{t.locations.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-800 p-6">
              <h3 className="font-bold text-lg mb-1">{t.locations.rush.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{t.locations.rush.city}</p>
              <p className="text-white text-sm font-medium">{t.locations.rush.days}</p>
            </div>
            <div className="bg-black border border-gray-800 p-6">
              <h3 className="font-bold text-lg mb-1">{t.locations.bang.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{t.locations.bang.city}</p>
              <p className="text-white text-sm font-medium">{t.locations.bang.days}</p>
            </div>
            <div className="bg-black border border-gray-800 p-6">
              <h3 className="font-bold text-lg mb-1">{t.locations.pattaya.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{t.locations.pattaya.city}</p>
              <p className="text-white text-sm font-medium">{t.locations.pattaya.days}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-6 border-b border-gray-800 pb-4 uppercase tracking-tight">{t.coaches.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coaches.map((coach, i) => (
              <div key={i} className="bg-black border border-gray-800 p-6">
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
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{t.coaches[coach.titleKey]}</p>
                    <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                    <p className="text-white text-sm mb-3">{t.coaches[coach.brandKey]}</p>
                    <ul className="space-y-1">
                      {coach.achievements.map((a, j) => (
                        <li key={j} className="text-gray-400 text-sm">• {a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 aspect-video bg-gray-900 rounded overflow-hidden">
                  <iframe 
                    src={`https://www.youtube.com/embed/${coach.videoId}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">{t.cta.title}</h2>
          <p className="text-gray-500 mb-6">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:081-234-5678" className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors">
              {t.cta.call}
            </a>
            <a href="https://line.me" target="_blank" className="bg-gray-800 text-white font-bold py-3 px-6 hover:bg-gray-700 transition-colors">
              {t.cta.line}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
