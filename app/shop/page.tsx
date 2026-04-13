'use client';

import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Kink Carve 16"',
    brand: 'KINK',
    price: 7499,
    image: 'https://bmxdirect.asia/wp-content/uploads/2026/04/bikes_27_carve_k408_digitalgray1-550x384.jpg',
    category: 'complete',
    size: '16"',
    stock: true,
  },
  {
    id: 2,
    name: 'Kink Kicker 18"',
    brand: 'KINK',
    price: 8999,
    image: 'https://bmxdirect.asia/wp-content/uploads/2026/04/bikes_27_kicker_k410_glacierwhite1-550x384.jpg',
    category: 'complete',
    size: '18"',
    stock: true,
  },
  {
    id: 3,
    name: 'Kink Curb 20"',
    brand: 'KINK',
    price: 10499,
    image: 'https://bmxdirect.asia/wp-content/uploads/2026/04/bikes_27_curb_k400_mightnightblack1-550x384.jpg',
    category: 'complete',
    size: '20"',
    stock: true,
  },
  {
    id: 4,
    name: 'Kink Launch 20.25"',
    brand: 'KINK',
    price: 9499,
    image: 'https://bmxdirect.asia/wp-content/uploads/2026/04/bikes_27_launch_k420_retroblue1-550x384.jpg',
    category: 'complete',
    size: '20.25"',
    stock: true,
  },
  {
    id: 5,
    name: 'Kink Williams 20.75"',
    brand: 'KINK',
    price: 30000,
    image: 'https://bmxdirect.asia/wp-content/uploads/2026/04/bikes_27_williams_k490_mightnightblack1-550x384.jpg',
    category: 'complete',
    size: '20.75"',
    stock: true,
    pro: true,
  },
  {
    id: 6,
    name: 'WeThePeople CRS 20.25"',
    brand: 'WETHEPEOPLE',
    price: 12500,
    image: 'https://bmxdirect.asia/wp-content/uploads/2025/07/crs-prp-550x384.jpg',
    category: 'complete',
    size: '20.25"',
    stock: true,
  },
];

const safetyGear = [
  { id: 1, name: 'Helmet Full Face', price: 1500, emoji: '🪖' },
  { id: 2, name: 'Knee Pads', price: 500, emoji: '🦵' },
  { id: 3, name: 'Elbow Pads', price: 500, emoji: '💪' },
  { id: 4, name: 'Gloves', price: 300, emoji: '🧤' },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="bg-darkblue/95 backdrop-blur border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-xl">🏍️</span>
            </div>
            <span className="text-lg font-bold">THE MASTER <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BMX</span></span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← กลับหน้าแรก
          </Link>
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
            <span>🚲</span> Complete Bikes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all group">
                <div className="relative aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                  {product.pro && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      PRO
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    IN STOCK
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-primary text-xs font-bold mb-1">{product.brand}</p>
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">ขนาด {product.size}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-bold text-lg">฿{product.price.toLocaleString()}</p>
                    <button className="bg-white/10 hover:bg-primary text-white text-sm font-bold py-2 px-4 rounded-full transition-all">
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
            <span>🪖</span> อุปกรณ์ความปลอดภัย
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyGear.map((gear) => (
              <div key={gear.id} className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-6 text-center border border-white/10 hover:border-secondary/50 transition-all">
                <div className="text-5xl mb-4">{gear.emoji}</div>
                <h3 className="font-bold mb-1">{gear.name}</h3>
                <p className="text-primary font-bold text-lg">฿{gear.price.toLocaleString()}</p>
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
          <p className="text-gray-500 text-sm">© 2026 The Master BMX. สงวนลิขสิทธิ์.</p>
        </div>
      </footer>
    </div>
  );
}
