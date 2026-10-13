import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { APP_STORE_URL, PLAY_STORE_URL } from "./app/lib/storeLinks";

// 앱 공유 링크(/league)를 모바일 브라우저로 연 경우 스토어로 보낸다.
// PC 등 그 외 기기는 리그 소개 페이지를 그대로 렌더링한다.
export function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return NextResponse.redirect(APP_STORE_URL);
  }

  if (/Android/i.test(ua)) {
    return NextResponse.redirect(PLAY_STORE_URL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/league",
};
