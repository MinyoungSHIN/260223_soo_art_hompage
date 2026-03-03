"use client";

import Image from "next/image";
import ScrollDownArrow from "./ScrollDownArrow";

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
    { value: "50+", label: "합창지휘 및 안무" },
    { value: "20+", label: "기업/학교/단체 협업" },
    { value: "20+", label: "년 경력" },
  ];

  return (
    <section id="trust" data-header-theme="dark" className="relative bg-secondary pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm tracking-wide text-white shadow-sm backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Trusted Partners
          </span>
          <h2 className="text-3xl font-bold tracking-tight leading-tight text-white md:text-5xl">
            공인기관이 선택한
            <br />
            <span className="text-primary">검증된 파트너</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/50">
            지자체·공공기관·대학·기업이 <br/> 수아트앤컴퍼니와 함께합니다.
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
            Cowork with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* 첫 번째 세트 */}
              {partners.map((p, idx) => (
                <div
                  key={`first-${p.name}`}
                  className="mx-3 flex h-24 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-white/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-8 w-auto max-w-full brightness-0 invert opacity-60 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
              {/* 두 번째 세트 (무한 스크롤을 위해 복제) */}
              {partners.map((p, idx) => (
                <div
                  key={`second-${p.name}`}
                  className="mx-3 flex h-24 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-white/10"
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
          </div>
          <p className="mt-6 text-center text-[11px] font-medium text-white/20">
           
          </p>
        </div>
      </div>
      <ScrollDownArrow nextSectionId="testimonials" isDark={true} />
    </section>
  );
}
