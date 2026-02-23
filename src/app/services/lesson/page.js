import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "프리미엄 1:1 레슨 | Soo Art & Company",
  description:
    "합격을 넘어 예술가로 성장하는 시간. 이현정 대표의 밀착 코칭으로 입시 합격률 98%.",
};

/* ── 실적 수치 ── */
const stats = [
  { value: "98%", label: "입시 합격률" },
  { value: "15+", label: "년 지도 경력" },
  { value: "1:1", label: "맞춤 커리큘럼" },
  { value: "300+", label: "누적 수강생" },
];

/* ── 커리큘럼 타임라인 ── */
const timeline = [
  {
    phase: "Phase 1",
    title: "진단 & 목표 설정",
    duration: "1~2주",
    details: [
      "학생의 현재 음역·음색·호흡 능력 정밀 진단",
      "입시 목표 학교 및 전공 분석",
      "맞춤형 장기 커리큘럼 설계",
    ],
  },
  {
    phase: "Phase 2",
    title: "기초 테크닉 강화",
    duration: "1~3개월",
    details: [
      "복식호흡 및 횡격막 지지 훈련",
      "발성 포지셔닝 (두성·흉성·혼합성구)",
      "이탈리아어·독일어 딕션 기초",
    ],
  },
  {
    phase: "Phase 3",
    title: "레퍼토리 구축 & 해석",
    duration: "3~6개월",
    details: [
      "입시곡 선정 (아리아·가곡·한국가곡)",
      "악곡 분석 및 음악적 해석 지도",
      "표현력·감정 전달 심화 트레이닝",
    ],
  },
  {
    phase: "Phase 4",
    title: "실전 시뮬레이션",
    duration: "입시 직전",
    details: [
      "모의 실기시험 (영상 촬영 + 피드백)",
      "무대 매너·시선 처리·입퇴장 연습",
      "심리 컨디션 관리 및 컨설팅",
    ],
  },
];

/* ── 합격 스토리 ── */
const testimonials = [
  {
    name: "김○○ 학생",
    school: "서울대 성악과 합격",
    quote:
      "이현정 선생님 덕분에 발성의 원리를 완전히 이해할 수 있었어요. 입시 당일에도 가장 편안한 상태로 노래할 수 있었습니다.",
  },
  {
    name: "박○○ 학생",
    school: "한예종 성악과 합격",
    quote:
      "단순히 기술만 가르치는 것이 아니라, 음악을 대하는 태도와 예술가로서의 마음가짐까지 배웠습니다.",
  },
  {
    name: "이○○ 학생",
    school: "이화여대 성악과 합격",
    quote:
      "모의 실기시험 덕분에 실제 시험에서 전혀 긴장하지 않았어요. 체계적인 준비의 힘을 느꼈습니다.",
  },
];

export default function LessonPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative flex h-[70vh] min-h-[520px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=900&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Service 02 · Premium Lesson
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            합격을 넘어
            <br />
            <span className="text-primary">예술가</span>로 성장하는 시간
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/70">
            단 한 사람을 위한 밀착 코칭.
            이현정 대표가 직접 설계하는 프리미엄 1:1 성악 레슨입니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-primary px-8 py-4 text-base font-bold text-white transition-colors hover:bg-primary-dark"
            >
              레슨 상담 신청
            </Link>
            <a
              href="#curriculum"
              className="rounded-xl border border-white/30 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              커리큘럼 보기
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
      ═══════════════════════════════════════ */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-secondary/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          레슨 특장점
      ═══════════════════════════════════════ */}
      <section className="bg-background-subtle py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
                Why Premium
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
                왜 수아트 프리미엄 레슨인가?
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "1:1 맞춤 커리큘럼",
                    desc: "학생의 성대 특성, 음악적 역량, 목표 학교를 정밀 분석하여 완전 개인화된 교육 과정을 설계합니다.",
                  },
                  {
                    title: "현역 성악가의 직접 지도",
                    desc: "무대 경험이 풍부한 이현정 대표가 이론과 실전 모두에서 살아있는 교육을 제공합니다.",
                  },
                  {
                    title: "실전 시뮬레이션",
                    desc: "모의 실기시험, 영상 촬영 분석, 무대 매너 지도까지. 시험장에서의 모든 상황에 대비합니다.",
                  },
                  {
                    title: "입시 전략 컨설팅",
                    desc: "입시곡 선정, 학교별 출제 경향 분석, 면접 대비까지 종합적인 입시 전략을 제시합니다.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-3.5 w-3.5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-secondary">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-secondary/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=1000&fit=crop&q=80"
                alt="1:1 레슨 모습"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CURRICULUM — 타임라인
      ═══════════════════════════════════════ */}
      <section id="curriculum" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Curriculum
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              단계별 맞춤 커리큘럼
            </h2>
            <p className="mt-4 text-base font-medium text-secondary/60">
              진단부터 실전 시뮬레이션까지, 체계적인 4단계 코칭 시스템
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {timeline.map((item, idx) => (
              <div
                key={item.phase}
                className="grid gap-6 rounded-xl bg-background-subtle p-8 md:grid-cols-[200px_1fr]"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {item.phase}
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-secondary/40">{item.duration}</p>
                </div>
                <ul className="space-y-3">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm font-medium text-secondary/70"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          대상
      ═══════════════════════════════════════ */}
      <section className="bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              For You
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              이런 분께 추천합니다
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "예중·예고·예대 성악과 입시를 준비하는 학생",
              "체계적인 발성 지도를 원하는 입시생 학부모",
              "유학 준비 중인 성악 전공생",
              "취미 성악을 더 깊이 배우고 싶은 일반인",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base font-medium text-secondary/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          합격 후기
      ═══════════════════════════════════════ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl">
              합격생 이야기
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl bg-background-subtle p-8"
              >
                <svg
                  className="mb-4 h-8 w-8 text-primary/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm font-medium leading-relaxed text-secondary/70 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-base font-bold text-secondary">{t.name}</p>
                  <p className="text-sm font-medium text-primary">{t.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            합격의 첫걸음, 지금 시작하세요
          </h2>
          <p className="mt-4 text-base font-medium text-white/80">
            무료 레벨 테스트로 나에게 맞는 커리큘럼을 확인해보세요.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-white/90"
          >
            레슨 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
