import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "수아트 콰이어",
    subtitle: "Soo Art Choir",
    tagline: "무대 위의 주인공이 되는 경험",
    desc: "음악을 사랑하는 누구나 전문 무대에 설 수 있습니다. 발성·합창·안무를 체계적으로 배우고, 매 시즌 진짜 관객 앞에서 공연합니다.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&q=80",
    href: "/services/choir",
    cta: "자세히 보기",
  },
  {
    number: "02",
    title: "프리미엄 1:1 레슨",
    subtitle: "Premium Lesson",
    tagline: "합격을 넘어 예술가로",
    desc: "이현정 대표의 직접 지도. 학생 맞춤형 커리큘럼으로 높은 입시 합격률. 발성·호흡·딕션부터 무대 매너까지 밀착 코칭합니다.",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80",
    href: "/services/lesson",
    cta: "자세히 보기",
  },
  {
    number: "03",
    title: "B2BG 비즈니스",
    subtitle: "B2BG Business",
    tagline: "클래식·뮤지컬 전문 공연단체",
    desc: "이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연, 합창 안무 컨설팅, 전문 아티스트 섭외까지. 기관·기업·학교에 격이 다른 공연을 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop&q=80",
    href: "/services/b2bg",
    cta: "자세히 보기",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Our Solutions
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-5xl">
            수아트가 제안하는
            <br />
            <span className="text-primary">3가지 해답</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-secondary/60">
            15년 이상의 무대 경험을 바탕으로, 고객의 고민을 해결하는 최적의 솔루션을 제공합니다.
          </p>
        </div>

        {/* ── 솔루션 카드 ── */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.number}
              href={s.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              {/* 이미지 */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {s.subtitle}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {s.title}
                  </h3>
                </div>
                <span className="absolute top-4 right-5 text-5xl font-bold text-white/15">
                  {s.number}
                </span>
              </div>

              {/* 텍스트 */}
              <div className="p-6">
                <p className="mb-2 text-base font-bold text-primary/90">
                  {s.tagline}
                </p>
                <p className="mb-4 text-sm font-medium leading-relaxed text-secondary/60">
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
    </section>
  );
}
