'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// === PRODUCTS DATA ===
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
  // Helmets
  { id: 101, name: 'Pro-Tec Street Helmet', brand: 'PRO-TEC', price: 2500, image: '/gear_helmet_protec.jpg', category: 'helmets', rating: 4.9, reviews: 32 },
  { id: 102, name: 'Pro-Tec Bass Boat Helmet', brand: 'PRO-TEC', price: 2800, image: '/gear_helmet_bass.jpg', category: 'helmets', rating: 5.0, reviews: 18 },
  { id: 103, name: 'Pro-Tec Sport Helmet', brand: 'PRO-TEC', price: 2200, image: '/gear_helmet_sport.jpg', category: 'helmets', rating: 4.8, reviews: 24 },
  { id: 104, name: 'Triple 8 Certified Helmet', brand: 'TRIPLE 8', price: 3200, image: '/gear_helmet_t8.jpg', category: 'helmets', rating: 4.9, reviews: 15 },
  // Gloves
  { id: 105, name: 'Pro-Tec Gloves', brand: 'PRO-TEC', price: 450, image: '/gear_gloves_protec.jpg', category: 'gloves', rating: 4.7, reviews: 45 },
  { id: 106, name: 'FUSE Wrist Glove', brand: 'FUSE', price: 550, image: '/gear_gloves_fuse.jpg', category: 'gloves', rating: 4.8, reviews: 28 },
  { id: 107, name: 'BDC Gloves', brand: 'BDC', price: 380, image: '/gear_gloves_bdc.jpg', category: 'gloves', rating: 4.6, reviews: 52 },
  // Knee Pads
  { id: 108, name: 'FUSE Echo 100 Knee/Shin Pad', brand: 'FUSE', price: 1800, image: '/gear_knee_fuse_echo.jpg', category: 'knee-pads', rating: 5.0, reviews: 22, badge: 'BEST' },
  { id: 109, name: 'FUSE Delta 125 Knee/Shin/Ankle', brand: 'FUSE', price: 2200, image: '/gear_knee_fuse_delta.jpg', category: 'knee-pads', rating: 4.9, reviews: 14 },
  { id: 110, name: 'Shadow Super Slim V2 Knee Pads', brand: 'SHADOW', price: 1500, image: '/gear_knee_shadow.jpg', category: 'knee-pads', rating: 4.8, reviews: 19 },
  { id: 111, name: 'Stay Strong Combat Knee/Shin', brand: 'STAY STRONG', price: 1950, image: '/gear_knee_staystrong.jpg', category: 'knee-pads', rating: 4.9, reviews: 8 },
  // Elbow Pads
  { id: 112, name: 'Pro-Tec Elbow Pad', brand: 'PRO-TEC', price: 800, image: '/gear_elbow_protec.jpg', category: 'elbow-pads', rating: 4.7, reviews: 33 },
  { id: 113, name: 'FUSE Lomi Elbow Pads', brand: 'FUSE', price: 950, image: '/gear_elbow_fuse.jpg', category: 'elbow-pads', rating: 4.8, reviews: 21 },
  // Shin Guards
  { id: 114, name: 'Stay Strong Shin Guards', brand: 'STAY STRONG', price: 1200, image: '/gear_shin_staystrong.jpg', category: 'shin-guards', rating: 4.9, reviews: 12 },
  // Body Armor
  { id: 115, name: 'Pro-Tec Body Armor', brand: 'PRO-TEC', price: 3500, image: '/gear_body_protec.jpg', category: 'body-armor', rating: 5.0, reviews: 9 },
  // Neck Brace
  { id: 116, name: 'Leatt Neck Brace', brand: 'LEATT', price: 5500, image: '/gear_neck_leatt.jpg', category: 'neck-brace', rating: 5.0, reviews: 6 },
];

