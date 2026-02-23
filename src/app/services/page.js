import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services | Soo Art & Company",
  description: "수아트 콰이어, 프리미엄 1:1 레슨, B2BG 비즈니스",
};

const services = [
  {
    href: "/services/choir",
    title: "수아트 콰이어",
    subtitle: "Soo Art Choir",
    copy: "다시 뜨거워질 당신의 무대, 함께하는 화음으로 완성됩니다.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&q=80",
    cta: "자세히 보기",
  },
  {
    href: "/services/lesson",
    title: "프리미엄 1:1 레슨",
    subtitle: "Premium Lesson",
    copy: "합격을 넘어 예술가로 성장하는 시간, 단 한 사람을 위한 밀착 코칭.",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80",
    cta: "자세히 보기",
  },
  {
    href: "/services/b2bg",
    title: "B2BG 비즈니스",
    subtitle: "B2BG Business",
    copy: "격이 다른 공연 기획, 수아트가 제안하는 압도적인 무대 솔루션.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80",
    cta: "자세히 보기",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&h=800&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            서비스 안내
          </h1>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-primary">
                    {s.subtitle}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold tracking-tight text-secondary">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-secondary/60">
                    {s.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
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
    </>
  );
}
