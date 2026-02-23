import Image from "next/image";

export default function TrustSection() {
  /*
    로고 이미지: public/logos/ 폴더에 각 기관 로고 파일을 넣어주세요.
    현재는 텍스트 SVG 플레이스홀더를 사용합니다.
    실제 로고 파일(png/svg)로 교체 시 경로만 변경하면 됩니다.
  */
  const partners = [
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

  const stats = [
    { value: "200+", label: "공연 실적" },
    { value: "50+", label: "합창단 컨설팅" },
    { value: "9+", label: "공인기관 협업" },
    { value: "15+", label: "년 경력" },
  ];

  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Trusted Partners
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            공인기관이 선택한
            <br />
            <span className="text-primary">검증된 파트너</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/50">
            정부·지자체·대학·기업이 수아트앤컴퍼니와 함께합니다.
          </p>
        </div>

        {/* ── 실적 수치 ── */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/40">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── 협업 기관 로고 ── */}
        <div className="mt-16">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-white/30">
            협업 기관 및 기업
          </p>
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-5 md:grid-cols-5">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 w-auto max-w-full brightness-0 invert opacity-60 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] font-medium text-white/20">
            * 로고 이미지는 플레이스홀더이며, 실제 기관 로고로 교체 예정입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