// === PROMOTIONS ===
const promotions = [
  { id: 1, code: 'NEWRIDER', discount: 10, labelTh: 'ส่วนลด 10% สำหรับมือใหม่', labelEn: '10% off for new riders', minPurchase: 2000 },
  { id: 2, code: 'SIBLING', discount: 15, labelTh: 'ส่วนลด 15% พี่น้อง', labelEn: '15% off for siblings', minPurchase: 3000 },
  { id: 3, code: 'RUSTFEST', discount: 20, labelTh: 'ลด 20% สำหรับผู้เข้าแข่งขัน RUSTFEST', labelEn: '20% off for RUSTFEST participants', minPurchase: 0 },
];

// === REVIEWS ===
const reviews = [
  { id: 1, name: 'คุณแม่น้องไนซ์', location: 'กรุงเทพฯ', textTh: 'ลูกชอบมากค่ะ โค้ชใจดีสอนเข้าใจง่าย เด็กๆ มีความสุขมาก', textEn: 'My son loves it! Coach is kind and patient. Kids are very happy.', rating: 5, program: 'Little Rider', avatar: 'N' },
  { id: 2, name: 'คุณพ่อน้องมาร์ค', location: 'พัทยา', textTh: 'ลูกเริ่มแข่งได้แล้ว ภูมิใจมากที่ได้ส่งมาเรียนที่นี่', textEn: "My child can compete now. So proud to have enrolled here.", rating: 5, program: 'Competitor', avatar: 'M' },
  { id: 3, name: 'คุณแม่น้องเจน', location: 'รัชดา', textTh: 'สนามฝึกสอนดีมาก ปลอดภัย พี่เบียร์สอนเก่งมาก', textEn: 'Great training ground. Safe environment. Coach Beer teaches very well.', rating: 5, program: 'Junior Rider', avatar: 'J' },
  { id: 4, name: 'นายธนกฤต', location: 'บางแค', textTh: 'อายุ 15 ปีเริ่มใหม่ สอนจากศูนย์จนแข่งได้ ประทับใจมาก', textEn: 'Started at 15, from zero to competing. Very impressed.', rating: 5, program: 'Competitor', avatar: 'T' },
];

