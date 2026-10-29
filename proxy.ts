import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { APP_STORE_URL, PLAY_STORE_URL } from "./app/lib/storeLinks";

// 앱 공유 링크(/league)를 모바일 브라우저로 연 경우 스토어로 보낸다.
// PC 등 그 외 기기는 리그 소개 페이지를 그대로 렌더링한다.
export function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";

  let response = NextResponse.next();
  if (/iPhone|iPad|iPod/i.test(ua)) {
    response = NextResponse.redirect(APP_STORE_URL);
  } else if (/Android/i.test(ua)) {
    response = NextResponse.redirect(PLAY_STORE_URL);
  }

  // Googlebot(스마트폰 UA는 Android)도 리다이렉트되어 메타 태그를 못 보므로 헤더로 검색 노출을 막는다.
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: "/league",
};
