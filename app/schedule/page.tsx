'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const scheduleData = {
  th: {
    rush: {
      name: 'สเกตปาร์ครัชดาภิเษก',
      address: 'ซอยลาดพร้าว 71 แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ',
      sessions: [
        { day: 'จันทร์', time: '16:00 - 17:30', program: 'Little Rider', spots: 8 },
        { day: 'อังคาร', time: '16:00 - 17:30', program: 'Junior Rider', spots: 10 },
        { day: 'พุธ', time: '16:00 - 17:30', program: 'Little Rider', spots: 6 },
        { day: 'พฤหัสบดี', time: '16:00 - 17:30', program: 'Competitor', spots: 8 },
        { day: 'ศุกร์', time: '16:00 - 17:30', program: 'Junior Rider', spots: 10 },
      ],
    },
    bang: {
      name: 'สเกตปาร์คบางแค',
      address: 'ถนนบางแค แขวงบางแค เขตบางแค กรุงเทพฯ',
      sessions: [
        { day: 'เสาร์', time: '09:00 - 10:30', program: 'Little Rider', spots: 8 },
        { day: 'เสาร์', time: '11:00 - 12:30', program: 'Junior Rider', spots: 10 },
        { day: 'เสาร์', time: '14:00 - 15:30', program: 'Competitor', spots: 8 },
        { day: 'อาทิตย์', time: '09:00 - 10:30', program: 'Little Rider', spots: 6 },
        { day: 'อาทิตย์', time: '11:00 - 12:30', program: 'Junior Rider', spots: 10 },
      ],
    },
    pattaya: {
      name: 'สเกตปาร์คพัทยา',
      address: 'พัทยา จ.ชลบุรี',
      sessions: [
        { day: 'ทุกวัน', time: '09:00 - 12:00', program: 'Camp', spots: 15 },
      ],
    },
  },
  en: {
    rush: {
      name: 'Ratchada Skate Park',
      address: 'Soi Ladprao 71, Lat Phrao, Bangkok',
      sessions: [
        { day: 'Monday', time: '16:00 - 17:30', program: 'Little Rider', spots: 8 },
        { day: 'Tuesday', time: '16:00 - 17:30', program: 'Junior Rider', spots: 10 },
        { day: 'Wednesday', time: '16:00 - 17:30', program: 'Little Rider', spots: 6 },
        { day: 'Thursday', time: '16:00 - 17:30', program: 'Competitor', spots: 8 },
        { day: 'Friday', time: '16:00 - 17:30', program: 'Junior Rider', spots: 10 },
      ],
    },
    bang: {
      name: 'Bang Khae Skate Park',
      address: 'Bang Khae, Bangkok',
      sessions: [
        { day: 'Saturday', time: '09:00 - 10:30', program: 'Little Rider', spots: 8 },
        { day: 'Saturday', time: '11:00 - 12:30', program: 'Junior Rider', spots: 10 },
        { day: 'Saturday', time: '14:00 - 15:30', program: 'Competitor', spots: 8 },
        { day: 'Sunday', time: '09:00 - 10:30', program: 'Little Rider', spots: 6 },
        { day: 'Sunday', time: '11:00 - 12:30', program: 'Junior Rider', spots: 10 },
      ],
    },
    pattaya: {
      name: 'Pattaya Skate Park',
      address: 'Pattaya, Chonburi',
      sessions: [
        { day: 'Daily', time: '09:00 - 12:00', program: 'Camp', spots: 15 },
      ],
    },
  },
};

const programColors: { [key: string]: string } = {
  'Little Rider': 'bg-blue-600',
  'Junior Rider': 'bg-green-600',
  'Competitor': 'bg-red-600',
  'Camp': 'bg-purple-600',
};

