export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6">
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
