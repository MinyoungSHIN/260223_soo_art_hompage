import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "수아트 콰이어 | Soo Art & Company",
  description:
    "다시 뜨거워질 당신의 무대, 함께하는 화음으로 완성됩니다. 수아트 콰이어 단원 모집.",
};

/* ── 수치 카드 데이터 ── */
const stats = [
  { value: "60+", label: "현재 활동 단원" },
  { value: "주 1회", label: "정기 연습" },
  { value: "연 2회", label: "정기 연주회" },
  { value: "5년+", label: "운영 경력" },
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
    a: "매주 토요일 오전 10시~12시, 서울 강남 연습실에서 진행됩니다. 자세한 위치는 입단 시 안내드립니다.",
  },
  {
    q: "단원비는 얼마인가요?",
    a: "월 단원비와 연주회 참가비가 별도로 있습니다. 상담을 통해 자세한 안내를 받으실 수 있습니다.",
  },
  {
    q: "시니어(60세 이상)도 활동 가능한가요?",
    a: "물론입니다. 현재 단원 중 상당수가 50~70대이며, 무대 위에서 청춘을 되찾는 기쁨을 만끽하고 계십니다.",
  },
];

export default function ChoirPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full-width 비주얼 + 카피
      ═══════════════════════════════════════ */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden sm:h-[60vh] sm:min-h-[480px] md:h-[70vh] md:min-h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1920&h=900&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary sm:mb-4 sm:text-sm">
            Service 01 · Soo Art Choir
          </p>
          <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            다시 뜨거워질 당신의 무대,
            <br />
            <span className="text-primary">함께하는 화음</span>으로 완성됩니다.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg">
            음악을 사랑하는 당신을 위한 프리미엄 합창단.
            발성·합창·안무를 아우르는 체계적인 교육으로 진짜 무대에 서보세요.
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
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-6 md:grid-cols-4 lg:px-8">
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
      <section className="bg-background-subtle py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800&h=600&fit=crop&q=80"
                alt="합창단 연습"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                Who We Are
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                노래로 하나 되는 순간,
                <br />
                인생이 빛나기 시작합니다
              </h2>
              <p className="mt-6 text-base font-medium leading-relaxed text-secondary/70">
                수아트 콰이어는 &ldquo;무대 주인공을 꿈꾸는 일반 성인 및 시니어&rdquo;를
                위한 프리미엄 합창단입니다. 단순히 노래만 부르는 것이 아니라,
                전문 성악가 이현정 대표의 직접 지도 아래 발성·합창·안무를
                체계적으로 배우고, 매 시즌 진짜 관객 앞에서 공연합니다.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-secondary/70">
                음악 경험이 전혀 없어도 괜찮습니다. 함께 호흡하고, 함께
                노래하는 그 순간이 이미 당신을 무대의 주인공으로 만들어줍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CURRICULUM — 4단계 교육 과정
      ═══════════════════════════════════════ */}
      <section id="curriculum" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Curriculum
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              체계적인 4단계 교육 과정
            </h2>
            <p className="mt-4 text-base font-medium text-secondary/60">
              초보자부터 경험자까지, 단계별 맞춤 커리큘럼으로 성장합니다.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {curriculum.map((item) => (
              <div
                key={item.step}
                className="rounded-xl bg-background-subtle p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                <h3 className="mt-4 mb-3 text-lg font-bold tracking-tight text-secondary">
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
          갤러리 — 무대 사진
      ═══════════════════════════════════════ */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Gallery
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              무대 위의 감동
            </h2>
            <p className="mt-4 text-base font-medium text-white/50">
              수아트 콰이어가 만들어온 특별한 순간들
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&h=400&fit=crop&q=80",
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&q=80",
              "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop&q=80",
            ].map((src, idx) => (
              <div key={idx} className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`무대 사진 ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          대상 — 이런 분께 추천합니다
      ═══════════════════════════════════════ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              For You
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              이런 분께 추천합니다
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "노래가 좋지만 혼자 부르기엔 아쉬운 분",
              "은퇴 후 새로운 취미와 사회 활동을 찾는 시니어",
              "무대 경험을 통해 자신감을 키우고 싶은 분",
              "합창의 감동을 제대로 느끼고 싶은 음악 애호가",
              "자녀와 함께 음악 활동을 즐기고 싶은 가족",
              "단체 활동으로 소속감과 성취감을 원하는 분",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-4 rounded-xl bg-background-subtle p-6"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base font-medium text-secondary/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="bg-background-subtle py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              자주 묻는 질문
            </h2>
          </div>
          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <h3 className="text-base font-bold text-secondary">{faq.q}</h3>
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
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            당신의 무대, 지금 시작하세요
          </h2>
          <p className="mt-4 text-base font-medium text-white/80">
            수아트 콰이어는 상시 단원을 모집합니다. 부담 없이 문의해주세요.
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
