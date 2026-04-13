'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const completeBikes = [
  { id: 1, name: 'Kink Carve 16"', brand: 'KINK', price: 7499, image: '/bikes_kink_carve_16.jpg', size: '16"', age: '5-7 ปี', rating: 5.0, reviews: 12 },
  { id: 2, name: 'Kink Kicker 18"', brand: 'KINK', price: 8999, image: '/bikes_kink_kicker_18.jpg', size: '18"', age: '7-10 ปี', rating: 5.0, reviews: 8 },
  { id: 3, name: 'Kink Curb 20"', brand: 'KINK', price: 10499, image: '/bikes_kink_curb_20.jpg', size: '20"', age: '10+ ปี', rating: 4.9, reviews: 24 },
  { id: 4, name: 'Kink Launch 20.25"', brand: 'KINK', price: 9499, image: '/bikes_kink_launch_2025.jpg', size: '20.25"', age: '12+ ปี', rating: 5.0, reviews: 15 },
  { id: 5, name: 'Kink Setup 20.5"', brand: 'KINK', price: 14500, image: '/bikes_kink_setup_205.jpg', size: '20.5"', age: '13+ ปี', rating: 5.0, reviews: 6 },
  { id: 6, name: 'Kink Setup XL 21"', brand: 'KINK', price: 16500, image: '/bikes_kink_setup_xl.jpg', size: '21"', age: '14+ ปี', rating: 4.8, reviews: 4 },
  { id: 7, name: 'Kink Downside 20.75"', brand: 'KINK', price: 26000, image: '/bikes_kink_downside.jpg', size: '20.75"', age: '14+ ปี', rating: 5.0, reviews: 2, badge: 'BEST' },
  { id: 8, name: 'Kink Switch 20.75"', brand: 'KINK', price: 22000, image: '/bikes_kink_switch.jpg', size: '20.75"', age: '14+ ปี', rating: 4.9, reviews: 3 },
  { id: 9, name: 'Kink Williams 20.75" Pro', brand: 'KINK', price: 30000, image: '/bikes_kink_williams.jpg', size: '20.75"', age: '14+ ปี', rating: 5.0, reviews: 18, badge: 'PRO' },
  { id: 10, name: 'WeThePeople CRS 20.25"', brand: 'WETHEPEOPLE', price: 12500, image: '/bikes_wtp_crs.jpg', size: '20.25"', age: '12+ ปี', rating: 5.0, reviews: 9 },
  { id: 11, name: 'WeThePeople Battleship 20.75"', brand: 'WETHEPEOPLE', price: 22000, image: '/bikes_wtp_battleship.jpg', size: '20.75"', age: '14+ ปี', rating: 4.7, reviews: 5 },
];

const safetyGear = [
  { id: 1, name: 'Helmet Full Face', price: 1500, emoji: '🪖', rating: 5.0, reviews: 32 },
  { id: 2, name: 'Knee Pads', price: 500, emoji: '🦵', rating: 4.9, reviews: 18 },
  { id: 3, name: 'Elbow Pads', price: 500, emoji: '💪', rating: 4.8, reviews: 12 },
  { id: 4, name: 'Gloves', price: 300, emoji: '🧤', rating: 4.9, reviews: 24 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "text-black text-sm" : "text-gray-600 text-sm"}>★</span>
      ))}
    </div>
  );
}

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <section className="py-16 px-6 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">{t.shop.title}</h1>
          <p className="text-gray-500 text-lg">{t.shop.subtitle}</p>
        </div>
      </section>

      {/* Complete Bikes */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-xl font-bold uppercase tracking-tight">{t.shop.complete} ({completeBikes.length})</h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {completeBikes.map((product) => (
              <div key={product.id} className="bg-black border border-gray-800 hover:border-white transition-all">
                <div className="relative aspect-square bg-gray-950 p-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={300}
                    height={200}
                    className="w-full h-full object-contain" 
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 text-green-600 text-xs font-medium">{t.shop.inStock}</span>
                </div>
                <div className="p-4 border-t border-gray-800">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{product.brand}</p>
                  <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={product.rating} />
                    <span className="text-gray-500 text-xs">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">฿{product.price.toLocaleString()}</p>
                    <button className="bg-white text-black text-xs font-bold py-2 px-4 hover:bg-gray-200 transition-colors">
                      {t.shop.addCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Gear */}
      <section className="py-12 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
            <h2 className="text-xl font-bold uppercase tracking-tight">{t.shop.safety} ({safetyGear.length})</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {safetyGear.map((gear) => (
              <div key={gear.id} className="bg-black border border-gray-800 hover:border-white transition-all p-4 text-center">
                <div className="text-4xl mb-4">{gear.emoji}</div>
                <h3 className="font-bold text-sm mb-1">{gear.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <StarRating rating={gear.rating} />
                  <span className="text-gray-500 text-xs">({gear.reviews})</span>
                </div>
                <p className="font-bold text-lg mb-3">฿{gear.price.toLocaleString()}</p>
                <button className="w-full bg-white text-black text-xs font-bold py-2 px-4 hover:bg-gray-200 transition-colors">
                  {t.shop.addCart}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-tight">{t.shop.payment}</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white text-black px-6 py-3 text-sm font-bold">PromptPay</div>
            <div className="bg-white text-black px-6 py-3 text-sm font-bold">บัตรเครดิต</div>
            <div className="bg-white text-black px-6 py-3 text-sm font-bold">โอนเงิน</div>
          </div>
        </div>
      </section>
    </div>
  );
}
