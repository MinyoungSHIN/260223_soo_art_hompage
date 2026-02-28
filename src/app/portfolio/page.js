import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio | Soo Art & Company",
  description: "수아트앤컴퍼니 연주회 실적 및 행사 레퍼런스",
};

const categories = ["전체", "공연", "합창", "레슨", "B2BG"];

const portfolioItems = [
  {
    id: 1,
    title: "2024 신년 갈라 콘서트",
    category: "공연",
    year: "2024",
    description: "서울 예술의전당 대극장에서 진행된 신년 갈라 콘서트. 오케스트라와 합창단이 함께한 감동의 무대.",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "수아트 콰이어 제5회 정기 연주회",
    category: "합창",
    year: "2024",
    description: "수아트 콰이어 단원 60명이 함께 만든 화음의 향연. 클래식부터 뮤지컬 넘버까지.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "삼성전자 창립기념 문화행사",
    category: "B2BG",
    year: "2024",
    description: "기업 문화행사 총괄 기획·운영. 직원 합창단 특별 공연 및 아티스트 초청.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "전국 합창 페스티벌 안무 컨설팅",
    category: "B2BG",
    year: "2023",
    description: "전국 12개 합창단을 대상으로 한 합창 안무 컨설팅. 무대 퍼포먼스 퀄리티 향상 프로젝트.",
    image: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "성악 마스터클래스 — 여름 캠프",
    category: "레슨",
    year: "2023",
    description: "예중·예고 입시생 대상 집중 마스터클래스. 실기 시험 대비 및 무대 경험 제공.",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "서울시 교육청 교원 합창 연수",
    category: "B2BG",
    year: "2023",
    description: "서울시 교육청 소속 교원 200명 대상 합창 지도법 연수 프로그램.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 7,
    title: "크리스마스 특별 공연",
    category: "공연",
    year: "2023",
    description: "수아트 콰이어와 게스트 아티스트가 함께하는 연말 특별 공연. 캐롤과 클래식의 만남.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 8,
    title: "입시 성공 스토리 — 2023학년도",
    category: "레슨",
    year: "2023",
    description: "서울대·한예종·이화여대 등 주요 음대 합격생 다수 배출. 98% 합격률 달성.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── 페이지 히어로 ── */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden sm:h-[50vh] sm:min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501612780327-45045538702b?w=1920&h=800&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-center sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            함께 만든 무대
          </h1>
          <p className="mt-4 text-base font-medium text-white/70 sm:text-lg">
            연주회 실적부터 기업 행사까지, 수아트앤컴퍼니의 레퍼런스
          </p>
        </div>
      </section>

      {/* ── 포트폴리오 그리드 ── */}
      <section className="bg-background py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 카테고리 필터 (정적) */}
          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3">
            {categories.map((cat, idx) => (
              <span
                key={cat}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:px-5 sm:py-2 sm:text-sm ${
                  idx === 0
                    ? "bg-primary text-white"
                    : "bg-background-subtle text-secondary/60 hover:bg-accent"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* 그리드 */}
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              >
                {/* 이미지 */}
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4">
                    <span className="rounded-full bg-primary/90 px-2 py-1 text-xs font-bold text-white sm:px-3">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-white/20 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm sm:px-3">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* 콘텐츠 */}
                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 text-base font-bold tracking-tight text-secondary sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium leading-relaxed text-secondary/60 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-accent py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
            다음 무대의 주인공이 되어보세요
          </h2>
          <p className="mt-4 text-sm font-medium text-secondary/60 sm:text-base">
            공연 기획, 합창단 참여, 입시 레슨 등 어떤 문의든 환영합니다.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)] sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
            style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
