export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 overflow-hidden">
      {/* 지하철 애니메이션 */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="animate-vehicle-rush">
          <svg
            width="560"
            height="214"
            viewBox="0 0 220 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 차체 */}
            <rect x="2" y="4" width="216" height="56" rx="11" fill="#2563eb" />
            {/* 루프 하이라이트 */}
            <rect x="2" y="4" width="216" height="14" rx="11" fill="#3b82f6" />
            <rect x="2" y="12" width="216" height="6" fill="#3b82f6" />
            {/* 창문 */}
            <rect x="14" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
            <rect x="54" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
            <rect x="94" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
            <rect x="134" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
            <rect x="174" y="14" width="28" height="24" rx="5" fill="white" opacity="0.92" />
            {/* 문 경계선 */}
            <rect x="48" y="8" width="2" height="48" fill="white" opacity="0.25" />
            <rect x="88" y="8" width="2" height="48" fill="white" opacity="0.25" />
            <rect x="128" y="8" width="2" height="48" fill="white" opacity="0.25" />
            <rect x="168" y="8" width="2" height="48" fill="white" opacity="0.25" />
            {/* 하단 스트라이프 */}
            <rect x="2" y="50" width="216" height="10" fill="#1d4ed8" />
            {/* 하부 프레임 */}
            <rect x="8" y="60" width="204" height="10" rx="3" fill="#1e293b" />
            {/* 바퀴 */}
            <circle cx="38" cy="75" r="9" fill="#1e293b" />
            <circle cx="38" cy="75" r="5" fill="#475569" />
            <circle cx="38" cy="75" r="2" fill="#94a3b8" />
            <circle cx="110" cy="75" r="9" fill="#1e293b" />
            <circle cx="110" cy="75" r="5" fill="#475569" />
            <circle cx="110" cy="75" r="2" fill="#94a3b8" />
            <circle cx="182" cy="75" r="9" fill="#1e293b" />
            <circle cx="182" cy="75" r="5" fill="#475569" />
            <circle cx="182" cy="75" r="2" fill="#94a3b8" />
            {/* 레일 */}
            <rect x="0" y="83" width="220" height="1" fill="#94a3b8" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* 텍스트 콘텐츠 */}
      <div className="text-center">
        <p className="animate-fly-in text-sm font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4 sm:text-base">
          아직도 숏폼으로 틈새 시간을 떼우나요?
        </p>
        <h1 className="animate-fly-in-delay text-5xl font-bold tracking-tight text-black dark:text-white sm:text-7xl lg:text-8xl">
          TeumTeumEat
        </h1>
        <p className="animate-fly-in-delay-2 mt-6 text-base text-zinc-500 dark:text-zinc-400 sm:text-lg lg:text-xl">
          틈틈잇으로 지식을 틈틈히 채워보세요!
        </p>
      </div>
    </main>
  );
}
