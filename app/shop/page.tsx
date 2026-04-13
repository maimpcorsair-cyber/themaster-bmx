'use client';

import Image from 'next/image';
import Link from 'next/link';

const completeBikes = [
  {
    id: 1,
    name: 'Kink Carve 16"',
    brand: 'KINK',
    price: 7499,
    image: '/bikes_kink_carve_16.jpg',
    category: 'complete',
    size: '16"',
    age: '5-7 ปี',
    stock: true,
    description: 'เหมาะสำหรับเด็กที่เริ่มฝึก ขนาดพอดี ปลอดภัย',
  },
  {
    id: 2,
    name: 'Kink Kicker 18"',
    brand: 'KINK',
    price: 8999,
    image: '/bikes_kink_kicker_18.jpg',
    category: 'complete',
    size: '18"',
    age: '7-10 ปี',
    stock: true,
    description: 'สำหรับเด็กวัยกลาง พร้อมฝึกทักษะขั้นสูง',
  },
  {
    id: 3,
    name: 'Kink Curb 20"',
    brand: 'KINK',
    price: 10499,
    image: '/bikes_kink_curb_20.jpg',
    category: 'complete',
    size: '20"',
    age: '10+ ปี',
    stock: true,
    description: 'คลาสสิคโมเดล ขายดีที่สุด คุ้มค่าราคา',
  },
  {
    id: 4,
    name: 'Kink Launch 20.25"',
    brand: 'KINK',
    price: 9499,
    image: '/bikes_kink_launch_2025.jpg',
    category: 'complete',
    size: '20.25"',
    age: '12+ ปี',
    stock: true,
    description: 'Entry level คุณภาพสูง พร้อม sealed bearing',
  },
  {
    id: 5,
    name: 'Kink Setup 20.5"',
    brand: 'KINK',
    price: 14500,
    image: '/bikes_kink_setup_205.jpg',
    category: 'complete',
    size: '20.5"',
    age: '13+ ปี',
    stock: true,
    description: 'สำหรับผู้ฝึกขั้นกลาง-สูง Chromoly frame',
  },
  {
    id: 6,
    name: 'Kink Setup XL 21"',
    brand: 'KINK',
    price: 16500,
    image: '/bikes_kink_setup_xl.jpg',
    category: 'complete',
    size: '21"',
    age: '14+ ปี',
    stock: true,
    description: 'ขนาดใหญ่ขึ้น สำหรับผู้ใหญ่หรือวัยรุ่น',
  },
  {
    id: 7,
    name: 'Kink Downside 20.75"',
    brand: 'KINK',
    price: 26000,
    image: '/bikes_kink_downside.jpg',
    category: 'complete',
    size: '20.75"',
    age: '14+ ปี',
    stock: true,
    pro: true,
    description: 'Aftermarket parts พรีเมียม พร้อม Foundry bars',
  },
  {
    id: 8,
    name: 'Kink Switch 20.75"',
    brand: 'KINK',
    price: 22000,
    image: '/bikes_kink_switch.jpg',
    category: 'complete',
    size: '20.75"',
    age: '14+ ปี',
    stock: true,
    description: 'ออกแบบมาสำหรับ Brake-less พร้อม brake mounts',
  },
  {
    id: 9,
    name: 'Kink Williams 20.75" Pro',
    brand: 'KINK',
    price: 30000,
    image: '/bikes_kink_williams.jpg',
    category: 'complete',
    size: '20.75"',
    age: '14+ ปี',
    stock: true,
    pro: true,
    description: 'Nathan Williams Signature ระดับโปร สเปคสูงสุด',
  },
  {
    id: 10,
    name: 'WeThePeople CRS 20.25"',
    brand: 'WETHEPEOPLE',
    price: 12500,
    image: '/bikes_wtp_crs.jpg',
    category: 'complete',
    size: '20.25"',
    age: '12+ ปี',
    stock: true,
    description: 'แบรนด์ดัง คุณภาพระดับโลก',
  },
  {
    id: 11,
    name: 'WeThePeople Battleship 20.75"',
    brand: 'WETHEPEOPLE',
    price: 22000,
    image: '/bikes_wtp_battleship.jpg',
    category: 'complete',
    size: '20.75"',
    age: '14+ ปี',
    stock: true,
    description: 'Frame ระดับแชมป์ ออกแบบมาสำหรับ Street',
  },
];

const safetyGear = [
  { id: 1, name: 'Helmet Full Face', price: 1500, emoji: '🪖', description: 'Helmet คุณภาพสูง กันกระแทก' },
  { id: 2, name: 'Knee Pads', price: 500, emoji: '🦵', description: 'ปกป้องเข่า พร้อม foam กันกระแทก' },
  { id: 3, name: 'Elbow Pads', price: 500, emoji: '💪', description: 'ปกป้องข้อศอก สวมใส่สบาย' },
  { id: 4, name: 'Gloves', price: 300, emoji: '🧤', description: 'ถุงมือ BMX กระชับมือ' },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="bg-darkblue/95 backdrop-blur border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-lg font-bold">THE MASTER <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BMX</span></span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/rustfest" className="text-primary hover:text-white transition-colors font-bold">RUSTFEST</Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              ← กลับหน้าแรก
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-darkblue to-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">ร้าน<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">จักรยาน</span></h1>
          <p className="text-gray-400 text-lg">จักรยานคุณภาพ + อุปกรณ์ความปลอดภัย</p>
        </div>
      </section>

      {/* Complete Bikes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span>🚲</span> Complete Bikes ({completeBikes.length} รายการ)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {completeBikes.map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all group">
                <div className="relative aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={400}
                    height={300}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                  />
                  {product.pro && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ PRO
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    ✓ IN STOCK
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-primary text-xs font-bold mb-1">{product.brand}</p>
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <span>📏 {product.size}</span>
                    <span>👤 {product.age}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-bold text-xl">฿{product.price.toLocaleString()}</p>
                    <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm font-bold py-2 px-4 rounded-full transition-all">
                      สนใจ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Gear */}
      <section className="py-16 px-4 bg-darkblue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span>🪖</span> อุปกรณ์ความปลอดภัย ({safetyGear.length} รายการ)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyGear.map((gear) => (
              <div key={gear.id} className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-6 text-center border border-white/10 hover:border-secondary/50 transition-all">
                <div className="text-6xl mb-4">{gear.emoji}</div>
                <h3 className="font-bold text-lg mb-1">{gear.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{gear.description}</p>
                <p className="text-primary font-bold text-xl">฿{gear.price.toLocaleString()}</p>
                <button className="mt-4 w-full bg-white/10 hover:bg-secondary text-white text-sm font-bold py-2 px-4 rounded-full transition-all">
                  สนใจ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">💳 วิธีการชำระเงิน</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 text-center border border-green-500/20">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold mb-2">PromptPay</h3>
              <p className="text-gray-400 text-sm">โอนเงินผ่าน Mobile Banking</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 text-center border border-blue-500/20">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold mb-2">บัตรเครดิต</h3>
              <p className="text-gray-400 text-sm">Visa / Mastercard</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 text-center border border-orange-500/20">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="font-bold mb-2">โอนเงิน</h3>
              <p className="text-gray-400 text-sm">โอนเข้าบัญชีธนาคาร</p>
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
