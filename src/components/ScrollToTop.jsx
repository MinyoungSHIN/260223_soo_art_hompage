"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치에 따라 버튼 표시 여부 결정 (solution 섹션부터)
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    
    const toggleVisibility = () => {
      // solution 섹션의 위치를 기준으로 버튼 표시
      const solutionSection = document.getElementById("solution");
      if (solutionSection) {
        const solutionTop = solutionSection.offsetTop;
        const scrollY = window.scrollY;
        
        // solution 섹션에 도달했을 때 버튼 표시
        if (scrollY >= solutionTop - 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // solution 섹션을 찾을 수 없으면 기본값 사용
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // 초기 로드 시에도 확인
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 히어로 섹션으로 스크롤
  const scrollToTop = () => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    
    // 첫 번째 섹션(히어로 섹션) 찾기
    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
      const heroSection = sections[0];
      const heroTop = heroSection.offsetTop;
      window.scrollTo({
        top: heroTop,
        behavior: "smooth",
      });
    } else {
      // 섹션을 찾을 수 없으면 맨 위로
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
      aria-label="맨 위로 이동"
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <svg
        className="h-5 w-5 text-secondary/80 transition-colors duration-300 hover:text-secondary sm:h-6 sm:w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