export default function SchedulePage() {
  const { t, lang } = useLanguage();
  const data = scheduleData[lang];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <section className="py-16 px-6 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
            {lang === 'th' ? 'ตารางเรียน' : 'Class Schedule'}
          </h1>
          <p className="text-gray-500 text-lg">
            {lang === 'th' 
              ? 'เลือกเวลาและสถานที่ที่สะดวก' 
              : 'Choose your convenient time and location'}
          </p>
        </div>
      </section>

      {/* Schedule by Location */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Ratchada */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black uppercase tracking-tight">{data.rush.name}</h2>
              <p className="text-gray-500 text-sm">{data.rush.address}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'วัน' : 'Day'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'เวลา' : 'Time'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'โปรแกรม' : 'Program'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'ที่ว่าง' : 'Spots'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.rush.sessions.map((session, i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                      <td className="py-4 px-4 font-bold">{session.day}</td>
                      <td className="py-4 px-4 text-gray-400">{session.time}</td>
                      <td className="py-4 px-4">
                        <span className={`${programColors[session.program] || 'bg-gray-600'} px-3 py-1 text-xs font-bold uppercase`}>
                          {session.program}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={session.spots > 5 ? 'text-green-500' : session.spots > 2 ? 'text-yellow-500' : 'text-red-500'}>
                          {session.spots} {lang === 'th' ? 'ที่' : 'spots'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bang Khae */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black uppercase tracking-tight">{data.bang.name}</h2>
              <p className="text-gray-500 text-sm">{data.bang.address}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'วัน' : 'Day'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'เวลา' : 'Time'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'โปรแกรม' : 'Program'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'ที่ว่าง' : 'Spots'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.bang.sessions.map((session, i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                      <td className="py-4 px-4 font-bold">{session.day}</td>
                      <td className="py-4 px-4 text-gray-400">{session.time}</td>
                      <td className="py-4 px-4">
                        <span className={`${programColors[session.program] || 'bg-gray-600'} px-3 py-1 text-xs font-bold uppercase`}>
                          {session.program}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={session.spots > 5 ? 'text-green-500' : session.spots > 2 ? 'text-yellow-500' : 'text-red-500'}>
                          {session.spots} {lang === 'th' ? 'ที่' : 'spots'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pattaya */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black uppercase tracking-tight">{data.pattaya.name}</h2>
              <p className="text-gray-500 text-sm">{data.pattaya.address}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'วัน' : 'Day'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'เวลา' : 'Time'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'โปรแกรม' : 'Program'}
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      {lang === 'th' ? 'ที่ว่าง' : 'Spots'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.pattaya.sessions.map((session, i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
                      <td className="py-4 px-4 font-bold">{session.day}</td>
                      <td className="py-4 px-4 text-gray-400">{session.time}</td>
                      <td className="py-4 px-4">
                        <span className={`${programColors[session.program] || 'bg-gray-600'} px-3 py-1 text-xs font-bold uppercase`}>
                          {session.program}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={session.spots > 5 ? 'text-green-500' : session.spots > 2 ? 'text-yellow-500' : 'text-red-500'}>
                          {session.spots} {lang === 'th' ? 'ที่' : 'spots'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Program Legend */}
      <section className="py-12 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-tight">
            {lang === 'th' ? 'ประเภทโปรแกรม' : 'Program Types'}
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-600"></span>
              <span className="text-sm">Little Rider (4-6 ปี / years)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-green-600"></span>
              <span className="text-sm">Junior Rider (7-12 ปี / years)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-red-600"></span>
              <span className="text-sm">Competitor (13+ ปี / years)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-purple-600"></span>
              <span className="text-sm">{lang === 'th' ? 'Camp รายเดือน' : 'Monthly Camp'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-4">
            {lang === 'th' ? 'สนใจจองคอร์ส?' : 'Interested in Booking?'}
          </h2>
          <p className="text-gray-500 mb-6">
            {lang === 'th' 
              ? 'ติดต่อเราผ่าน LINE เพื่อจองคอร์สและทดลองเรียนฟรี 1 ครั้ง' 
              : 'Contact us via LINE to book a class and get a free trial session'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:081-234-5678" className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors">
              081-234-5678
            </a>
            <a href="https://line.me/R/ti/p/@rushfest" target="_blank" className="bg-green-600 text-white font-bold py-3 px-6 hover:bg-green-700 transition-colors">
              LINE @rushfest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
