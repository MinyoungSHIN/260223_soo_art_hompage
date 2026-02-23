import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* ── 배경 패턴 ── */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          다음 무대의 주인공은
          <br />
          <span className="text-white/90">바로 당신입니다</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/80">
          합창단 참여, 입시 레슨, 공연 초청 등 어떤 문의든 환영합니다.
          <br className="hidden md:block" />
          지금 무료 상담을 신청하시고 시작해보세요.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            무료 상담 신청하기
          </Link>
          <Link
            href="/portfolio"
            className="rounded-xl border-2 border-white/40 px-10 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10"
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
