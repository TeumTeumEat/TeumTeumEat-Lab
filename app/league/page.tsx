import type { Metadata } from "next";
import Home from "../page";

const title = "틈틈잇 리그 - 매일 5분 퀴즈로 함께 겨뤄요";
const description =
  "틈틈잇 리그에서 매일 5분 퀴즈를 풀고 다른 학습자들과 순위를 겨뤄보세요.";

// 공유 링크 미리보기(카카오톡 등)에는 리그 문구가 뜨도록 메타데이터만 따로 둔다.
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  // 앱 연결용 공유 링크라 검색 결과에는 노출하지 않는다.
  robots: { index: false, follow: false },
};

// 앱 공유 링크(/league)를 PC에서 연 경우 메인 랜딩을 그대로 보여준다.
// 모바일 기기는 proxy.ts에서 스토어로 리다이렉트된다.
export default function League() {
  return <Home />;
}
