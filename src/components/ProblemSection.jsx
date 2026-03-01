"use client";

export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "합창단 무대가 단조롭다",
      desc: "노래만 부르는 합창은 관객에게 지루합니다. 안무와 퍼포먼스를 더해 무대를 살리고 싶지만 전문가를 찾기 어렵습니다.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01" />
        </svg>
      ),
      title: "입시 준비, 어디서부터 해야 할지",
      desc: "예중·예고·예대 성악과 입시를 준비하고 싶지만, 검증된 전문가의 체계적인 지도를 받기가 쉽지 않습니다.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "노래를 배우고 싶지만 기회가 없다",
      desc: "무대에 서고 싶은 꿈은 있지만, 일반인이 전문 교육을 받고 실제로 공연할 수 있는 곳을 찾기 어렵습니다.",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "수준 높은 클래식·뮤지컬 공연을 초청하고 싶다",
      desc: "기관이나 기업에서 격 있는 클래식·뮤지컬 공연을 초청하고 싶지만, 믿을 수 있는 전문 공연단체를 찾기 어렵습니다.",
    },
  ];

  return (
    <section id="problem" className="relative bg-background-subtle pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">  
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── 섹션 헤더 ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm tracking-wide text-secondary shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Pain Points
          </span>
          <h2 className="text-2xl font-bold tracking-tight leading-tight text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
            혹시 이런 고민,
            <br />
            하고 계신가요?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-secondary/60 sm:text-base">
            많은 분들이 같은 문제로 고민합니다. <br className="hidden sm:block" />수아트앤컴퍼니는 이 고민들을 해결하기 위해 존재합니다.
          </p>
        </div>

        {/* ── 문제 카드 ── */}
        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:gap-5 sm:p-8"
            >
              <div className="shrink-0 text-secondary/30">{p.icon}</div>
              <div>
                <h3 className="mb-2 text-base font-bold tracking-tight text-secondary sm:text-lg">
                  {p.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed text-secondary/60 sm:text-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 전환 문구 ── */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-base font-bold text-secondary/80 sm:text-lg md:text-xl">
            이 모든 고민, <span className="text-primary">하나의 해답</span>이 있습니다.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={(e) => {
                if (typeof window === "undefined" || typeof document === "undefined") return;
                e.stopPropagation();
                const nextSection = document.getElementById("solution");
                if (!nextSection) return;
                
                // 헤더 높이 계산
                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight : 80;
                
                // 모든 디스플레이: 헤더 바로 밑에 위치하도록
                const targetY = nextSection.offsetTop - headerHeight;
                
                // 부드러운 스크롤 함수
                const smoothScrollTo = (targetY, duration = 500) => {
                  const startY = window.scrollY;
                  const diff = targetY - startY;
                  if (Math.abs(diff) < 1) return;
                  const startTime = performance.now();
                  const easeInOutCubic = (t) =>
                    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                  const step = (now) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    window.scrollTo({
                      top: startY + diff * easeInOutCubic(progress),
                      behavior: "instant",
                    });
                    if (progress < 1) {
                      requestAnimationFrame(step);
                    } else {
                      // 스크롤 완료 후 헤더 상태 업데이트를 위해 스크롤 이벤트 트리거
                      setTimeout(() => {
                        window.dispatchEvent(new Event("scroll"));
                      }, 100);
                    }
                  };
                  requestAnimationFrame(step);
                };
                
                smoothScrollTo(targetY, 500);
              }}
              onTouchStart={(e) => {
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                if (typeof window === "undefined" || typeof document === "undefined") return;
                e.stopPropagation();
                e.preventDefault();
                // 모바일 터치에서도 스크롤 실행
                const nextSection = document.getElementById("solution");
                if (!nextSection) return;

                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight : 80;

                const targetY = nextSection.offsetTop - headerHeight;

                const smoothScrollTo = (targetY, duration = 500) => {
                  const startY = window.scrollY;
                  const diff = targetY - startY;
                  if (Math.abs(diff) < 1) return;
                  const startTime = performance.now();
                  const easeInOutCubic = (t) =>
                    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                  const step = (now) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    window.scrollTo({
                      top: startY + diff * easeInOutCubic(progress),
                      behavior: "instant",
                    });
                    if (progress < 1) {
                      requestAnimationFrame(step);
                    } else {
                      setTimeout(() => {
                        window.dispatchEvent(new Event("scroll"));
                      }, 100);
                    }
                  };
                  requestAnimationFrame(step);
                };

                smoothScrollTo(targetY, 500);
              }}
              className="cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="다음 섹션으로 이동"
            >
              <svg className="h-8 w-8 animate-bounce text-primary transition-colors duration-300 hover:text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
