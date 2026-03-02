"use client";

import ScrollDownArrow from "./ScrollDownArrow";

const testimonials = [
  {
    name: "김○경",
    role: "HP 기업 합창단원",
    quote:
      "초보자이고 노래도 잘 못해서 걱정했는데 편안하게 해 주셨어요. 현정쌤 덕분에 무대에서 주인공이 될 수 있었어요. 매 공연이 감동이었습니다. 감사합니다!!",
    tag: "콰이어",
  },
  {
    name: "윤○한",
    role: "단국대 성악과 합격",
    quote:
      "이현정 스승님의 1:1 레슨 덕분에 발성의 원리를 완전히 이해할 수 있었어요. 입시 당일에도 가장 편안한 상태로 노래할 수 있었습니다.",
    tag: "프리미엄레슨",
  },
  {
    name: "이○현 선생님",
    role: "경기도 OO중학교",
    quote:
      "초청 공연 퀄리티가 압도적이었습니다. 클래식과 뮤지컬 넘버 구성이 완벽했고, 학생들 반응이 뜨거웠어요. 내년에도 꼭 함께하고 싶습니다.",
    tag: "B2B",
  },
  {
    name: "조○영 학부모",
    role: "단국대 성악과 합격생 학부모",
    quote:
      "아이의 잠재력을 정확히 파악하고 맞춤 지도해주셔서 음대 합격이라는 결과를 얻었습니다. 정말 감사합니다.",
    tag: "프리미엄레슨",
  },
  {
    name: "김○미",
    role: "OO 합창단 지휘자",
    quote:
      "감각적인 안무와 디렉팅 이후 단원들의 무대 자신감이 확연히 달라졌습니다. 공연의 Quality를 높여주는 합창안무입니다. 최고에요~!",
    tag: "B2B",
  },
  {
    name: "신○윤 학부모",
    role: "리틀엔젤스 합격생 학부모",
    quote:
      "아이 나이와 목소리에 맞게 발성 지도해 주시고, 노래를 완성해 주셨어요. 덕분에 리틀엔젤스에 입단 할 수 있었습니다. 감사합니다.",
    tag: "프리미엄레슨",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative bg-background-subtle pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm tracking-wide text-secondary shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Testimonials
          </span>
          <h2 className="text-2xl font-bold tracking-tight leading-tight text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
            참여자들의 <span className="text-primary">생생한 후기</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-secondary/60 sm:text-base">
            수아트앤컴퍼니와 함께한 분들의 이야기입니다.
          </p>
        </div>

        {/* ── 후기 카드 그리드 ── */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-8"
            >
              {/* 인용 아이콘 */}
              <div>
                <svg
                  className="mb-3 h-6 w-6 text-primary/20 sm:mb-4 sm:h-8 sm:w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xs font-medium leading-relaxed text-secondary/70 italic sm:text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* 작성자 */}
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 sm:mt-6 sm:pt-4">
                <div>
                  <p className="text-sm font-bold text-secondary sm:text-base">{t.name}</p>
                  <p className="text-xs font-medium text-secondary/50">{t.role}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary sm:px-3">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollDownArrow nextSectionId="portfolio" isDark={false} />
    </section>
  );
}
