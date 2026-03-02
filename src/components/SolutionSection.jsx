"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollDownArrow from "./ScrollDownArrow";

const solutions = [
  {
    number: "01",
    title: "수아트 콰이어 합창단",
    subtitle: "Soo Art Choir",
    tagline: "무대 위의 주인공이 되는 경험",
    desc: (
      <>
      합창·뮤지컬 무대를 경험하고 싶은 아마추어 성인을 위한 합창단. <br/>
      발성·합창·안무를 체계적으로 배우고, 매 시즌 관객 앞에서 공연합니다. <br/>
      더 이상의 다음은 없습니다. 지금, 당신의 무대를 시작하세요.
      </>
    ),
    image: "/image/choire.png",
    href: "/services/choir",
    cta: "자세히 보기",
  },
  {
    number: "02",
    title: "프리미엄 1:1 보이스 레슨",
    subtitle: "Premium Voice Lesson",
    tagline: "합격을 넘어, 예술가로 성장하는 시간",
    desc: (
      <>
      리틀엔젤스 입단, 예중·예고·음대 입시준비, <br/>
      전문적인 코칭을 받고 싶은 비전공 일반인까지, <br/>
      많은 합격자를 배출한 이현정 대표가 1:1 밀착 코칭합니다.
      </>
    ),
    image: "/image/lesson2.png",
    href: "/services/lesson",
    cta: "자세히 보기",
  },
  {
    number: "03",
    title: (<span className="text-lg sm:text-xl">합창단 위탁 운영<br/> 합창 안무 컨설팅<br/> 행사 공연 및 파견</span>),
    subtitle: "B2B Solution",
    tagline: "클래식·뮤지컬 전문 공연단체",
    desc: (
      <>
      기업, 단체, 소모임 등 합창 지휘 및 위탁 운영,<br/>
      합창/뮤지컬 안무 작품 제작 및 디렉팅 서비스, <br/>
      행사, 축가 공연 및 전문 공연팀 섭외 대행
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop&q=80",
    href: "/services/b2bg",
    cta: "자세히 보기",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="relative bg-background pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm tracking-wide text-secondary shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Our Solutions
          </span>
          <h2 className="text-2xl font-bold tracking-tight leading-tight text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
            수아트가 제안하는
            <br />
            <span className="text-primary">3가지 해답</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-secondary/60 sm:text-base">
            20년 이상의 무대 경험을 바탕으로, 고객의 고민을 해결하는 최적의 솔루션을 제공합니다.
          </p>
        </div>

        {/* ── 솔루션 카드 ── */}
        <div className="mt-12 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.number}
              href={s.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              {/* 이미지 */}
              <div className="relative h-48 overflow-hidden sm:h-56">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* 검정색 오버레이 레이어 - 위에서 아래로 그라데이션 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {s.subtitle}
                  </span>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* 텍스트 */}
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-sm font-bold text-primary/90 sm:text-base">
                  {s.tagline}
                </p>
                <p className="mb-4 text-xs font-medium leading-relaxed text-secondary/60 sm:text-sm">
                  {s.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all group-hover:gap-3">
                  {s.cta}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ScrollDownArrow nextSectionId="trust" isDark={false} />
    </section>
  );
}
