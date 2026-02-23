const testimonials = [
  {
    name: "김○○",
    role: "수아트 콰이어 단원 (3년차)",
    quote:
      "은퇴 후 무료한 일상이었는데, 콰이어 활동을 시작하면서 인생에 다시 무대가 생겼어요. 매 공연이 감동입니다.",
    tag: "콰이어",
  },
  {
    name: "박○○ 학생",
    role: "서울대 성악과 합격",
    quote:
      "이현정 선생님의 1:1 레슨 덕분에 발성의 원리를 완전히 이해할 수 있었어요. 입시 당일에도 가장 편안한 상태로 노래할 수 있었습니다.",
    tag: "프리미엄레슨",
  },
  {
    name: "이○○ 담당자",
    role: "경기도청 문화공연 담당",
    quote:
      "초청 공연 퀄리티가 압도적이었습니다. 클래식과 뮤지컬 넘버 구성이 완벽했고, 관객 반응이 뜨거웠어요. 내년에도 꼭 함께하고 싶습니다.",
    tag: "B2BG",
  },
  {
    name: "최○○ 학부모",
    role: "예고 성악과 합격생 학부모",
    quote:
      "아이의 잠재력을 정확히 파악하고 맞춤 지도해주셔서 예고 합격이라는 결과를 얻었습니다. 정말 감사합니다.",
    tag: "프리미엄레슨",
  },
  {
    name: "정○○",
    role: "하남시 합창단 지휘자",
    quote:
      "안무 컨설팅 이후 단원들의 무대 자신감이 확연히 달라졌습니다. 대회에서 수상까지 할 수 있었어요.",
    tag: "B2BG",
  },
  {
    name: "한○○",
    role: "수아트 콰이어 단원 (1년차)",
    quote:
      "노래는 좋아하지만 실력이 없어서 망설였는데, 초보자도 따뜻하게 맞아주는 분위기가 정말 좋았습니다.",
    tag: "콰이어",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-background-subtle py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-5xl">
            참여자들의 <span className="text-primary">생생한 후기</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-secondary/60">
            수아트앤컴퍼니와 함께한 분들의 이야기입니다.
          </p>
        </div>

        {/* ── 후기 카드 그리드 ── */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              {/* 인용 아이콘 */}
              <div>
                <svg
                  className="mb-4 h-8 w-8 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm font-medium leading-relaxed text-secondary/70 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* 작성자 */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-base font-bold text-secondary">{t.name}</p>
                  <p className="text-xs font-medium text-secondary/50">{t.role}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
