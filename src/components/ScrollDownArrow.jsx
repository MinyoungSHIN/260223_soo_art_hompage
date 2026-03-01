"use client";

export default function ScrollDownArrow({ nextSectionId, className = "", isDark = false }) {
  // 어두운 배경 섹션에서는 흰색, 밝은 배경 섹션에서는 검정색
  const arrowColor = isDark 
    ? "text-white/60 hover:text-white/90" 
    : "text-secondary/60 hover:text-secondary/90";
  
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

  const scrollToNextSection = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    // 헤더 높이 계산 (헤더 요소에서 실제 높이 가져오기)
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80;
    
    if (!nextSectionId) {
      // 다음 섹션이 없으면 현재 섹션의 다음 형제 요소로 이동
      const button = e?.currentTarget || document.querySelector('[aria-label="다음 섹션으로 이동"]');
      if (!button) return;
      
      const currentSection = button.closest("section");
      if (!currentSection) return;
      
      let nextSibling = currentSection.nextElementSibling;
      while (nextSibling && nextSibling.tagName !== "SECTION") {
        nextSibling = nextSibling.nextElementSibling;
      }
      
      if (nextSibling) {
        // 모든 디스플레이: 헤더 바로 밑에 위치하도록
        const targetY = nextSibling.offsetTop - headerHeight;
        smoothScrollTo(targetY, 500);
      }
      return;
    }
    
    const nextSection = document.getElementById(nextSectionId);
    if (!nextSection) return;
    
    // 모든 디스플레이: 헤더 바로 밑에 위치하도록
    const targetY = nextSection.offsetTop - headerHeight;
    
    smoothScrollTo(targetY, 500);
  };
  
  return (
    <button
      onClick={scrollToNextSection}
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
      onTouchEnd={(e) => {
        e.stopPropagation();
        e.preventDefault();
        // 모바일 터치에서도 스크롤 실행
        scrollToNextSection(e);
      }}
      className={`absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 sm:bottom-8 ${className}`}
      aria-label="다음 섹션으로 이동"
    >
      <svg
        className={`h-6 w-6 ${arrowColor} transition-colors duration-300`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}
