import type { Metadata } from "next";
import { Gaegu, Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({ weight: ["400", "500", "700", "900"], subsets: ["latin"], variable: "--font-noto-kr" });
const gaegu = Gaegu({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-gaegu" });

const SITE_URL = "https://teumteumeat.co.kr";
const SITE_NAME = "틈틈잇";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "틈틈잇 - 일상의 틈을 지식으로 채우세요",
  description: "아직도 숏폼으로 틈새 시간을 떼우나요? AI 맞춤형 퀴즈로 매일 5분, 당신의 지식을 틈틈이 채워보세요.",
  openGraph: { siteName: SITE_NAME },
};

// 구글 검색 결과의 사이트 이름(제목 위 작은 이름)은 WebSite 구조화 데이터의 name을 가장 우선한다.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "TeumTeumEat",
  url: `${SITE_URL}/`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} ${gaegu.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
