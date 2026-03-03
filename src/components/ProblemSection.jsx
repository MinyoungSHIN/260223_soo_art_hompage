"use client";

export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "잊었던 17살의 꿈, 여전히 관객석에 계신가요?",
      desc: ( 
      <>
      오디션 공고 앞에서 발길을 돌렸던 그 미련. <br/>
      바쁜 일상에 잊었던 당신의 뜨거운 목소리. <br/>
      <span className="tracking-tighter sm:tracking-normal">먼지 쌓인 마이크를 꺼내세요. 이제 당신이 주인공입니다.</span>
      </>
      ),
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01" />
        </svg>
      ),
      title: "똑같은 입시 레슨으로 합격 할 수 있을까요?",
      desc: (
      <>
      리틀엔젤스부터 예중·예고·음대 입시까지. <br/>
      수많은 지원자 사이에서 내가 선택 받으려면, <br/>
      한 번에 사로잡는 '전략적 보이스'가 필요합니다.
      </>
      ),
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "뻔한 행사/축가, 혹시 예산 낭비라 느끼셨나요?",
      desc: (
      <>
      격식만 차린 공연은 품격을 높이지 못합니다. <br/>
      현직 성악가의 공연으로 행사의 '급'을 바꾸세요.<br/>
      검증된 실력파 아티스트들이 작품으로 만들어 드립니다.
      </>
      ),
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "노래만 하는 합창, 관객들이 지루해 하나요?",
      desc: (
      <>
      합창단은 많지만, 눈을 뗄 수 없는 합창단은 드뭅니다. <br/>
      합창 안무와 퍼포먼스로 '살아있는 무대'를 만듭니다. <br/>
      지루할 틈 없는 연출로 관객의 시선을 압도하세요.
      </>
      ),
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
        </div>

        {/* ── 문제 카드 ── */}
        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-3.5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:gap-5 sm:p-8"
            >
              <div className="shrink-0 text-secondary/30">{p.icon}</div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1.5 text-sm font-bold tracking-tight text-secondary sm:text-lg sm:mb-2">
                  {p.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed tracking-tight text-secondary/60 sm:text-sm sm:tracking-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 전환 문구 ── */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-base font-bold text-secondary/80 sm:text-lg md:text-xl">
            이 모든 고민, <span className="text-primary">수아트에 해답</span>이 있습니다.
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
