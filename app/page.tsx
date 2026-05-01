import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="틈틈잇" className="nav-logo" />
        <a href="#download" className="nav-cta">앱 다운로드</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        {/* 버스 애니메이션 */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", pointerEvents: "none", overflow: "hidden" }}>
          <div className="animate-vehicle-rush">
            <svg width="560" height="214" viewBox="0 0 220 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="216" height="56" rx="11" fill="#2B8FFF" />
              <rect x="2" y="4" width="216" height="14" rx="11" fill="#5AABFF" />
              <rect x="2" y="12" width="216" height="6" fill="#5AABFF" />
              <rect x="14" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
              <rect x="54" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
              <rect x="94" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
              <rect x="134" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
              <rect x="174" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
              <rect x="48" y="8" width="2" height="48" fill="white" opacity="0.25" />
              <rect x="88" y="8" width="2" height="48" fill="white" opacity="0.25" />
              <rect x="128" y="8" width="2" height="48" fill="white" opacity="0.25" />
              <rect x="168" y="8" width="2" height="48" fill="white" opacity="0.25" />
              <rect x="2" y="50" width="216" height="10" fill="#1672D8" />
              <rect x="8" y="60" width="204" height="10" rx="3" fill="#0A1628" />
              <circle cx="38" cy="75" r="9" fill="#0A1628" /><circle cx="38" cy="75" r="5" fill="#2B4A7A" /><circle cx="38" cy="75" r="2" fill="#6B8AAD" />
              <circle cx="110" cy="75" r="9" fill="#0A1628" /><circle cx="110" cy="75" r="5" fill="#2B4A7A" /><circle cx="110" cy="75" r="2" fill="#6B8AAD" />
              <circle cx="182" cy="75" r="9" fill="#0A1628" /><circle cx="182" cy="75" r="5" fill="#2B4A7A" /><circle cx="182" cy="75" r="2" fill="#6B8AAD" />
              <rect x="0" y="83" width="220" height="1" fill="#6B8AAD" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* 배경 blob */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        {/* 도트 장식 */}
        <div className="dots-grid">
          {Array.from({ length: 15 }).map((_, i) => <div key={i} className="dot" />)}
        </div>

        {/* 뱃지 */}
        <div className="hero-eyebrow">
          어떤 앱인가요?
        </div>

        {/* 헤드라인 */}
        <h1 className="hero-headline">
          아직도 숏폼으로<br />
          <span className="highlight">틈새 시간</span>을 떼우시나요?
        </h1>

        {/* 서브 */}
        <p className="hero-sub">
          <span className="hero-sub-first">지루한 출퇴근길을 성장 시간으로 바꾸고 싶지 않으신가요?</span>
          AI가 만들어주는 맞춤형 퀴즈로 매일 5분,<br />
          당신의 지식을 <strong>틈틈이</strong> 채워보세요.
        </p>

        {/* 키 스탯 */}
        <div className="hero-keystats">
          <div className="keystat-item">
            <span className="keystat-num">5분</span>
            <span className="keystat-label">학습 소요시간</span>
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
          <a href="#download" className="btn-primary">🍎 App Store에서 받기</a>
          <a href="#features" className="btn-secondary">✨ 어떤 앱인가요?</a>
        </div>

        {/* 폰 목업 */}
        <div className="hero-phone">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-notch" />
              <div className="phone-content">
                <div className="phone-greeting">☀️ 좋은 아침이에요, JaeHyeon님!</div>
                <div className="phone-title">오늘의 지식 간식이<br />도착했어요 🎁</div>
                <div className="snack-card">
                  <div className="snack-tag">💻 iOS 개발</div>
                  <div className="snack-q">Swift에서 @MainActor 어노테이션의 주요 역할은?</div>
                  <div className="snack-options">
                    <div className="snack-option">① 백그라운드 처리를 보장</div>
                    <div className="snack-option correct">② 메인 스레드 실행을 보장 ✓</div>
                    <div className="snack-option">③ 비동기 함수 생성</div>
                  </div>
                </div>
                <div className="streak-bar">
                  <div>
                    <div className="streak-label">연속 학습</div>
                    <div className="streak-count">🔥 12일</div>
                  </div>
                  <div style={{ fontSize: "9px", color: "var(--text-muted)", textAlign: "right" }}>
                    오늘 퀴즈<br />
                    <strong style={{ color: "var(--green)", fontSize: "11px" }}>완료!</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mascot.png" alt="틈틈잇 마스코트" className="char-float" style={{ width: "72px", height: "72px", objectFit: "contain" }} />
        </div>

        {/* 스탯 */}
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-num">5분</span>
            <span className="stat-label">하루 평균 학습 시간</span>
          </div>
          <div className="stat-div" />
          <div className="stat-item">
            <span className="stat-num">AI</span>
            <span className="stat-label">완전 맞춤 퀴즈</span>
          </div>
          <div className="stat-div" />
          <div className="stat-item">
            <span className="stat-num">무료</span>
            <span className="stat-label">기본 이용 무료</span>
          </div>
        </div>
      </section>

      {/* 웨이브 구분선 */}
      <svg style={{ display: "block", width: "100%", marginBottom: "-2px" }} viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="white" />
      </svg>

      {/* ── FEATURES ── */}
      <section className="features" id="features">
        <div className="section-label">핵심 기능</div>
        <h2 className="section-title">이런 게 다 있어요 🎉</h2>
        <div className="features-grid">
          <ScrollReveal>
            <div className="feature-card blue">
              <div className="feature-num">01</div>
              <span className="feature-icon">🎁</span>
              <div className="feature-title">매일 아침 배달되는<br />&apos;지식 간식&apos;</div>
              <div className="feature-desc">자고 일어나면 홈 화면에 오늘의 지식 간식이 도착해 있어요. 내가 고른 카테고리나 직접 업로드한 파일을 바탕으로 AI가 엄선한 따끈따끈한 퀴즈를 풀어봐요.</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="feature-card green">
              <div className="feature-num">02</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mascot.png" alt="틈틈잇 마스코트" className="feature-icon" style={{ width: "40px", height: "40px", objectFit: "contain" }} />
              <div className="feature-title">&apos;틈틈잇&apos; 캐릭터에게<br />지식을 먹여주세요!</div>
              <div className="feature-desc">하루 5분, AI가 정리해주는 요약본을 읽고 퀴즈를 풀어 &apos;틈틈잇&apos;에게 지식 간식을 먹이고 한 발자국 성장해요.</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="feature-card purple">
              <div className="feature-num">03</div>
              <span className="feature-icon">🔔</span>
              <div className="feature-title">나를 깨우는 기분 좋은<br />&apos;성장 트리거&apos;</div>
              <div className="feature-desc">설정한 출퇴근 시간에 맞춰 도착하는 알림과 연속 학습 시스템으로 학습 동기를 불태워요. AI가 루틴을 똑똑하게 챙겨드려요.</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="feature-card yellow">
              <div className="feature-num">04</div>
              <span className="feature-icon">🏆</span>
              <div className="feature-title">한눈에 확인하는<br />&apos;성취 리워드&apos;</div>
              <div className="feature-desc">퀴즈를 풀 때마다 찍히는 스탬프와 &apos;연속 학습&apos; 수치로 성장을 실감해 보세요. 내가 푼 퀴즈는 언제든 다시 꺼내 볼 수 있어요.</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <svg style={{ display: "block", marginBottom: "-2px" }} viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,45 1440,30 L1440,60 L0,60 Z" fill="var(--cream)" />
      </svg>

      {/* ── HOW ── */}
      <section className="how">
        <div className="section-label">이용 방법</div>
        <h2 className="section-title">딱 3단계면 끝이에요 ✅</h2>
        <div className="how-steps">
          <ScrollReveal>
            <div className="how-step">
              <div className="step-circle">📲</div>
              <div className="step-body">
                <div className="step-title">앱 설치 &amp; 관심 주제 선택</div>
                <div className="step-desc">앱을 설치하고 나에게 맞는 카테고리를 선택하거나, 공부하고 싶은 파일을 직접 업로드해요.</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="how-step">
              <div className="step-circle">⏰</div>
              <div className="step-body">
                <div className="step-title">출퇴근 시간 알림 설정</div>
                <div className="step-desc">내 출퇴근 루틴에 맞춰 알림 시간을 설정하면, AI가 딱 그 시간에 오늘의 퀴즈를 배달해 드려요.</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="how-step">
              <div className="step-circle">🧠</div>
              <div className="step-body">
                <div className="step-title">매일 5분, 퀴즈 풀고 성장</div>
                <div className="step-desc">요약 읽고 퀴즈 풀고, 틈틈잇 캐릭터 성장시키면서 나도 함께 성장해요. 연속 학습 기록도 쌓여가요!</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <svg style={{ display: "block", marginBottom: "-2px" }} viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,15 C480,60 960,0 1440,45 L1440,60 L0,60 Z" fill="white" />
      </svg>

      {/* ── FOR WHOM ── */}
      <section className="forwhom">
        <div className="section-label">이런 분께 추천</div>
        <h2 className="section-title">혹시 이런 분이신가요? 🙋</h2>
        <div className="personas">
          {[
            { emoji: "💼", label: "이직을 위해 꾸준한 학습 동기가 필요한 직장인" },
            { emoji: "📚", label: "전공 서적·논문을 자투리 시간에 학습하고 싶은 학생" },
            { emoji: "🌱", label: "숏폼 대신 생산적인 갓생을 원하는 분" },
            { emoji: "🚌", label: "대중교통에서 멀미 때문에 긴 글을 못 읽는 분" },
            { emoji: "🎯", label: "매일 퀴즈로 쉽고 재밌게 지식을 쌓고 싶은 분" },
          ].map((p, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="persona-card">
                <span className="persona-emoji">{p.emoji}</span>
                <div className="persona-label">{p.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="download">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mascot.png" alt="틈틈잇 마스코트" className="cta-char" style={{ width: "100px", height: "100px", objectFit: "contain", display: "inline-block" }} />
        <h2 className="cta-title">
          지금 &apos;틈틈잇&apos;을 다운로드하고<br />
          일상의 틈을 가치있게 바꿔봐요!
        </h2>
        <p className="cta-sub">출퇴근 5분이 쌓이면 삶이 달라집니다.</p>
        <a href="https://apps.apple.com" className="cta-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store에서 무료로 받기
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-logo">틈틈잇</div>
        <div className="footer-copy">© 2026 틈틈잇 팀. All rights reserved.</div>
      </footer>

      {/* 마스코트 (고정 장식) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/mascot.png" alt="틈틈잇 마스코트" className="animate-peek-in" style={{ position: "fixed", bottom: "24px", right: 0, zIndex: 10, pointerEvents: "none", width: "100px", height: "100px", objectFit: "contain" }} />
    </>
  );
}
