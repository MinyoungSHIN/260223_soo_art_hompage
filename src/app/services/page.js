import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services | Soo Art & Company",
  description: "수아트 콰이어, 프리미엄 1:1 레슨, B2B 비즈니스",
};

const services = [
  {
    href: "/services/choir",
    title: "수아트 콰이어",
    subtitle: "Soo Art Choir",
    copy: "프리미엄 합창단 운영 및 전문 지도",
    features: ["20~30세 타겟", "하남 지역", "정기 연주회"],
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&q=80",
  },
  {
    href: "/services/lesson",
    title: "프리미엄 1:1 레슨",
    subtitle: "Premium Voice Lesson",
    copy: "입시·전문·취미 맞춤형 보이스 트레이닝",
    features: ["98% 합격률", "1:1 맞춤 코칭", "15년+ 경력"],
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80",
  },
  {
    href: "/services/b2bg",
    title: "B2B Solution",
    subtitle: "B2B Business",
    copy: "기업·기관·지자체 공연 기획 및 컨설팅",
    features: ["200+ 공연 실적", "맞춤형 솔루션", "원스톱 서비스"],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] sm:min-h-[60vh] items-center justify-center overflow-hidden pt-0" data-header-theme="dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&h=800&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 z-[2] bg-black/50" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-6">
          <span className="mb-2 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
            Our Services
          </span>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            전문성과 열정으로 만드는 <span className="text-primary"> 프리미엄 솔루션</span>
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-xs font-medium leading-relaxed tracking-wide text-white/90 sm:text-sm md:text-base">
            합창단 운영부터 입시 레슨, 공연 기획까지 예술의 모든 영역을 아우르는 통합 서비스
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                      {s.subtitle}
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      {s.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-sm font-medium leading-relaxed text-secondary/70">
                    {s.copy}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-background-subtle px-3 py-1 text-xs font-medium text-secondary/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
