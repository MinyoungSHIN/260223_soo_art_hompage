"use client";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "B2BG 비즈니스 | Soo Art & Company",
  description:
    "이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연, 합창 안무 컨설팅, 전문 아티스트 섭외 — 기관·기업을 위한 전문 공연단체.",
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
    desc: "이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연을 제공합니다. 기관·기업·지자체의 문화 공연, 초청 공연, 기념 공연 등에 최고 수준의 라이브 무대를 선사합니다.",
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

export default function B2BGPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative flex h-[70vh] min-h-[520px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=900&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Service 03 · B2BG Business
          </p>
          <h1 className="text-4xl font-bold leading-relaxed tracking-tight text-white md:text-6xl lg:text-7xl">
            기관·기업을 위한
            <br />
            <span className="text-primary">전문 공연단체</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/70">
            이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연, 합창 안무 컨설팅,
            전문 아티스트 섭외까지. 기관·기업에 격이 다른 공연을 제공합니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl border-2 border-transparent bg-primary px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:-translate-y-1"
              style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,107,53,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,107,53,0.3)"; }}
            >
              공연 문의하기
            </Link>
            <a
              href="#services"
              className="rounded-xl border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1"
              style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.1)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,255,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,255,255,0.1)"; }}
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
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-8">
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
      <section id="services" className="bg-background-subtle py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Core Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              3대 핵심 서비스
            </h2>
            <p className="mt-4 text-base font-medium text-secondary/60">
              기관·기업의 니즈에 맞는 최적의 공연 솔루션을 제공합니다.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-10"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_300px]">
                  <div>
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <h3 className="text-2xl font-bold tracking-tight text-secondary">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-relaxed text-secondary/70">
                      {service.desc}
                    </p>
                  </div>
                  <ul className="space-y-3 md:border-l md:border-gray-100 md:pl-8">
                    {service.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-sm font-medium text-secondary/70"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          진행 프로세스
      ═══════════════════════════════════════ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              진행 프로세스
            </h2>
            <p className="mt-4 text-base font-medium text-secondary/60">
              상담부터 사후 관리까지, 체계적인 4단계로 진행합니다.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative rounded-xl bg-background-subtle p-8"
              >
                <span className="text-5xl font-bold text-primary/15">{item.step}</span>
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
          협업 기관
      ═══════════════════════════════════════ */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Trusted By
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              함께한 파트너
            </h2>
            <p className="mt-4 text-base font-medium text-white/50">
              정부·기업·대학이 신뢰하는 전문 공연단체
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-5 md:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-8 w-auto max-w-full brightness-0 invert opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          포트폴리오 미리보기
      ═══════════════════════════════════════ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              주요 공연 실적
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "경기도 합창단 안무 컨설팅",
                desc: "경기도 소속 합창단의 무대 퍼포먼스를 혁신한 안무 컨설팅 프로젝트.",
                image:
                  "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&h=400&fit=crop&q=80",
              },
              {
                title: "이화여대 초청 클래식 공연",
                desc: "이화여대 개교 기념 초청 클래식 리사이틀 — 이현정 대표 출연.",
                image:
                  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop&q=80",
              },
              {
                title: "하남시 신년 갈라 콘서트",
                desc: "하남시 주최 신년 갈라 콘서트. 클래식·뮤지컬 하이라이트 프로그램 구성.",
                image:
                  "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&h=400&fit=crop&q=80",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl bg-background-subtle"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-secondary">{project.title}</h3>
                  <p className="mt-2 text-sm font-medium text-secondary/60">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="text-base font-bold text-primary hover:text-primary-dark transition-colors"
            >
              전체 포트폴리오 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            다음 무대, 수아트와 함께하세요
          </h2>
          <p className="mt-4 text-base font-medium text-white/80">
            공연 규모와 예산에 맞는 맞춤 제안서를 무료로 제공합니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-500 hover:bg-white/90 hover:-translate-y-1"
            style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.25)" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,255,255,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,255,255,0.25)"; }}
          >
            공연 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
