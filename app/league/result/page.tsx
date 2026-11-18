import type { Metadata } from "next";
import Home from "../../page";

const title = "이번 주 틈틈잇 리그 결과";
const description = "내 순위를 확인하고 함께 도전해 보세요";

// 앱의 리그 결과 공유 링크(/league/result) 미리보기(카카오톡 등)용 메타데이터.
// 1등 / 2~10위 / 순위권 밖 공유가 모두 같은 링크와 이미지를 쓴다.
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://teumteumeat.co.kr/league/result",
    // 리그 결과 공유 썸네일. 이미지를 바꿀 때는 카카오 캐시 때문에 새 파일명으로 올린다.
    images: [{ url: "https://teumteumeat.co.kr/og/league-result.png" }],
  },
};

// 결과 공유 링크를 PC에서 연 경우 메인 랜딩을 그대로 보여준다.
// 모바일 기기는 proxy.ts에서 스토어로 리다이렉트된다.
export default function LeagueResult() {
  return <Home />;
}
