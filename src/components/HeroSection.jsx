"use client";

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
        <span className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm md:text-base">
          Soo Art &amp; Company
        </span>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>Music</span>{" "}
          <span className="text-primary italic" style={{ fontFamily: "'Playfair Display', serif" }}>Makes</span>{" "}
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>Us</span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed tracking-wide text-white/90 md:text-xl">
          클래식·뮤지컬 전문 공연, 프리미엄 1:1 Voice 레슨까지
          <br /> 수아트앤컴퍼니와 함께 하세요.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="min-w-[150px] text-center rounded-xl border-2 border-transparent bg-primary px-10 py-3 text-lg font-bold text-white transition-all duration-500 hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 14px rgba(255,107,53,0.3)",
              transition: "all 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,107,53,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,107,53,0.3)";
            }}
          >
            상담 신청
          </Link>
          <a
            href="#problem"
            className="min-w-[150px] text-center rounded-xl border-2 border-white/30 px-5 py-3 text-lg font-bold text-white backdrop-blur-sm transition-all duration-500 hover:border-none hover:bg-white hover:text-secondary hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 14px rgba(255,255,255,0.1)",
              transition: "all 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(200,200,200,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,255,255,0.1)";
            }}
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
