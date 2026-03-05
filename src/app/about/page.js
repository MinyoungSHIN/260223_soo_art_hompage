import Image from "next/image";
import Link from "next/link";
import HistorySection from "@/components/HistorySection";
import BrandStorySection from "@/components/BrandStorySection";

export const metadata = {
  title: "About | Soo Art & Company",
  description: "이현정 대표 프로필 및 수아트앤컴퍼니 브랜드 스토리",
};

export default function AboutPage() {
  return (
    <>
      {/* ── 페이지 히어로 ── */}
      <section className="relative flex min-h-[50vh] sm:min-h-[50vh] items-center justify-center overflow-hidden pt-0" data-header-theme="dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=800&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 z-[2] bg-black/50" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-6">
          <span className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
            About Us
          </span>
          <h1 className="text-2xl font-bold leading-normal tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            수아트앤컴퍼니가 <br/> 
            당신을 <span className="text-primary"> 주인공으로</span> 만듭니다
          </h1>          
          <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {[
              "# 공연 전문 단체",
              "# 1:1 Voice 레슨",
              "# 합창단체 지휘 / 안무",
            ].map((service) => (
              <span
                key={service}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white sm:text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 대표 프로필 ── */}
      <section className="bg-background">
        <div className="mx-auto w-full">
          <div className="bg-neutral-100 px-6 py-12 sm:px-10 sm:py-20 lg:px-20 lg:py-30">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:items-center sm:gap-12 lg:gap-16">

                {/* 프로필 이미지 */}
                <div className="w-full sm:w-full sm:mx-auto lg:mx-0">
                  <div className="relative aspect-[6/6] w-full max-w-sm mx-auto sm:max-w-sm md:max-w-sm lg:max-w-sm overflow-hidden rounded-2xl">
                    <Image
                      src="/image/profile2.png"
                      alt="이현정 대표"
                      fill
                      className="object-cover object-[center_10%]"
                    />
                  </div>
                </div>

                {/* 프로필 텍스트 */}
                <div className="flex flex-col px-10">
                  <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold tracking-relaxed leading-tight text-secondary">
                    이현정 대표
                  </h2>
                  <p className="mt-0 text-base font-semibold text-primary/80 sm:text-lg lg:text-xl">
                    Soprano, Director, Educator
                  </p>
                  <div className="mt-6 space-y-1 text-base font-medium leading-relaxed text-secondary/80 sm:text-base lg:text-lg sm:mt-8">
                    <p>• 선화예중 / 선화예고 졸업</p>
                    <p>• 이화여자대학교 성악과 학사 졸업</p>
                    <p>• 이화여자대학교 성악과 석사 졸업</p>
                    <p>• 현) 하남시립합창단원</p>
                    <p>• 현) 수페리오레 뮤지컬단 음악감독</p>
                    <p>• 현) 하남시 신평중학교 뮤지컬단 강사</p>
                    <p>• 현) 하남시청소년뮤지컬단 대표</p>
                    <p>• 현) 수아트앤컴퍼니 대표</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 주요 경력 */}
            <div className="mx-auto max-w-5xl">
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:mt-24">
              {[
                { number: "20+", label: "년 경력" },
                { number: "50+", label: "합창/뮤지컬 지도"},              
                { number: "100%", label: "입시 합격률" },                                
                { number: "200+", label: "공연 실적" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                    {stat.number}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-secondary/60 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 활동 이력 ── */}
      <HistorySection />

      {/* ── 브랜드 스토리 ── */}
      <BrandStorySection />

      {/* ── CTA ── */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            함께 만들어갈 무대가 있으신가요?
          </h2>
          <p className="mt-6 text-sm font-medium text-white/90 sm:text-base">
            수아트앤컴퍼니와 함께라면 어떤 무대든 특별해집니다.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-[0_4px_14px_rgba(255,255,255,0.25)] transition-all duration-500 hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(255,255,255,0.45)] sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
