import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Master BMX | โรงเรียนสอนขี่ BMX ยุค 2026",
  description: "โรงเรียนสอนขี่ BMX สำหรับเด็กวัย 4-15 ปี ฝึกโดยทีมชาติไทย BMX Racing & Freestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="bg-dark text-white antialiased">
        <Navbar />
        {children}
        <footer className="py-8 px-4 bg-darkblue border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">© 2026 The Master BMX. สงวนลิขสิทธิ์.</p>
        </footer>
      </body>
    </html>
  );
}
