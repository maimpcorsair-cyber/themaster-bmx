import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
