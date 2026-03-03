import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "수아트 콰이어 in 하남 (20~30세) | Soo Art & Company",
  description:
    "하남 지역 20~30세를 위한 프리미엄 합창단. 무대 위의 주인공이 되는 경험, 수아트 콰이어와 함께하세요.",
};

/* ── 수치 카드 데이터 ── */
const stats = [
  { value: "20~30세", label: "타겟 연령대" },
  { value: "하남", label: "활동 지역" },
  { value: "주 1회", label: "정기 연습" },
  { value: "연 2회", label: "정기 연주회" },
];

/* ── 커리큘럼 ── */
const curriculum = [
  {
    step: "01",
    title: "기초 발성 & 호흡",
    desc: "복식호흡부터 올바른 발성법까지, 음악의 기초 체력을 쌓습니다. 초보자도 안심하고 시작할 수 있습니다.",
  },
  {
    step: "02",
    title: "합창 하모니 트레이닝",
    desc: "파트별 연습과 전체 합창을 병행하며, 여러 성부가 어우러지는 아름다운 화음을 완성합니다.",
  },
  {
    step: "03",
    title: "안무 & 무대 퍼포먼스",
    desc: "이현정 대표의 독보적인 합창 안무 노하우로 노래에 움직임을 더해 입체적인 무대를 만듭니다.",
  },
  {
    step: "04",
    title: "실전 무대 경험",
    desc: "정기 연주회, 외부 초청 행사, 지역 축제 등 진짜 관객 앞에 서는 무대 경험을 제공합니다.",
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "음악을 전혀 모르는 초보자도 참여할 수 있나요?",
    a: "네, 물론입니다! 수아트 콰이어는 음악을 사랑하는 마음만 있으면 누구나 환영합니다. 기초 발성부터 차근차근 지도합니다.",
  },
  {
    q: "연습 일정과 장소는 어떻게 되나요?",
    a: "하남 지역 연습실에서 주 1회 정기 연습이 진행됩니다. 자세한 일정과 위치는 입단 시 안내드립니다.",
  },
  {
    q: "20~30세만 참여할 수 있나요?",
    a: "수아트 콰이어 in 하남은 20~30세를 주 타겟으로 하지만, 음악에 대한 열정이 있으시다면 문의해주세요. 다른 연령대를 위한 프로그램도 준비 중입니다.",
  },
  {
    q: "단원비는 얼마인가요?",
    a: "월 단원비와 연주회 참가비가 별도로 있습니다. 상담을 통해 자세한 안내를 받으실 수 있습니다.",
  },
];

export default function ChoirPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full-width 비주얼 + 카피
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20 sm:min-h-[80vh] sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/image/choire.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-8 text-center sm:px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary sm:mb-5 sm:text-sm">
            수아트 콰이어 in 하남 · 2030 Youth 세대 모집 중
          </p>
          <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            수아트 콰이어
            <br />
            <span className="text-primary">프리미엄 합창단</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-white/80 sm:mt-8 sm:text-base">
            하남 지역 20~30세를 위한 전문 합창단
            <br className="hidden sm:block" />
            체계적인 교육과 정기 연주회로 성장하는 무대
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="w-full rounded-xl border-2 border-transparent bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
            >
              단원 신청하기
            </Link>
            <a
              href="#curriculum"
              className="w-full rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.1)" }}
            >
              커리큘럼 보기
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS — 핵심 수치
      ═══════════════════════════════════════ */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-8 sm:gap-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-secondary/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT — 콰이어 소개
      ═══════════════════════════════════════ */}
      <section className="bg-background-subtle py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/image/choire.png"
                alt="합창단 연습"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                About
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
                전문 지도와 체계적인 교육
              </h2>
              <p className="mt-6 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
                이현정 대표의 전문 지도 아래, 발성부터 무대 퍼포먼스까지 체계적으로 학습합니다.
                뮤지컬 넘버와 현대적 레퍼토리로 구성된 프로그램으로 즐겁게 성장할 수 있습니다.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "전문 지도", value: "이현정 대표" },
                  { label: "정기 연습", value: "주 1회" },
                  { label: "연주회", value: "연 2회" },
                  { label: "타겟", value: "20~30세" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-medium text-secondary/50">{item.label}</p>
                    <p className="mt-1 text-lg font-bold text-secondary">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CURRICULUM — 교육 과정
      ═══════════════════════════════════════ */}
      <section id="curriculum" className="bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Curriculum
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              체계적인 교육 과정
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {curriculum.map((item) => (
              <div
                key={item.step}
                className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <span className="text-xs font-bold text-primary/60">{item.step}</span>
                <h3 className="mt-3 mb-2 text-base font-bold tracking-tight text-secondary">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-secondary/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="bg-background-subtle py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">FAQ</p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              자주 묻는 질문
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-sm font-bold text-secondary sm:text-base">{faq.q}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-secondary/60">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — 단원 신청
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            단원 모집 중
          </h2>
          <p className="mt-6 text-sm font-medium text-white/90 sm:text-base">
            상시 단원을 모집합니다. 문의를 통해 자세한 안내를 받으실 수 있습니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-500 hover:bg-white/90 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.45)]"
            style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.25)" }}
          >
            단원 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
