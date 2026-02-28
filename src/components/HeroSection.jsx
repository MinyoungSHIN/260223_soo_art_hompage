"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "/image/hero1.jpg",
  "/image/hero2.jpg",
  "/image/hero3.jpg",
  "/image/hero4.jpg",
  "/image/hero5.png",
];

// 각 이미지의 모바일 object-position 설정
// 중앙(0)을 기준으로: 왼쪽은 음수(-), 오른쪽은 양수(+)
// 예: -10 (왼쪽으로 10%), 0 (중앙), +20 (오른쪽으로 20%)
// 데스크톱에서는 모두 중앙(0)으로 유지됩니다
const heroImagePositions = [
  -2,   // image1: 왼쪽으로 2%
  +20,  // image2: 오른쪽으로 20%
  0,    // image3: 중앙 (수정 가능)
  +40,  // image4: 오른쪽으로 40% (수정 가능)
  +41,  // image5: 오른쪽으로 41% (수정 가능)
];

// 비디오 씬별 위치 설정
// 형식: [시작시간(초), 끝시간(초), 가로위치]
// 가로위치: 중앙(0), 왼쪽은 음수(-), 오른쪽은 양수(+)
// 예: [0, 5, 0] = 0-5초 동안 중앙, [5, 10, +20] = 5-10초 동안 오른쪽으로 20%
// 데스크톱에서는 모두 중앙(0)으로 유지됩니다
const videoScenePositions = [
  [0, 2, 0],     // 0-5초: 중앙
  [2.5, 4.6, -10],    // 5-10초: 중앙 (수정 가능)
  [4.6, 7.6, 10],   // 10-15초: 중앙 (수정 가능)
  [7.6, 10.2, 10],
  [10.2, 16, 10],
  [16, 30.2, -10],
  [30.2, 35.1, 10],
  // 비디오 길이에 맞게 추가/수정하세요
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(-1); // -1 = 동영상
  const [coverVisible, setCoverVisible] = useState(true); // 로딩 커버
  const [ready, setReady] = useState(false); // 이미지 렌더링 허용
  const [videoPosition, setVideoPosition] = useState(0); // 비디오 현재 씬의 위치
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const lastSlideRef = useRef(-1); // 이전 슬라이드 추적 (한 장씩만 넘어가도록)
  const scrollTimeoutRef = useRef(null); // 스크롤 디바운싱
  const touchStartY = useRef(0); // 터치 시작 Y 위치
  const touchStartTime = useRef(0); // 터치 시작 시간
  const isTouching = useRef(false); // 터치 중인지 여부
  const isScrolling = useRef(false); // 프로그래밍 스크롤 중인지 여부
  const totalSlides = heroImages.length;
  const totalPages = totalSlides + 1;

  // 1) 마운트 시: 스크롤 리셋 → 비디오 재생 확인 → 커버 제거
  useEffect(() => {
    window.scrollTo(0, 0);

    const revealVideo = () => {
      // 커버를 페이드아웃하고, 이미지 렌더링 허용
      setCoverVisible(false);
      setTimeout(() => setReady(true), 400); // 커버가 사라진 후 이미지 활성화
    };

    const vid = videoRef.current;
    if (vid && vid.readyState >= 2) {
      // 이미 로드된 경우 (캐시)
      revealVideo();
    } else if (vid) {
      vid.addEventListener("playing", revealVideo, { once: true });
      // 비디오 로드 실패 시 fallback (3초)
      const fallback = setTimeout(revealVideo, 3000);
      return () => {
        vid.removeEventListener("playing", revealVideo);
        clearTimeout(fallback);
      };
    } else {
      // 비디오 ref 없을 경우 fallback
      const fallback = setTimeout(revealVideo, 500);
      return () => clearTimeout(fallback);
    }
  }, []);

  // 2) 비디오 시간 추적 및 씬별 위치 업데이트
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleTimeUpdate = () => {
      const currentTime = vid.currentTime;
      
      // 현재 시간에 맞는 씬 찾기
      const currentScene = videoScenePositions.find(
        ([start, end]) => currentTime >= start && currentTime < end
      );

      if (currentScene) {
        setVideoPosition(currentScene[2]); // 씬의 위치 값
      } else {
        // 씬이 없으면 마지막 씬의 위치 사용 또는 중앙
        const lastScene = videoScenePositions[videoScenePositions.length - 1];
        setVideoPosition(lastScene ? lastScene[2] : 0);
      }
    };

    vid.addEventListener("timeupdate", handleTimeUpdate);
    return () => vid.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  // 3) 비디오 리셋 함수를 window에 등록 (Header에서 호출 가능하도록)
  useEffect(() => {
    const resetVideo = () => {
      const vid = videoRef.current;
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {
          // 자동 재생이 차단된 경우 무시
        });
      }
    };

    // window에 함수 등록
    window.resetHeroVideo = resetVideo;

    return () => {
      // cleanup
      delete window.resetHeroVideo;
    };
  }, []);

  // 4) 모바일 터치 이벤트 처리 (스와이프 및 탭)
  useEffect(() => {
    if (!ready) return;
    const isMobile = window.innerWidth < 640;
    if (!isMobile) return;

    let touchMoveX = 0;
    let touchMoveY = 0;
    let touchStartX = 0;

    const moveToSlide = (targetIndex) => {
      if (!sectionRef.current) return;
      
      // isScrolling 체크를 제거하여 연속 스와이프 허용
      isScrolling.current = true;
      const sectionHeight = sectionRef.current.offsetHeight;
      const pageHeight = sectionHeight / totalPages;
      const targetScroll = targetIndex === -1 
        ? sectionRef.current.offsetTop 
        : sectionRef.current.offsetTop + targetIndex * pageHeight;
      
      // 빠른 전환을 위해 instant 사용
      window.scrollTo({ top: targetScroll, behavior: "auto" });
      setCurrentSlide(targetIndex === -1 ? -1 : targetIndex);
      lastSlideRef.current = targetIndex === -1 ? -1 : targetIndex;
      
      // 스크롤 완료 후 플래그 해제 (시간 단축)
      setTimeout(() => {
        isScrolling.current = false;
      }, 50); // 100ms -> 50ms로 단축
    };

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
      isTouching.current = true;
      touchMoveX = touchStartX;
      touchMoveY = touchStartY.current;
    };

    const handleTouchMove = (e) => {
      if (!isTouching.current || !sectionRef.current) return;
      
      // touchMoveX, touchMoveY를 먼저 업데이트 (중요!)
      touchMoveX = e.touches[0].clientX;
      touchMoveY = e.touches[0].clientY;
      const deltaX = touchStartX - touchMoveX;
      const deltaY = touchStartY.current - touchMoveY;
      
      // 가로 스와이프가 세로 스와이프보다 크면 가로 스와이프로 인식
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // 가로 스와이프인 경우 세로 스크롤 방지
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!isTouching.current || !sectionRef.current) {
        isTouching.current = false;
        return;
      }
      isTouching.current = false;

      const touchEndX = touchMoveX;
      const touchEndY = touchMoveY;
      const touchEndTime = Date.now();
      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY.current - touchEndY;
      const deltaTime = touchEndTime - touchStartTime.current;
      
      // 현재 인덱스 계산 - lastSlideRef를 우선 사용하여 더 정확하게
      const sectionHeight = sectionRef.current.offsetHeight;
      const pageHeight = sectionHeight / totalPages;
      const currentTop = sectionRef.current.getBoundingClientRect().top;
      const currentScroll = -currentTop;
      
      // lastSlideRef를 기본값으로 사용 (더 정확함)
      let currentIndex = lastSlideRef.current;
      
      // 스크롤 위치로도 계산하여 검증
      if (currentScroll <= 0) {
        currentIndex = -1;
      } else {
        const calculatedIndex = Math.min(
          Math.floor(currentScroll / pageHeight),
          totalSlides - 1
        );
        // lastSlideRef와 차이가 크지 않으면 lastSlideRef 사용
        if (Math.abs(calculatedIndex - lastSlideRef.current) <= 1) {
          currentIndex = lastSlideRef.current;
        } else {
          currentIndex = calculatedIndex;
        }
      }

      // 가로 스와이프 우선 판단
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
      
      // 탭 감지 (거의 움직이지 않고 빠르게 터치)
      const isTap = Math.abs(deltaY) < 10 && Math.abs(deltaX) < 10 && deltaTime < 300;
      
      // 가로 스와이프 감지
      const minSwipeDistance = 30;
      const maxSwipeTime = 500;
      const isHorizontalSwipeDetected = isHorizontalSwipe && Math.abs(deltaX) > minSwipeDistance && deltaTime < maxSwipeTime;

      if (isTap) {
        // 탭: 다음 슬라이드로 이동
        e.preventDefault();
        const targetIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : totalSlides - 1;
        if (targetIndex !== currentIndex) {
          moveToSlide(targetIndex);
        }
      } else if (isHorizontalSwipeDetected) {
        // 가로 스와이프: 방향에 따라 이동
        e.preventDefault();
        let targetIndex = currentIndex;
        
        if (deltaX > 0) {
          // 왼쪽으로 스와이프 (다음 슬라이드)
          targetIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : totalSlides - 1;
        } else {
          // 오른쪽으로 스와이프 (이전 슬라이드)
          targetIndex = currentIndex > -1 ? currentIndex - 1 : -1;
        }
        
        if (targetIndex !== currentIndex) {
          moveToSlide(targetIndex);
        }
      }
    };

    const element = sectionRef.current;
    if (element) {
      element.addEventListener("touchstart", handleTouchStart, { passive: false });
      element.addEventListener("touchmove", handleTouchMove, { passive: false });
      element.addEventListener("touchend", handleTouchEnd, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [ready, totalPages, totalSlides]);

  // 5) ready 이후에만 스크롤 리스너 등록 (모바일에서는 터치 이벤트 우선)
  useEffect(() => {
    if (!ready) return;

    const handleScroll = () => {
      if (!sectionRef.current || isTouching.current || isScrolling.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const pageHeight = sectionHeight / totalPages;
      const isMobile = window.innerWidth < 640;

      if (scrolled <= 0) {
        const newSlide = -1;
        if (newSlide !== lastSlideRef.current) {
          setCurrentSlide(newSlide);
          lastSlideRef.current = newSlide;
        }
      } else {
        let calculatedIndex = Math.min(
          Math.floor(scrolled / pageHeight),
          totalSlides - 1
        );
        
        // 데스크톱에서는 정상 작동
        if (!isMobile && calculatedIndex !== lastSlideRef.current) {
          setCurrentSlide(calculatedIndex);
          lastSlideRef.current = calculatedIndex;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [ready, totalPages, totalSlides]);

  const isVideo = currentSlide === -1;

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${totalPages * 100}vh` }}
      data-header-theme="dark"
    >
      {/* ── 고정 뷰포트 ── */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* ── 배경 동영상 ── */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            opacity: ready ? (isVideo ? 1 : 0) : 1,
            transition: ready ? "opacity 0.3s ease" : "none",
          }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover sm:object-center"
            style={{
              objectPosition:
                videoPosition === 0
                  ? "center"
                  : `${50 + videoPosition}% center`,
            }}
            autoPlay
            loop
            muted
            playsInline
            poster="/image/hero1.jpg"
          >
            <source src="/video/RAM.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── 배경 이미지 슬라이드 (ready 후에만 렌더링) ── */}
        {ready &&
          heroImages.map((src, idx) => {
            const isActive = !isVideo && currentSlide === idx;

            return (
              <div
                key={src}
                className="absolute inset-0"
                style={{
                  zIndex: 0,
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateY(0)"
                    : currentSlide < idx
                      ? "translateY(100%)"
                      : "translateY(-30%)",
                  transition: "opacity 0.3s ease, transform 0.3s ease-out",
                }}
              >
                <Image
                  src={src}
                  alt={`Hero ${idx + 1}`}
                  fill
                  className="object-cover sm:object-center"
                  style={{
                    objectPosition:
                      heroImagePositions[idx] === 0
                        ? "center"
                        : `${50 + heroImagePositions[idx]}% center`,
                  }}
                  priority={idx === 0}
                  sizes="100vw"
                />
              </div>
            );
          })}

        {/* ── 오버레이 ── */}
        <div className="absolute inset-0 z-[2] bg-black/50" />

        {/* ── 콘텐츠 ── */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm sm:text-sm md:text-base">
            Soo Art &amp; Company
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Music
            </span>{" "}
            <span
              className="text-primary italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Makes
            </span>{" "}
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Us
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed tracking-wide text-white/90 sm:text-base md:text-lg lg:text-xl">
            클래식·뮤지컬 전문 공연, 프리미엄 1:1 Voice 레슨까지
            <br className="hidden sm:block" /> 수아트앤컴퍼니와 함께 하세요.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full min-w-[150px] text-center rounded-xl border-2 border-transparent bg-primary px-6 py-3 text-base font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)] sm:px-10 sm:text-lg"
              style={{
                boxShadow: "0 4px 14px rgba(255,107,53,0.3)",
              }}
            >
              상담 신청
            </Link>
            <a
              href="#problem"
              className="w-full min-w-[150px] text-center rounded-xl border-2 border-white/30 px-5 py-3 text-base font-bold text-white backdrop-blur-sm transition-all duration-500 hover:border-none hover:bg-white hover:text-secondary hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)] sm:text-lg"
              style={{
                boxShadow: "0 4px 14px rgba(255,255,255,0.1)",
              }}
            >
              서비스 알아보기
            </a>
          </div>
        </div>

        {/* ── 슬라이드 인디케이터 (클릭으로 이동 가능) ── */}
        <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 sm:right-6 md:flex">
          {[...Array(totalPages)].map((_, idx) => {
            const slideIdx = idx - 1; // -1 = video, 0~4 = images
            const isActive = currentSlide === slideIdx;
            return (
              <button
                key={idx}
                aria-label={slideIdx === -1 ? "동영상으로 이동" : `이미지 ${slideIdx + 1}로 이동`}
                onClick={() => {
                  if (!sectionRef.current) return;
                  const sectionTop = sectionRef.current.offsetTop;
                  const pageHeight = sectionRef.current.offsetHeight / totalPages;

                  if (slideIdx === -1) {
                    // 동영상: 맨 위로
                    window.scrollTo({ top: sectionTop, behavior: "smooth" });
                  } else {
                    // 이미지: 해당 슬라이드 중앙으로
                    const target = sectionTop + (slideIdx + 0.5) * pageHeight;
                    window.scrollTo({ top: target, behavior: "smooth" });
                  }
                }}
                className={`rounded-full transition-all duration-500 cursor-pointer hover:scale-150 hover:bg-primary/70 ${
                  isActive
                    ? "h-2 w-2 bg-primary scale-125"
                    : "h-2 w-2 bg-white/30"
                }`}
              />
            );
          })}
        </div>

        {/* ── 스크롤 인디케이터 ── */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce sm:bottom-8">
          <svg
            className="h-6 w-6 text-white/60"
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
        </div>

        {/* ── 로딩 커버 (모든 레이어 위에 검정 화면, 비디오 재생 후 페이드아웃) ── */}
        <div
          className="pointer-events-none absolute inset-0 z-[999] bg-black"
          style={{
            opacity: coverVisible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>
    </section>
  );
}
