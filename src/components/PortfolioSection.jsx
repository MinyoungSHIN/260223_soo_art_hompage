import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "2024 신년 갈라 콘서트",
    category: "공연",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    title: "수아트 콰이어 정기 연주회",
    category: "합창",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    title: "경기도 합창 안무 컨설팅",
    category: "B2BG",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    title: "예술의전당 합창 페스티벌",
    category: "공연",
    image:
      "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    title: "성악 마스터클래스",
    category: "레슨",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    title: "지자체 합창 컨설팅",
    category: "B2BG",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&q=80",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background-subtle py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-secondary shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Portfolio
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
            함께 만든 무대
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-secondary/60 sm:text-base">
            클래식·뮤지컬 공연부터 합창 컨설팅까지, 수아트앤컴퍼니의 레퍼런스를
            확인하세요.
          </p>
        </div>

        {/* ── 포트폴리오 그리드 ── */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* ── 호버 오버레이 ── */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-6">
                  <span className="mb-1 rounded-full bg-primary/90 px-2 py-1 text-xs font-bold text-white sm:px-3">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
