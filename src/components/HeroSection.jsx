export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* ── 배경 영상 ── */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=1080&fit=crop&q=80"
      >
        {/*
          hero-video.mp4 파일을 public/ 폴더에 추가한 뒤 아래 주석을 해제하세요.
          <source src="/hero-video.mp4" type="video/mp4" />
        */}
      </video>

      {/* ── 영상 로드 전 Placeholder 그라데이션 ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />

      {/* ── Poster 이미지 (영상 대체) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=1080&fit=crop&q=80')",
        }}
      />

      {/* ── 오버레이 ── */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ── 콘텐츠 ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/80 md:text-base">
          Soo Art &amp; Company
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          예술로 세상을
          <br />
          <span className="text-primary">감동</span>시키다
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
          성악, 합창, 공연 기획까지 — 수아트앤컴퍼니가 만드는 압도적인 무대를
          경험하세요.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#services"
            className="rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            서비스 알아보기
          </a>
          <a
            href="#contact"
            className="rounded-xl border-2 border-white/30 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
          >
            문의하기
          </a>
        </div>
      </div>

      {/* ── 스크롤 인디케이터 ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
