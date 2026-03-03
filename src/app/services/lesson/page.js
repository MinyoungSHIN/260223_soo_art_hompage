import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "프리미엄 1:1 보이스 레슨 | Soo Art & Company",
  description:
    "리틀엔젤스 입학, 예중·예고·음대 입시, 일반인 취미레슨까지. 합격을 넘어 예술가로 성장하는 시간.",
};

/* ── 실적 수치 ── */
const stats = [
  { value: "98%", label: "입시 합격률" },
  { value: "15+", label: "년 지도 경력" },
  { value: "1:1", label: "맞춤 커리큘럼" },
  { value: "300+", label: "누적 수강생" },
];

/* ── 타겟별 프로그램 ── */
const programs = [
  {
    title: "트랙 1. 엘리트(입시)",
    subtitle: "리틀엔젤스 입단, 예중·예고·음대 입시",
    desc: "합격률로 증명하는 보이스 메이킹.",
    details: [
      "입시곡 선정 및 해석",
      "발성 포지셔닝 (두성·흉성·혼합성구)",
      "이탈리아어·독일어 딕션",
      "모의 실기시험 및 피드백",
    ],
  },
  {
    title: "트랙 2. 커리어(전문)",
    subtitle: "성가대 솔리스트, 예비 아티스트",
    desc: "고난도 레퍼토리 및 발성 교정을 위한 전문 레슨.",
    details: [
      "전문 레퍼토리 구축",
      "발성 교정 및 테크닉 강화",
      "무대 퍼포먼스 향상",
      "아티스트 포트폴리오 준비",
    ],
  },
  {
    title: "트랙 3. 라이프(취미)",
    subtitle: "나만의 인생곡 마스터",
    desc: "노래 실력 향상, 발표 불안 해소 등 취미 성악 레슨.",
    details: [
      "기초 발성 및 호흡법",
      "좋아하는 곡으로 배우는 레슨",
      "개인 맞춤형 진도",
      "부담 없는 수업 분위기",
    ],
  },
];

/* ── 커리큘럼 타임라인 ── */
const timeline = [
  {
    phase: "Phase 1",
    title: "진단 & 목표 설정",
    duration: "1~2주",
    details: [
      "학생의 현재 음역·음색·호흡 능력 정밀 진단",
      "입시 목표 학교 및 전공 분석 (입시생의 경우)",
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
      "이탈리아어·독일어 딕션 기초 (입시생의 경우)",
    ],
  },
  {
    phase: "Phase 3",
    title: "레퍼토리 구축 & 해석",
    duration: "3~6개월",
    details: [
      "입시곡 선정 (아리아·가곡·한국가곡) - 입시생의 경우",
      "좋아하는 곡으로 배우기 - 취미레슨의 경우",
      "악곡 분석 및 음악적 해석 지도",
      "표현력·감정 전달 심화 트레이닝",
    ],
  },
  {
    phase: "Phase 4",
    title: "실전 시뮬레이션",
    duration: "입시 직전 / 필요시",
    details: [
      "모의 실기시험 (영상 촬영 + 피드백) - 입시생의 경우",
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
    school: "리틀엔젤스 합격",
    quote:
      "어린이 성대에 맞는 안전한 발성 지도 덕분에 무리 없이 실력을 키울 수 있었어요. 오디션에서 자신감 있게 노래할 수 있었습니다.",
  },
  {
    name: "최○○ (일반인)",
    school: "취미 레슨 수강생",
    quote:
      "부담 없이 즐기면서도 제대로 된 발성을 배울 수 있어서 정말 만족합니다. 이제는 자신 있게 노래할 수 있게 되었어요.",
  },
];

export default function LessonPage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden" data-header-theme="dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=900&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 z-[2] bg-black/50" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-6">
          <span className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm sm:text-sm md:text-base">
            Service 02 · Premium Voice Lesson
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            프리미엄 1:1 레슨
            <br />
            <span className="text-primary">맞춤형 보이스 트레이닝</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed tracking-wide text-white/90 sm:text-base md:text-lg lg:text-xl">
            입시·전문·취미 목표에 맞는 1:1 맞춤 레슨 이현정 대표의 전문 지도로 목표를 달성합니다
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl border-2 border-transparent bg-primary px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)]"
              style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
            >
              레슨 상담 신청
            </Link>
            <a
              href="#programs"
              className="rounded-xl border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)]"
              style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.1)" }}
            >
              프로그램 보기
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
      ═══════════════════════════════════════ */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-primary">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-secondary/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          타겟별 프로그램
      ═══════════════════════════════════════ */}
      <section id="programs" className="bg-background-subtle py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Programs
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              목표별 맞춤 프로그램
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programs.map((program, idx) => (
              <div
                key={program.title}
                className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {program.title}
                </span>
                <h3 className="mt-2 mb-1 text-base font-bold text-primary">{program.subtitle}</h3>
                <p className="mb-4 text-sm font-medium text-secondary/70">{program.desc}</p>
                <ul className="space-y-2">
                  {program.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs font-medium text-secondary/60"
                    >
                      <svg
                        className="mt-0.5 h-3 w-3 shrink-0 text-primary"
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
          레슨 특장점
      ═══════════════════════════════════════ */}
      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                Why Premium
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
                전문성과 경험의 차이
              </h2>
              <p className="mt-6 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
                이현정 대표의 15년 이상 지도 경력과 무대 경험을 바탕으로
                학생 개인의 특성에 맞는 맞춤형 교육을 제공합니다.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "합격률", value: "98%" },
                  { label: "지도 경력", value: "15년+" },
                  { label: "수강생", value: "300명+" },
                  { label: "교육 방식", value: "1:1 맞춤" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-medium text-secondary/50">{item.label}</p>
                    <p className="mt-1 text-lg font-bold text-secondary">{item.value}</p>
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
          CTA
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-8 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            레슨 상담 신청
          </h2>
          <p className="mt-6 text-sm font-medium text-white/90 sm:text-base">
            목표에 맞는 맞춤형 레슨을 위해 상담을 통해 자세한 안내를 받으실 수 있습니다.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-500 hover:bg-white/90 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.45)]"
            style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.25)" }}
          >
            상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
