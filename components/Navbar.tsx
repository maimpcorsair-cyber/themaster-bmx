'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-darkblue/95 backdrop-blur border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="THE MASTER BMX" width={50} height={50} className="rounded-lg" />
          <span className="text-lg font-bold">THE MASTER <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BMX</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">หน้าแรก</Link>
          <Link href="/programs" className="text-gray-400 hover:text-white transition-colors">คอร์สเรียน</Link>
          <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">ร้านค้า</Link>
          <Link href="/programs#contact" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-2 px-4 rounded-full transition-all">ติดต่อ</Link>
        </nav>
        <Link href="/shop" className="md:hidden bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded-full">
          ร้านค้า
        </Link>
      </div>
    </header>
  );
}
