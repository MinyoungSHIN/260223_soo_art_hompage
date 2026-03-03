import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "B2B Solution | Soo Art & Company",
  description:
    "이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연, 합창 안무 컨설팅, 전문 아티스트 섭외 — 학교·정부기관·회사를 위한 전문 공연 솔루션.",
};

/* ── 핵심 서비스 ── */
const coreServices = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "클래식·뮤지컬 전문 공연",
    desc: "이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연을 제공합니다. 학교·정부기관·회사·지자체의 문화 공연, 초청 공연, 기념 공연 등에 최고 수준의 라이브 무대를 선사합니다.",
    details: [
      "클래식 성악 리사이틀",
      "뮤지컬 갈라 공연",
      "기관 초청 문화 공연",
      "맞춤형 프로그램 구성",
    ],
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: "합창 안무 컨설팅",
    desc: "전국 단위 합창단을 대상으로 합창에 안무를 접목하여 무대 퍼포먼스의 차원을 한 단계 높입니다. 대회 수상, 정기 연주회, 기념 공연 등 목적에 맞는 맞춤형 안무를 구성합니다.",
    details: [
      "합창단 현장 방문 워크숍",
      "곡별 맞춤 안무 안출",
      "단원 체력·연령 고려한 동선 설계",
      "대회 심사 기준 반영",
    ],
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "전문 아티스트 섭외",
    desc: "성악가, 피아니스트, 오케스트라, 합창단 등 공연 목적과 규모에 맞는 최적의 아티스트를 섭외합니다. 수아트의 광범위한 음악계 네트워크를 활용한 프리미엄 캐스팅 서비스입니다.",
    details: [
      "공연 콘셉트에 맞는 아티스트 추천",
      "출연 계약 및 일정 관리",
      "리허설 코디네이션",
      "당일 아티스트 케어",
    ],
  },
];

/* ── 실적 수치 ── */
const stats = [
  { value: "200+", label: "공연 실적" },
  { value: "50+", label: "합창단 컨설팅" },
  { value: "30+", label: "기업/정부 파트너" },
  { value: "100%", label: "고객 재계약률" },
];

/* ── 프로세스 ── */
const process = [
  {
    step: "01",
    title: "상담 & 니즈 파악",
    desc: "공연의 목적, 규모, 예산, 일정을 파악하고 최적의 솔루션을 제안합니다.",
  },
  {
    step: "02",
    title: "프로그램 & 제안서",
    desc: "콘셉트, 프로그램 구성, 연출 방향, 예산안이 포함된 맞춤 제안서를 제공합니다.",
  },
  {
    step: "03",
    title: "준비 & 리허설",
    desc: "캐스팅, 무대 세팅, 음향·조명 준비, 리허설까지 공연 준비를 총괄합니다.",
  },
  {
    step: "04",
    title: "공연 & 사후 관리",
    desc: "당일 공연을 완벽히 수행하고, 공연 후 결과 리포트와 미디어 자료를 제공합니다.",
  },
];

/* ── 협업 기관 ── */
const clients = [
  { name: "경기도", logo: "/logos/gyeonggi.svg" },
  { name: "하남시", logo: "/logos/hanam.svg" },
  { name: "수원시", logo: "/logos/suwon.svg" },
  { name: "고양시", logo: "/logos/goyang.svg" },
  { name: "파주시", logo: "/logos/paju.svg" },
  { name: "김포시", logo: "/logos/gimpo.svg" },
  { name: "HP", logo: "/logos/hp.svg" },
  { name: "이화여대", logo: "/logos/ewha.svg" },
  { name: "대한민국공군", logo: "/logos/rokaf.svg" },
];

export default function B2BPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20 sm:min-h-[80vh] sm:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=900&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-8 text-center sm:px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary sm:mb-5 sm:text-sm">
            Service 03 · B2B Business
          </p>
          <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            B2B Solution
            <br />
            <span className="text-primary">전문 공연 기획 및 컨설팅</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-white/80 sm:mt-8 sm:text-base">
            기업·기관·지자체를 위한 클래식·뮤지컬 공연 기획
            <br className="hidden sm:block" />
            합창단 안무 컨설팅 및 전문 아티스트 섭외 서비스
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl border-2 border-transparent bg-primary px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)]"
              style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
            >
              공연 문의하기
            </Link>
            <a
              href="#services"
              className="rounded-xl border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)]"
              style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.1)" }}
            >
              서비스 상세 보기
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
      ═══════════════════════════════════════ */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-secondary/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          핵심 서비스 3가지
      ═══════════════════════════════════════ */}
      <section id="services" className="bg-background-subtle py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Core Services
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              제공 서비스
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-secondary">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm font-medium leading-relaxed text-secondary/70">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-xs font-medium text-secondary/60"
                    >
                      <svg
                        className="mt-0.5 h-3 w-3 shrink-0 text-primary"
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
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          진행 프로세스
      ═══════════════════════════════════════ */}
      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Process
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              진행 프로세스
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
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
          CTA
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            공연 문의하기
          </h2>
          <p className="mt-6 text-sm font-medium text-white/90 sm:text-base">
            공연 규모와 예산에 맞는 맞춤 제안서를 제공합니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-500 hover:bg-white/90 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.45)]"
            style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.25)" }}
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