const categories = [
  { key: 'all', labelTh: 'ทั้งหมด', labelEn: 'All' },
  { key: 'helmets', labelTh: 'หมวก', labelEn: 'Helmets' },
  { key: 'gloves', labelTh: 'ถุงมือ', labelEn: 'Gloves' },
  { key: 'knee-pads', labelTh: 'เสื่อรองเข่า', labelEn: 'Knee Pads' },
  { key: 'elbow-pads', labelTh: 'เสื่อรองข้อศอก', labelEn: 'Elbow Pads' },
  { key: 'shin-guards', labelTh: 'เสื่อรองน่อง', labelEn: 'Shin Guards' },
  { key: 'body-armor', labelTh: 'เกราะป้องกัน', labelEn: 'Body Armor' },
  { key: 'neck-brace', labelTh: 'ปกคอ', labelEn: 'Neck Brace' },
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
  const { t, lang } = useLanguage();
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const addToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      setCart(prev => {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      });
    } else {
      setCart(prev => ({ ...prev, [id]: qty }));
    }
  };

  const applyPromo = () => {
    const promo = promotions.find(p => p.code.toUpperCase() === promoCode.toUpperCase());
    if (promo) {
      setDiscount(promo.discount);
    } else {
      setDiscount(0);
      alert(lang === 'th' ? 'รหัสส่วนลดไม่ถูกต้อง' : 'Invalid promo code');
    }
  };

  const cartSubtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = [...completeBikes, ...safetyGear].find(p => p.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);
  
  const discountAmount = Math.floor(cartSubtotal * discount / 100);
  const cartTotal = cartSubtotal - discountAmount;
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const filteredGear = selectedCategory === 'all' 
    ? safetyGear 
    : safetyGear.filter(g => g.category === selectedCategory);

  const getCategoryLabel = (cat: typeof categories[0]) => lang === 'th' ? cat.labelTh : cat.labelEn;

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <section className="py-16 px-6 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">{t.shop.title}</h1>
              <p className="text-gray-500 text-lg">{t.shop.subtitle}</p>
            </div>
            <button 
              onClick={() => setShowCart(true)}
              className="relative bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors"
            >
              CART ({cartCount})
            </button>
          </div>
        </div>
      </section>

      {/* Promotions Banner */}
      <section className="py-6 px-6 bg-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {promotions.map((promo) => (
              <span key={promo.id} className="font-bold">
                {lang === 'th' ? promo.labelTh : promo.labelEn}
              </span>
            ))}
          </div>
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
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="bg-white text-black text-xs font-bold py-2 px-4 hover:bg-gray-200 transition-colors"
                    >
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
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat.key 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredGear.map((gear) => (
              <div key={gear.id} className="bg-black border border-gray-800 hover:border-white transition-all">
                <div className="relative aspect-square bg-gray-900 p-4">
                  <div className="w-full h-full flex items-center justify-center text-gray-700">
                    <span className="text-4xl font-black uppercase">{gear.brand.charAt(0)}</span>
                  </div>
                  {gear.badge && (
                    <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-2 py-1">
                      {gear.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 text-green-600 text-xs font-medium">{t.shop.inStock}</span>
                </div>
                <div className="p-4 border-t border-gray-800">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{gear.brand}</p>
                  <h3 className="font-bold text-sm mb-2">{gear.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={gear.rating} />
                    <span className="text-gray-500 text-xs">({gear.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">฿{gear.price.toLocaleString()}</p>
                    <button 
                      onClick={() => addToCart(gear.id)}
                      className="bg-white text-black text-xs font-bold py-2 px-4 hover:bg-gray-200 transition-colors"
                    >
                      {t.shop.addCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">{lang === 'th' ? 'รีวิวจากลูกค้า' : 'Customer Reviews'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-950 border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{review.name}</h3>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-gray-400 text-sm mt-3 mb-2">
                  {lang === 'th' ? review.textTh : review.textEn}
                </p>
                <span className="text-xs text-red-500 font-bold uppercase">{review.program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-12 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-6 uppercase tracking-tight">{t.shop.payment}</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white text-black px-6 py-3 text-sm font-bold">PromptPay</div>
            <div className="bg-white text-black px-6 py-3 text-sm font-bold">บัตรเครดิต</div>
            <div className="bg-white text-black px-6 py-3 text-sm font-bold">โอนเงิน</div>
          </div>
        </div>
      </section>

      {/* Cart Slide-out */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowCart(false)} />
          <div className="relative w-full max-w-md bg-black border-l border-gray-800 h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black uppercase">YOUR CART ({cartCount})</h2>
                <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-white text-2xl">&times;</button>
              </div>
              
              {cartCount === 0 ? (
                <p className="text-gray-500 text-center py-12">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {Object.entries(cart).map(([id, qty]) => {
                      const product = [...completeBikes, ...safetyGear].find(p => p.id === Number(id));
                      if (!product) return null;
                      return (
                        <div key={id} className="flex gap-4 bg-gray-900 p-4">
                          <div className="w-20 h-20 bg-gray-800 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-600">{product.brand.charAt(0)}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-sm">{product.name}</h3>
                            <p className="text-gray-500 text-sm">฿{product.price.toLocaleString()}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button 
                                onClick={() => updateQty(Number(id), qty - 1)}
                                className="w-8 h-8 bg-gray-800 text-white font-bold"
                              >-</button>
                              <span className="w-8 text-center">{qty}</span>
                              <button 
                                onClick={() => updateQty(Number(id), qty + 1)}
                                className="w-8 h-8 bg-gray-800 text-white font-bold"
                              >+</button>
                            </div>
                          </div>
                          <p className="font-bold">฿{(product.price * qty).toLocaleString()}</p>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Promo Code */}
                  <div className="border-t border-gray-800 pt-4 mb-4">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder={lang === 'th' ? 'ใส่รหัสส่วนลด' : 'Enter promo code'}
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-gray-900 border border-gray-800 p-2 text-white text-sm"
                      />
                      <button 
                        onClick={applyPromo}
                        className="bg-red-600 text-white px-4 py-2 text-sm font-bold hover:bg-red-700 transition-colors"
                      >
                        {lang === 'th' ? 'ใช้' : 'Apply'}
                      </button>
                    </div>
                    {discount > 0 && (
                      <p className="text-green-500 text-sm mt-2">{lang === 'th' ? `ส่วนลด ${discount}%` : `${discount}% off`}</p>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4 mb-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Subtotal</span>
                      <span>฿{cartSubtotal.toLocaleString()}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-500 mb-2">
                        <span>Discount ({discount}%)</span>
                        <span>-฿{discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold">
                      <span>TOTAL</span>
                      <span>฿{cartTotal.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => { setShowCart(false); setShowCheckout(true); }}
                    className="w-full bg-white text-black font-bold py-4 hover:bg-gray-200 transition-colors uppercase tracking-widest"
                  >
                    CHECKOUT
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowCheckout(false)} />
          <div className="relative w-full max-w-lg bg-black border border-gray-800 p-8 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowCheckout(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl">&times;</button>
            
            <h2 className="text-2xl font-black uppercase mb-6">CHECKOUT</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold uppercase mb-2">{lang === 'th' ? 'ชื่อ' : 'Name'}</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-800 p-3 text-white focus:border-white outline-none" placeholder={lang === 'th' ? 'กรอกชื่อของคุณ' : 'Enter your name'} />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">{lang === 'th' ? 'เบอร์โทร' : 'Phone'}</label>
                <input type="tel" className="w-full bg-gray-900 border border-gray-800 p-3 text-white focus:border-white outline-none" placeholder="081-234-5678" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">LINE ID</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-800 p-3 text-white focus:border-white outline-none" placeholder="@yourlineid" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase mb-2">{lang === 'th' ? 'ที่อยู่' : 'Address'}</label>
                <textarea className="w-full bg-gray-900 border border-gray-800 p-3 text-white focus:border-white outline-none h-24" placeholder={lang === 'th' ? 'ที่อยู่จัดส่ง' : 'Shipping address'} />
              </div>
              
              <div className="border-t border-gray-800 pt-4">
                <p className="text-sm font-bold uppercase mb-3">{lang === 'th' ? 'วิธีชำระเงิน' : 'Payment Method'}</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 bg-gray-900 p-3 border border-gray-800 cursor-pointer hover:border-white transition-colors">
                    <input type="radio" name="payment" value="linepay" className="w-4 h-4" defaultChecked />
                    <span className="font-bold">LINE Pay</span>
                  </label>
                  <label className="flex items-center gap-3 bg-gray-900 p-3 border border-gray-800 cursor-pointer hover:border-white transition-colors">
                    <input type="radio" name="payment" value="promptpay" className="w-4 h-4" />
                    <span className="font-bold">PromptPay / พร้อมเพย์</span>
                  </label>
                  <label className="flex items-center gap-3 bg-gray-900 p-3 border border-gray-800 cursor-pointer hover:border-white transition-colors">
                    <input type="radio" name="payment" value="transfer" className="w-4 h-4" />
                    <span className="font-bold">{lang === 'th' ? 'โอนเงิน' : 'Bank Transfer'}</span>
                  </label>
                  <label className="flex items-center gap-3 bg-gray-900 p-3 border border-gray-800 cursor-pointer hover:border-white transition-colors">
                    <input type="radio" name="payment" value="cod" className="w-4 h-4" />
                    <span className="font-bold">{lang === 'th' ? 'เก็บเงินปลายทาง' : 'COD'}</span>
                  </label>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4">
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-500 mb-2">
                    <span>{lang === 'th' ? 'ส่วนลด' : 'Discount'} ({discount}%)</span>
                    <span>-฿{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>TOTAL</span>
                  <span>฿{cartTotal.toLocaleString()}</span>
                </div>
                <a 
                  href="https://line.me/R/ti/p/%40rushfest" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white font-bold py-4 hover:bg-green-700 transition-colors uppercase tracking-widest text-center"
                >
                  ADD LINE TO CONFIRM ORDER
                </a>
                <p className="text-center text-gray-500 text-xs mt-2">{lang === 'th' ? 'กดปุ่มเพื่อติดต่อ LINE ร้านสั่งซื้อ' : 'Click to contact LINE shop to confirm order'}</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
