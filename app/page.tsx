import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="틈틈잇" className="nav-logo" />
        <a href="#download" className="nav-cta">
          앱 다운로드
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        {/* 파란 언덕 */}
        <div className="hero-hill" />

        {/* 버스 애니메이션 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div className="animate-vehicle-rush">
            <svg
              width="560"
              height="214"
              viewBox="0 0 220 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="4"
                width="216"
                height="56"
                rx="11"
                fill="#2B8FFF"
              />
              <rect
                x="2"
                y="4"
                width="216"
                height="14"
                rx="11"
                fill="#5AABFF"
              />
              <rect x="2" y="12" width="216" height="6" fill="#5AABFF" />
              <rect
                x="14"
                y="14"
                width="28"
                height="24"
                rx="5"
                fill="white"
                opacity="0.92"
              />
              <rect
                x="54"
                y="14"
                width="28"
                height="24"
                rx="5"
                fill="white"
                opacity="0.92"
              />
              <rect
                x="94"
                y="14"
                width="28"
                height="24"
                rx="5"
                fill="white"
                opacity="0.92"
              />
              <rect
                x="134"
                y="14"
                width="28"
                height="24"
                rx="5"
                fill="white"
                opacity="0.92"
              />
              <rect
                x="174"
                y="14"
                width="28"
                height="24"
                rx="5"
                fill="white"
                opacity="0.92"
              />
              <rect
                x="48"
                y="8"
                width="2"
                height="48"
                fill="white"
                opacity="0.25"
              />
              <rect
                x="88"
                y="8"
                width="2"
                height="48"
                fill="white"
                opacity="0.25"
              />
              <rect
                x="128"
                y="8"
                width="2"
                height="48"
                fill="white"
                opacity="0.25"
              />
              <rect
                x="168"
                y="8"
                width="2"
                height="48"
                fill="white"
                opacity="0.25"
              />
              <rect x="2" y="50" width="216" height="10" fill="#1672D8" />
              <rect
                x="8"
                y="60"
                width="204"
                height="10"
                rx="3"
                fill="#0A1628"
              />
              <circle cx="38" cy="75" r="9" fill="#0A1628" />
              <circle cx="38" cy="75" r="5" fill="#2B4A7A" />
              <circle cx="38" cy="75" r="2" fill="#6B8AAD" />
              <circle cx="110" cy="75" r="9" fill="#0A1628" />
              <circle cx="110" cy="75" r="5" fill="#2B4A7A" />
              <circle cx="110" cy="75" r="2" fill="#6B8AAD" />
              <circle cx="182" cy="75" r="9" fill="#0A1628" />
              <circle cx="182" cy="75" r="5" fill="#2B4A7A" />
              <circle cx="182" cy="75" r="2" fill="#6B8AAD" />
              <rect
                x="0"
                y="83"
                width="220"
                height="1"
                fill="#6B8AAD"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>

        {/* 배경 blob */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        {/* 도트 장식 */}
        <div className="dots-grid">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="dot" />
          ))}
        </div>

        {/* 뱃지 */}
        <div className="hero-eyebrow">어떤 앱인가요?</div>

        {/* 헤드라인 */}
        <h1 className="hero-headline">
          아직도 숏폼으로
          <br />
          <span className="highlight">틈새 시간</span>을 떼우시나요?
        </h1>

        {/* 서브 */}
        <p className="hero-sub">
          <span className="hero-sub-first">
            지루한 출퇴근길을 성장 시간으로 바꾸고 싶지 않으신가요?
          </span>
          AI가 만들어주는 맞춤형 퀴즈로 매일 5분,
          <br />
          당신의 지식을 <strong>틈틈이</strong> 채워보세요.
        </p>

        {/* 키 스탯 */}
        <div className="hero-keystats">
          <div className="keystat-item">
            <span className="keystat-num">5분</span>
            <span className="keystat-label">하루 평균 학습 소요시간</span>
          </div>
          <div className="keystat-div" />
          <div className="keystat-item">
            <span className="keystat-num">100%</span>
            <span className="keystat-label">AI 기반 맞춤 퀴즈 생성</span>
          </div>
          <div className="keystat-div" />
          <div className="keystat-item">
            <span className="keystat-num">0원</span>
            <span className="keystat-label">모든 퀴즈 무료 이용가능</span>
          </div>
        </div>

        {/* 버튼 */}
        <div className="hero-btns">
          <a href="#download" className="btn-primary">
            🍎 App Store 다운받기
          </a>
          <a href="#download" className="btn-secondary">
            ▶ Play Store 다운받기
          </a>
        </div>

        {/* 폰 목업 */}
        <div className="hero-phone">
          <div className="phone-frame">
            <video
              src="/quiz-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="phone-video"
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mascot.png"
            alt="틈틈잇 마스코트"
            className="char-float"
            style={{ width: "300px", height: "300px", objectFit: "contain" }}
          />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features" id="features">
        <div className="section-label pill">핵심 기능</div>
        <h2 className="section-title">이런 기능이 있어요!</h2>
        <div className="features-grid">
          <ScrollReveal>
            <div className="feature-card">
              <div className="feature-title">
                매일 아침 배달되는 &apos;지식 간식&apos;
              </div>
              <div className="feature-desc">
                자고 일어나면 홈 화면에 오늘의 지식 간식이 도착해 있어요.
                <br />
                내가 고른 카테고리나 직접 업로드한 파일을 바탕으로 한<br />
                AI가 엄선해준 따끈따끈한 퀴즈를 풀어봐요.
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/theme1.png"
                alt="지식 간식 화면"
                className="feature-img"
                style={{
                  width: "40%",
                  marginTop: "auto",
                  marginBottom: "-36px",
                }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="feature-card">
              <div className="feature-title">
                &apos;틈틈잇&apos; 캐릭터에게 지식을 먹여주세요!
              </div>
              <div className="feature-desc">
                하루 5분, AI가 정리해주는 요약본을 읽고,
                <br />
                퀴즈를 풀어 지식 간식을 먹이고 한 발자국 성장해요.
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/theme2.png"
                alt="요약 화면"
                className="feature-img"
                style={{
                  width: "40%",
                  marginTop: "auto",
                  marginBottom: "-36px",
                }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="feature-card">
              <div className="feature-title">
                한눈에 확인하는 &apos;성취 리워드&apos;
              </div>
              <div className="feature-desc">
                퀴즈를 풀 때마다 찍히는 스탬프와 &apos;연속 학습&apos; 수치로
                <br />
                성장을 실감해 보세요.
                <br />
                내가 푼 퀴즈는 언제든 다시 꺼내 볼 수 있어요.
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/theme3.png"
                alt="성취 리워드 화면"
                className="feature-img"
                style={{
                  width: "45%",
                  marginTop: "auto",
                  marginBottom: "-36px",
                }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="feature-card">
              <div className="feature-title">
                나를 깨우는 &apos;성장 트리거&apos;
              </div>
              <div className="feature-desc">
                설정한 출퇴근 시간에 맞춰 도착하는 알림과
                <br />
                연속 학습 시스템으로 학습 동기를 불태워요.
                <br />
                AI가 루틴을 똑똑하게 챙겨드려요.
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/theme4.png"
                alt="성장 트리거 화면"
                className="feature-img"
                style={{
                  width: "55%",
                  marginTop: "auto",
                  marginBottom: "-36px",
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <svg
        style={{ display: "block", marginBottom: "-2px" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,45 1440,30 L1440,60 L0,60 Z"
          fill="var(--cream)"
        />
      </svg>

      {/* ── HOW ── */}
      <section className="how">
        <div className="section-label-wrapper">
          <div className="section-label">이용 방법</div>
        </div>
        <h2 className="section-title">딱 3단계면 끝!</h2>
        <div className="how-steps">
          <ScrollReveal>
            <div className="how-step">
              <div className="step-circle">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="50.0612"
                    cy="34.5506"
                    rx="28.7779"
                    ry="28.8691"
                    transform="rotate(-2.40412 50.0612 34.5506)"
                    fill="#2B8FFF"
                  />
                  <ellipse
                    cx="38.724"
                    cy="21.1804"
                    rx="2.61618"
                    ry="2.62447"
                    transform="rotate(-2.40412 38.724 21.1804)"
                    fill="black"
                  />
                  <ellipse
                    cx="61.724"
                    cy="20.2312"
                    rx="2.61618"
                    ry="2.62447"
                    transform="rotate(-2.40412 61.724 20.2312)"
                    fill="black"
                  />
                  <ellipse
                    cx="51.3194"
                    cy="27.3362"
                    rx="5.5891"
                    ry="5.60682"
                    transform="rotate(-2.40412 51.3194 27.3362)"
                    fill="#FF5D5D"
                  />
                  <path
                    d="M10 31.412C10 30.159 11.139 29.2146 12.3703 29.4466L46 35.7826V81L11.6297 74.5244C10.6846 74.3464 10 73.5208 10 72.559V31.412Z"
                    fill="#96C8FF"
                  />
                  <path
                    d="M89 31.412C89 30.159 87.861 29.2146 86.6297 29.4466L53 35.7826V81L87.3703 74.5244C88.3154 74.3464 89 73.5208 89 72.559V31.412Z"
                    fill="#96C8FF"
                  />
                  <path
                    d="M46 36C46 35.4477 46.4477 35 47 35H52C52.5523 35 53 35.4477 53 36V82C53 82.5523 52.5523 83 52 83H47C46.4477 83 46 82.5523 46 82V36Z"
                    fill="#70B4FF"
                  />
                  <path
                    d="M5 55.7086C5 49.4152 7.42308 47.2545 9.08333 46.718C12.4038 45.645 19 48.5161 19 55.7086C19 62.9011 13.6154 64.9584 9.08333 64.4183C7.96903 64.2855 5 62.0021 5 55.7086Z"
                    fill="#2D88FA"
                  />
                  <path
                    d="M94 55.7086C94 49.4152 91.5769 47.2545 89.9167 46.718C86.5962 45.645 80 48.5161 80 55.7086C80 62.9011 85.3846 64.9584 89.9167 64.4183C91.031 64.2855 94 62.0021 94 55.7086Z"
                    fill="#2D88FA"
                  />
                  <ellipse
                    cx="30.0345"
                    cy="77.6695"
                    rx="10.2342"
                    ry="12.5441"
                    transform="rotate(-24.6583 30.0345 77.6695)"
                    fill="black"
                  />
                  <ellipse
                    cx="10.2342"
                    cy="12.5441"
                    rx="10.2342"
                    ry="12.5441"
                    transform="matrix(-0.975138 -0.221597 -0.221597 0.975138 83.5195 66.5352)"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="step-body">
                <div className="step-title">관심 주제 선택</div>
                <div className="step-desc">
                  나에게 맞는 카테고리를 선택하거나, 공부하고 싶은 파일을 직접
                  업로드해요.
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="how-step">
              <div className="step-circle">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3558_18652)">
                    <rect
                      x="20.1562"
                      y="0.5"
                      width="3.76189"
                      height="11.6619"
                      rx="1.50476"
                      fill="#50A3FF"
                    />
                    <rect
                      x="74.7031"
                      y="0.5"
                      width="3.76189"
                      height="11.6619"
                      rx="1.50476"
                      fill="#50A3FF"
                    />
                    <ellipse
                      cx="50.018"
                      cy="51.9682"
                      rx="24.0693"
                      ry="24.1456"
                      transform="rotate(-2.40412 50.018 51.9682)"
                      fill="#2B8FFF"
                    />
                    <ellipse
                      cx="40.5205"
                      cy="42.3787"
                      rx="2.18812"
                      ry="2.19506"
                      transform="rotate(-2.40412 40.5205 42.3787)"
                      fill="black"
                    />
                    <ellipse
                      cx="59.3994"
                      cy="41.5877"
                      rx="2.18812"
                      ry="2.19506"
                      transform="rotate(-2.40412 59.3994 41.5877)"
                      fill="black"
                    />
                    <ellipse
                      cx="49.8516"
                      cy="48.8798"
                      rx="4.67462"
                      ry="4.68944"
                      transform="rotate(-2.40412 49.8516 48.8798)"
                      fill="#FF5D5D"
                    />
                    <path
                      d="M46.6211 57.4805L50.1517 60.18L53.4437 57.194"
                      stroke="#002A58"
                      strokeWidth="1.90114"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.4307 12.2549C21.227 10.8757 23.2172 10.8757 24.0137 12.2549L28.0869 19.3086C28.8829 20.6878 27.8874 22.4119 26.2949 22.4121H18.1494C16.5569 22.4118 15.5621 20.6878 16.3584 19.3086L20.4307 12.2549Z"
                      stroke="#70B4FF"
                      strokeWidth="3.3857"
                    />
                    <path
                      d="M74.9775 12.2549C75.7739 10.8757 77.7641 10.8757 78.5605 12.2549L82.6338 19.3086C83.4298 20.6878 82.4343 22.4119 80.8418 22.4121H72.6963C71.1038 22.4118 70.109 20.6878 70.9053 19.3086L74.9775 12.2549Z"
                      stroke="#70B4FF"
                      strokeWidth="3.3857"
                    />
                    <path
                      d="M15.4913 28.5183C14.3317 41.2643 25.1037 56.7853 27.1281 57.9068C32.9231 60.7378 33.5156 55.8669 33.0875 53.0776C31.9079 49.2573 29.5186 39.3351 29.3981 30.2088C29.2775 21.0824 26.381 19.087 23.3817 18.9375C21.9423 18.8658 16.419 18.3215 15.4913 28.5183Z"
                      fill="#2B8FFF"
                    />
                    <path
                      d="M84.7431 28.5183C85.9027 41.2643 75.1307 56.7853 73.1063 57.9068C67.3113 60.7378 66.7188 55.8669 67.1469 53.0776C68.3265 49.2573 70.7158 39.3351 70.8363 30.2088C70.9569 21.0824 73.8534 19.087 76.8527 18.9375C78.292 18.8658 83.8154 18.3215 84.7431 28.5183Z"
                      fill="#2B8FFF"
                    />
                    <path
                      d="M55.4381 92.3774C58.0438 96.863 62.5804 99.0911 65.5708 97.354C68.5613 95.6168 70.2109 90.0118 67.6052 85.5261C64.9994 81.0405 59.1251 79.3728 56.1347 81.11C53.1443 82.8471 52.8324 87.8917 55.4381 92.3774Z"
                      fill="black"
                    />
                    <path
                      d="M44.4682 92.3774C41.8624 96.863 37.3258 99.0911 34.3354 97.354C31.345 95.6168 29.6954 90.0118 32.3011 85.5261C34.9068 81.0405 40.7811 79.3728 43.7716 81.11C46.762 82.8471 47.0739 87.8917 44.4682 92.3774Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3558_18652">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="step-body">
                <div className="step-title">출퇴근 시간 알림 설정</div>
                <div className="step-desc">
                  내 출퇴근 루틴에 맞춰 알림 시간을 설정하면, AI가 딱 그 시간에
                  오늘의 퀴즈를 배달해 드려요.
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="how-step">
              <div className="step-circle">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3558_18664)">
                    <path
                      d="M23.1406 97.3401C23.1406 92.5679 27.0093 88.6992 31.7815 88.6992H43.5154C44.0577 88.6992 44.4973 89.1388 44.4973 89.6811V98.5184C44.4973 99.0607 44.0577 99.5003 43.5154 99.5003H25.3008C24.1078 99.5003 23.1406 98.5331 23.1406 97.3401Z"
                      fill="black"
                    />
                    <path
                      d="M77.0352 97.3401C77.0352 92.5679 73.1665 88.6992 68.3943 88.6992H56.6604C56.1181 88.6992 55.6785 89.1388 55.6785 89.6811V98.5184C55.6785 99.0607 56.1181 99.5003 56.6604 99.5003H74.8749C76.068 99.5003 77.0352 98.5331 77.0352 97.3401Z"
                      fill="black"
                    />
                    <circle
                      cx="50.1717"
                      cy="67.9042"
                      r="29.703"
                      fill="#2B8FFF"
                    />
                    <path
                      d="M12 23.5084C12 20.6776 14.2948 18.3828 17.1256 18.3828H81.8131C82.1488 18.3828 82.421 18.655 82.421 18.9907C82.421 19.1032 82.3898 19.2135 82.3394 19.3141C82.1193 19.7539 81.5296 21.152 81.5296 23.5084C81.5296 25.8648 82.1193 27.2629 82.3394 27.7027C82.3898 27.8033 82.421 27.9136 82.421 28.0261C82.421 28.3618 82.1488 28.634 81.8131 28.634H17.1256C14.2948 28.634 12 26.3392 12 23.5084Z"
                      fill="#70B4FF"
                    />
                    <rect
                      x="20.4688"
                      y="16.5996"
                      width="67.7468"
                      height="1.78281"
                      rx="0.445702"
                      fill="#53A4FF"
                    />
                    <rect
                      x="19.5781"
                      y="12.5879"
                      width="65.5183"
                      height="4.01132"
                      rx="0.891405"
                      fill="#3393FF"
                    />
                    <path
                      d="M17.3477 7.23319C17.3477 6.99006 17.5447 6.79297 17.7879 6.79297H67.712C68.6966 6.79297 69.4948 7.59116 69.4948 8.57578V10.8043C69.4948 11.7889 68.6966 12.5871 67.712 12.5871H17.7879C17.5447 12.5871 17.3477 12.39 17.3477 12.1469C17.3477 12.0703 17.3675 11.9953 17.399 11.9254C17.5161 11.6654 17.7934 10.9203 17.7934 9.69003C17.7934 8.45978 17.5161 7.71465 17.399 7.45462C17.3675 7.38478 17.3477 7.3098 17.3477 7.23319Z"
                      fill="#70B4FF"
                    />
                    <rect
                      x="26.707"
                      y="1"
                      width="48.1359"
                      height="5.79413"
                      rx="0.891405"
                      fill="#53A4FF"
                    />
                    <circle cx="38.3214" cy="55.63" r="2.70027" fill="black" />
                    <circle cx="61.6417" cy="55.63" r="2.70027" fill="black" />
                    <circle
                      cx="50.108"
                      cy="81.0025"
                      r="2.89707"
                      fill="#002A58"
                    />
                    <path
                      d="M17.3477 33.9812C17.3477 31.0274 19.7422 28.6328 22.6961 28.6328H33.8386C36.054 28.6328 37.85 30.4287 37.85 32.6441C37.85 36.3365 34.8568 39.3297 31.1644 39.3297H22.6961C19.7422 39.3297 17.3477 36.9351 17.3477 33.9812Z"
                      fill="#2B8FFF"
                    />
                    <path
                      d="M34.3198 29.4809C36.5309 29.8769 38.0217 31.9655 37.6776 34.1852L33.2187 62.9484C32.317 68.7652 26.8946 72.7676 21.0704 71.9154C21.0704 71.9154 15.9507 65.7489 18.3428 50.7205C19.4225 43.9376 21.2144 38.6699 22.8557 34.9315C24.7881 30.5301 29.5882 28.6334 34.3198 29.4809Z"
                      fill="#2B8FFF"
                    />
                    <path
                      d="M83.0781 33.9832C83.0781 31.0293 80.6836 28.6348 77.7297 28.6348H66.5871C64.3717 28.6348 62.5758 30.4307 62.5758 32.6461C62.5758 36.3384 65.569 39.3316 69.2613 39.3316H77.7297C80.6836 39.3316 83.0781 36.9371 83.0781 33.9832Z"
                      fill="#2B8FFF"
                    />
                    <path
                      d="M66.106 29.4828C63.8948 29.8788 62.4041 31.9674 62.7482 34.1872L67.2071 62.9504C68.1088 68.7672 73.5311 72.7695 79.3554 71.9173C79.3554 71.9173 84.4751 65.7509 82.083 50.7225C81.0033 43.9395 79.2114 38.6719 77.5701 34.9335C75.6377 30.5321 70.8376 28.6354 66.106 29.4828Z"
                      fill="#2B8FFF"
                    />
                    <circle
                      cx="50.0031"
                      cy="64.0988"
                      r="5.76876"
                      fill="#FB3B3A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3558_18664">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="step-body">
                <div className="step-title">매일 5분, 퀴즈 풀고 성장</div>
                <div className="step-desc">
                  요약 읽고 퀴즈 풀고, 틈틈잇 캐릭터 성장시키면서 나도 함께
                  성장해요. 연속 학습 기록도 쌓여가요!
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <svg
        style={{ display: "block", marginBottom: "-2px" }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,15 C480,60 960,0 1440,45 L1440,60 L0,60 Z" fill="white" />
      </svg>

      {/* ── FOR WHOM ── */}
      <section className="forwhom">
        <div className="section-label-wrapper">
          <div className="section-label section-label-blue">이런 분께 추천</div>
        </div>
        <h2 className="section-title">혹시 이런 분이신가요?</h2>
        <div className="personas-slider">
          <div className="personas-track">
            {[
              "이직을 위해 꾸준한 학습 동기가 필요한 직장인",
              "전공 서적·논문을 자투리 시간에 학습하고 싶은 학생",
              "숏폼 대신 생산적인 갓생을 원하는 분",
              "대중교통에서 멀미 때문에 긴 글을 못 읽는 분",
              "매일 퀴즈로 쉽고 재밌게 지식을 쌓고 싶은 분",
              "이직을 위해 꾸준한 학습 동기가 필요한 직장인",
              "전공 서적·논문을 자투리 시간에 학습하고 싶은 학생",
              "숏폼 대신 생산적인 갓생을 원하는 분",
              "대중교통에서 멀미 때문에 긴 글을 못 읽는 분",
              "매일 퀴즈로 쉽고 재밌게 지식을 쌓고 싶은 분",
            ].map((label, i) => (
              <div key={i} className="persona-circle">
                <div className="persona-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="download">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mascot.png"
          alt="틈틈잇 마스코트"
          className="cta-char"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            display: "inline-block",
          }}
        />

        <h2 className="cta-title">
          지금 &apos;틈틈잇&apos;을 다운로드하고
          <br />
          일상의 틈을 가치있게 바꿔봐요!
        </h2>
        <div className="cta-btns">
          <a
            href="https://apps.apple.com/kr/app/%ED%8B%88%ED%8B%88%EC%9E%87/id6757255726"
            className="btn-primary"
          >
            🍎 App Store 다운받기
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.teumteumeat.teumteumeat&pcampaignid=web_share"
            className="btn-secondary"
          >
            ▶️ Play Store 다운받기
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-left">
          <div className="footer-contact">
            <div className="footer-contact-item">
              <span className="footer-label">Contact</span>
              <a href="mailto:teumteumeat@gmail.com" className="footer-link">
                teumteumeat@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-label">Instagram</span>
              <a
                href="https://instagram.com/teumteum.eat"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                @teumteum.eat
              </a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <svg
            className="footer-logo-svg"
            width="80"
            height="32"
            viewBox="0 0 212 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M191.931 63.6016L192.746 55.1618C192.772 54.8891 192.965 54.6612 193.229 54.59L197.717 53.3807C198.066 53.2864 198.426 53.4937 198.519 53.8437L200.568 61.512C200.661 61.862 200.453 62.2222 200.104 62.3164L192.753 64.2972C192.311 64.4163 191.887 64.0574 191.931 63.6016Z"
              fill="#2B8FFF"
            />
            <path
              d="M189.895 41.5651L195.049 38.5176C195.285 38.3786 195.581 38.4007 195.793 38.5731L198.289 40.5998C198.57 40.8282 198.614 41.2421 198.387 41.5242L194.865 45.898C194.638 46.1801 194.226 46.2237 193.945 45.9954L189.816 42.6425C189.461 42.3538 189.502 41.7978 189.895 41.5651Z"
              fill="#2B8FFF"
            />
            <path
              d="M205.453 49.4359L210.912 47.6872C211.206 47.5932 211.394 47.3081 211.366 47.0015L211.241 45.6518C211.208 45.2911 210.888 45.026 210.527 45.0596L204.955 45.5797C204.594 45.6134 204.329 45.9331 204.362 46.2938L204.6 48.8722C204.639 49.2896 205.054 49.5638 205.453 49.4359Z"
              fill="#2B8FFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M151.999 0C155.7 3.50119e-06 159.128 0.434622 162.282 1.30078C161.269 4.72307 162.868 7.47533 166.966 7.6748C164.538 8.87168 162.907 11.5814 163.604 14.8154C164.247 17.7931 168.53 18.124 170.384 17.6963C166.738 19.6101 166.223 24.5249 169.876 26.8867C172.341 28.4808 177.203 27.7198 179.471 24.1826C178.244 26.6021 177.778 29.0731 181.646 30.8359C182.453 31.204 183.282 31.1697 184.082 30.8857C184.212 32.2792 184.278 33.6294 184.278 34.9355C184.278 41.5234 182.754 46.9842 179.704 51.3184C176.655 55.6527 172.511 58.8609 167.275 60.9414C162.097 62.9639 156.228 63.9746 149.669 63.9746C146.389 63.9746 143.051 63.7154 139.656 63.1953C134.478 62.444 130.162 60.7384 126.71 58.0801C123.258 55.4217 120.697 52.1852 119.028 48.3711C117.417 44.4992 116.612 40.3093 116.612 35.8018C116.612 30.6006 117.648 25.4858 119.72 20.458C121.849 15.4304 124.812 11.154 128.609 7.62891C132.464 4.04594 136.866 1.82096 141.814 0.954102C145.439 0.318399 148.834 0 151.999 0ZM43.5859 16.5576H16.3984V25.833H41.6875V39.1826H16.3984V46.6377H47.125V63.542H0V1.21387H43.5859V16.5576ZM102.756 16.5576H75.5684V25.833H100.856V39.1826H75.5684V46.6377H106.294V63.542H59.1689V1.21387H102.756V16.5576ZM151.395 17.7715C150.302 17.7715 149.496 17.8288 148.979 17.9443C145.124 18.6378 142.246 20.2562 140.348 22.7988C138.506 25.2837 137.585 28.2311 137.585 31.6406C137.585 34.2989 138.132 36.8996 139.226 39.4424C140.376 41.9852 141.929 44.0664 143.886 45.6846C145.899 47.2448 148.115 48.0243 150.531 48.0244C154.041 48.0244 157.638 46.1752 161.32 42.4766C164.542 39.1826 166.153 35.6576 166.153 31.9014C166.153 29.4164 165.463 27.1041 164.082 24.9658C162.701 22.7699 160.86 21.036 158.559 19.7646C156.315 18.4355 153.926 17.7715 151.395 17.7715Z"
              fill="#2B8FFF"
            />
          </svg>
          <div className="footer-copy">
            © 2025 틈틈잇 팀. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 마스코트 (고정 장식) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mascot.png"
        alt="틈틈잇 마스코트"
        className="animate-peek-in"
        style={{
          position: "fixed",
          bottom: "24px",
          right: 0,
          zIndex: 10,
          pointerEvents: "none",
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
    </>
  );
}
