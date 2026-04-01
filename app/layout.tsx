import type { Metadata } from "next";
import { Gaegu, Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({ weight: ["400", "500", "700", "900"], subsets: ["latin"], variable: "--font-noto-kr" });
const gaegu = Gaegu({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-gaegu" });

export const metadata: Metadata = {
  title: "틈틈잇 — 일상의 틈을 지식으로 채우세요",
  description: "아직도 숏폼으로 틈새 시간을 떼우나요? AI 맞춤형 퀴즈로 매일 5분, 당신의 지식을 틈틈이 채워보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} ${gaegu.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
