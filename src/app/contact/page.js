import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact | Soo Art & Company",
  description: "수강 신청 및 비즈니스 협업 문의",
};

export default function ContactPage() {
  return (
    <>
      {/* ── 페이지 히어로 ── */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden sm:h-[50vh] sm:min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=800&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-center sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
            Contact Us
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            문의하기
          </h1>
          <p className="mt-4 text-base font-medium text-white/70 sm:text-lg">
            수강 신청, 공연 기획, 비즈니스 협업 등 어떤 문의든 환영합니다.
          </p>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <ContactSection />

      {/* ── 오시는 길 (선택) ── */}
      <section className="bg-background-subtle py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Location
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              오시는 길
            </h2>
            <p className="mt-4 text-sm font-medium text-secondary/60 sm:text-base">
              서울특별시 강남구 테헤란로 123, 수아트빌딩 5층
            </p>
          </div>

          {/* 지도 플레이스홀더 */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-accent sm:mt-12">
            <div className="flex h-64 items-center justify-center sm:h-80">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-secondary/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-4 text-sm font-medium text-secondary/40">
                  지도 영역 — Google Maps 또는 카카오맵 임베드 예정
                </p>
              </div>
            </div>
          </div>

          {/* 연락 정보 카드 */}
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "주소",
                info: "서울특별시 강남구 테헤란로 123\n수아트빌딩 5층",
              },
              {
                icon: (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "전화",
                info: "02-1234-5678",
              },
              {
                icon: (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "이메일",
                info: "contact@sooart.co.kr",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-6"
              >
                <div className="mb-3 text-primary">{item.icon}</div>
                <h3 className="mb-1 text-sm font-bold text-secondary sm:text-base">
                  {item.title}
                </h3>
                <p className="whitespace-pre-line text-xs font-medium text-secondary/60 sm:text-sm">
                  {item.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
