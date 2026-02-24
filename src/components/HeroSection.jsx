import Link from "next/link";

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

      {/* ── Placeholder 그라데이션 ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />

      {/* ── Poster 이미지 ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=1080&fit=crop&q=80')",
        }}
      />

      {/* ── 오버레이 ── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── 콘텐츠 ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/80 md:text-base">
          Soo Art &amp; Company
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>Music</span>{" "}
          <span className="text-primary italic" style={{ fontFamily: "'Playfair Display', serif" }}>Makes</span>{" "}
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>Us</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/90 md:text-xl">
          클래식·뮤지컬 전문 공연, 프리미엄 1:1 Voice 레슨까지 
          <br /> 수아트앤컴퍼니의 무대를 경험하세요.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            상담 신청
          </Link>
          <a
            href="#problem"
            className="rounded-xl border-2 border-white/30 px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
          >
            서비스 알아보기
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
