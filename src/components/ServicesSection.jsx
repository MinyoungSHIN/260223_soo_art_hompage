"use client";

import Image from "next/image";

const services = [
  {
    id: "choir",
    number: "01",
    title: "수아트 콰이어",
    subtitle: "Soo Art Choir",
    description:
      "다시 뜨거워질 당신의 무대, 함께하는 화음으로 완성됩니다.",
    details:
      "무대 주인공을 꿈꾸는 일반 성인 및 시니어를 위한 합창단. 활기찬 안무 연습과 감동적인 무대 피날레까지, 당신의 이야기를 노래로 만들어 드립니다.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&q=80",
    cta: "단원 신청하기",
  },
  {
    id: "lesson",
    number: "02",
    title: "프리미엄 1:1 레슨",
    subtitle: "Premium Lesson",
    description:
      "합격을 넘어 예술가로 성장하는 시간, 단 한 사람을 위한 밀착 코칭.",
    details:
      "예중·예고·예대 성악 입시생을 위한 이현정 대표의 디테일한 맞춤 레슨. 차분한 분위기의 전문 연습실에서 최고의 결과를 만들어 냅니다.",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80",
    cta: "레슨 상담 신청",
  },
  {
    id: "b2bg",
    number: "03",
    title: "B2BG 비즈니스",
    subtitle: "B2BG Business",
    description:
      "격이 다른 공연 기획, 수아트가 제안하는 압도적인 무대 솔루션.",
    details:
      "합창 안무 컨설팅, 공연·행사 총괄 운영 대행, 전문 아티스트 섭외까지. 정부, 기업, 학교 행사를 위한 원스톱 공연 솔루션을 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80",
    cta: "제안서 요청하기",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Our Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-5xl">
            수아트가 제안하는 서비스
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-secondary/60">
            성악 교육부터 대형 공연 기획까지, 예술의 모든 순간을 함께합니다.
          </p>
        </div>

        {/* ── 서비스 카드 그리드 ── */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              {/* ── 카드 이미지 ── */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-4xl font-bold text-white/30">
                  {service.number}
                </span>
              </div>

              {/* ── 카드 콘텐츠 ── */}
              <div className="p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {service.subtitle}
                </p>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-secondary">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm font-semibold leading-relaxed text-primary/80">
                  &ldquo;{service.description}&rdquo;
                </p>
                <p className="mb-6 text-sm font-medium leading-relaxed text-secondary/60">
                  {service.details}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-0.5"
                  style={{ boxShadow: "0 2px 10px rgba(255,107,53,0.25)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,53,0.45)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 10px rgba(255,107,53,0.25)"; }}
                >
                  {service.cta}
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
