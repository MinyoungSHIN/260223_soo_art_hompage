"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* ── 배경 패턴 ── */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          다음 무대의 주인공은
          <br />
          <span className="text-white/90">바로 당신입니다</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/80 sm:mt-6 sm:text-base md:text-lg">
          합창단 참여, 입시 레슨, 공연 초청 등 어떤 문의든 환영합니다.
          <br className="hidden md:block" />
          지금 무료 상담을 신청하시고 시작해보세요.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="w-full rounded-xl border-2 border-transparent bg-white px-6 py-3 text-base font-bold text-primary transition-all duration-500 hover:bg-white/90 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.45)] sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.25)" }}
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/portfolio"
            className="w-full rounded-xl border-2 border-white/40 px-6 py-3 text-base font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)] sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.1)" }}
          >
            포트폴리오 보기
          </Link>
        </div>

        <p className="mt-6 text-sm font-medium text-white/50">
          * 상담은 무료이며, 24시간 내에 연락드립니다.
        </p>
      </div>
    </section>
  );
}
