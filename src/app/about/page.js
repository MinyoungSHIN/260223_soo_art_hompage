import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Soo Art & Company",
  description: "이현정 대표 프로필 및 수아트앤컴퍼니 브랜드 스토리",
};

export default function AboutPage() {
  return (
    <>
      {/* ── 페이지 히어로 ── */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden sm:h-[50vh] sm:min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=800&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-center sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
            About Us
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            수아트앤컴퍼니
          </h1>
          <p className="mt-4 text-base font-medium text-white/70 sm:text-lg">
            예술로 세상을 감동시키는 이야기
          </p>
        </div>
      </section>

      {/* ── 대표 프로필 ── */}
      <section className="bg-background py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2">
            {/* 프로필 이미지 */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop&q=80"
                alt="이현정 대표"
                fill
                className="object-cover"
              />
            </div>

            {/* 프로필 텍스트 */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                Representative
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
                이현정 대표
              </h2>
              <p className="mt-2 text-base font-semibold text-primary/80 sm:text-lg">
                성악가 · 합창 지휘자 · 공연 기획자
              </p>
              <div className="mt-6 space-y-3 text-sm font-medium leading-relaxed text-secondary/70 sm:mt-8 sm:space-y-4 sm:text-base">
                <p>
                  이현정 대표는 예술의 힘으로 사람들의 삶에 감동을 전하고자
                  수아트앤컴퍼니를 설립했습니다. 성악 전공 후 다수의 무대에
                  서며 쌓은 실전 경험을 바탕으로, 합창 지휘와 성악 교육에
                  탁월한 역량을 보유하고 있습니다.
                </p>
                <p>
                  특히 합창단 안무 컨설팅 분야에서 독보적인 전문성을 갖추고
                  있으며, 전국 단위 합창단의 무대를 격을 달리하는 퍼포먼스로
                  변화시키고 있습니다.
                </p>
                <p>
                  교육자이자 기획자로서 예중·예고·예대 입시생 지도, 기업 및
                  정부 행사 공연 기획까지 예술의 전 영역을 아우르는 통합적
                  솔루션을 제공합니다.
                </p>
              </div>

              {/* 주요 경력 */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "년 경력" },
                  { number: "200+", label: "공연 기획" },
                  { number: "50+", label: "합창단 컨설팅" },
                  { number: "98%", label: "입시 합격률" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold tracking-tight text-primary">
                      {stat.number}
                    </p>
                    <p className="mt-1 text-sm font-medium text-secondary/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 브랜드 스토리 ── */}
      <section className="bg-background-subtle py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Brand Story
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              예술을 통해 만드는 <br className="hidden md:block" />
              특별한 순간
            </h2>
            <p className="mt-6 text-sm font-medium leading-relaxed text-secondary/70 sm:mt-8 sm:text-base">
              수아트앤컴퍼니는 &ldquo;예술로 세상을 감동시킨다&rdquo;는
              비전 아래, 성악 교육·합창단 운영·공연 기획이라는 세 축을
              중심으로 활동하고 있습니다.
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
              일반인부터 전문 음악인까지, 무대 위에 서는 모든 이들이
              자신만의 이야기를 노래할 수 있도록 돕는 것이 우리의
              사명입니다. 수아트가 만드는 무대는 단순한 공연이 아닌,
              참여하는 모든 이의 인생을 빛내는 경험입니다.
            </p>
          </div>

          {/* 핵심 가치 */}
          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                ),
                title: "예술적 열정",
                desc: "음악과 무대에 대한 깊은 애정으로 모든 프로젝트에 진정성을 담습니다.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "함께하는 성장",
                desc: "단원, 학생, 파트너 모두가 함께 성장하는 상생의 가치를 추구합니다.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: "최고의 퀄리티",
                desc: "프리미엄 교육과 압도적인 무대 연출로 최상의 결과를 보장합니다.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-8"
              >
                <div className="mb-3 text-primary sm:mb-4">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-secondary sm:text-xl">
                  {value.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed text-secondary/60 sm:text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            함께 만들어갈 무대가 있으신가요?
          </h2>
          <p className="mt-4 text-sm font-medium text-white/80 sm:text-base">
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
