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
  const swipeCooldownRef = useRef(false); // 스와이프 쿨다운 (한 번에 하나씩만)
  const exitAttemptRef = useRef(0); // 마지막 슬라이드에서 다음 섹션 탈출 시도 횟수
  const topEntryBlockRef = useRef(false); // 상단 경계에서 한 번 멈춘 적 있는지
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

  // 4) 모바일 터치 이벤트 처리 — 완전 재설계
  //    · HeroSection 내 touchmove 전면 preventDefault → 브라우저 세로 스크롤 원천 차단
  //    · 방향 기반 ±1 이동만 허용 (스와이프 거리 무관)
  //    · 마지막 슬라이드에서 3회 이상 아래 스와이프 시에만 다음 섹션 허용
  useEffect(() => {
    if (!ready) return;
    const isMobile = window.innerWidth < 640;
    if (!isMobile) return;

    let touchMoveX = 0;
    let touchMoveY = 0;
    let touchStartX = 0;

    // ── 사용자 정의 부드러운 스크롤 (duration ms 동안 easeInOutCubic) ──
    const smoothScrollTo = (targetY, duration = 800) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      if (Math.abs(diff) < 1) return; // 거의 같은 위치면 스킵
      const startTime = performance.now();

      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // behavior: "instant"로 CSS scroll-behavior: smooth 충돌 방지
        window.scrollTo({
          top: startY + diff * easeInOutCubic(progress),
          behavior: "instant",
        });
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // ── 슬라이드 이동 (항상 ±1만) ──
    const SCROLL_DURATION = 800; // 슬라이드 전환 애니메이션 시간(ms) — 묵직하고 우아하게
    const COOLDOWN = SCROLL_DURATION + 100; // 쿨다운: 애니메이션 + 100ms 여유 = 900ms

    const moveToSlide = (direction) => {
      // direction: +1(다음) 또는 -1(이전)
      if (!sectionRef.current) return;
      if (swipeCooldownRef.current) return; // 쿨다운 중이면 완전 무시

      const currentIndex = lastSlideRef.current;
      const finalTargetIndex = currentIndex + direction;

      // ── 상단 탈출 방지: 비디오(-1)에서 위로 스와이프 시 절대 탈출 불가 ──
      if (finalTargetIndex < -1) {
        // -1 이하로 절대 못 감 → 쿨다운 걸고 히어로 섹션 상단으로 스냅
        swipeCooldownRef.current = true;
        isScrolling.current = true;
        lastSlideRef.current = -1;
        setCurrentSlide(-1);
        smoothScrollTo(sectionRef.current.offsetTop, SCROLL_DURATION);
        setTimeout(() => {
          isScrolling.current = false;
          swipeCooldownRef.current = false;
        }, COOLDOWN);
        return;
      }

      // ── 하단 탈출 로직: 마지막 슬라이드에서 2회 스와이프 후 넘어감 ──
      if (finalTargetIndex > totalSlides - 1) {
        exitAttemptRef.current += 1;
        if (exitAttemptRef.current < 2) {
          return; // 2회 미만이면 꿈쩍도 안 함
        }
        // 2회 이상 → 다음 섹션으로 부드럽게 넘어감
        swipeCooldownRef.current = true;
        isScrolling.current = true;
        const sectionBottom =
          sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
        smoothScrollTo(sectionBottom, SCROLL_DURATION);
        setTimeout(() => {
          isScrolling.current = false;
          swipeCooldownRef.current = false;
        }, COOLDOWN);
        return;
      }

      // 마지막 슬라이드가 아닌 곳에서는 탈출 카운터 리셋
      exitAttemptRef.current = 0;

      // 쿨다운 + isScrolling 즉시 ON
      swipeCooldownRef.current = true;
      isScrolling.current = true;

      // 상태 즉시 업데이트 (scrollTo 전 — handleScroll 오염 방지)
      lastSlideRef.current = finalTargetIndex;
      setCurrentSlide(finalTargetIndex);

      const sectionHeight = sectionRef.current.offsetHeight;
      const pageHeight = sectionHeight / totalPages;

      // ★ handleScroll의 인덱스 계산식과 정확히 일치하는 스크롤 목표 계산
      let targetScroll;
      if (finalTargetIndex === -1) {
        targetScroll = sectionRef.current.offsetTop; // scrolled = 0 → video
      } else {
        // 이미지 i의 중앙: 0.2*pH + i*pH + 0.5*pH
        targetScroll =
          sectionRef.current.offsetTop +
          pageHeight * 0.2 +
          finalTargetIndex * pageHeight +
          pageHeight * 0.5;
      }

      // 부드러운 스크롤 이동 (800ms easeInOutCubic — 묵직하고 우아하게)
      smoothScrollTo(targetScroll, SCROLL_DURATION);

      // 쿨다운: 900ms (애니메이션 800ms + 100ms 여유)
      setTimeout(() => {
        isScrolling.current = false;
        swipeCooldownRef.current = false;
      }, COOLDOWN);
    };

    // ── touchstart ──
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
      isTouching.current = true;
      touchMoveX = touchStartX;
      touchMoveY = touchStartY.current;
    };

    // ── touchmove — HeroSection 내 브라우저 기본 스크롤 전면 차단 ──
    const handleTouchMove = (e) => {
      if (!isTouching.current || !sectionRef.current) return;

      touchMoveX = e.touches[0].clientX;
      touchMoveY = e.touches[0].clientY;

      // ★ 히어로 섹션 내에서는 무조건 브라우저 스크롤 차단
      //    (세로든 가로든 관계없이, 이미지가 다 넘어갈 때까지 화면이 안 굴러감)
      e.preventDefault();
    };

    // ── touchend — 방향 감지 후 ±1 이동 ──
    const handleTouchEnd = (e) => {
      if (!isTouching.current || !sectionRef.current) {
        isTouching.current = false;
        return;
      }

      // 쿨다운 중 → 모든 입력 무시
      if (swipeCooldownRef.current) {
        isTouching.current = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      isTouching.current = false;

      const deltaX = touchStartX - touchMoveX;
      const deltaY = touchStartY.current - touchMoveY;
      const deltaTime = Date.now() - touchStartTime.current;

      // lastSlideRef.current만 사용 (스크롤 위치 계산 없음)
      const THRESHOLD = 30; // 최소 이동 거리(px)

      // 탭 감지 (움직임 10px 미만 + 300ms 미만)
      const isTap =
        Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && deltaTime < 300;

      // 스와이프 감지 — 가로 또는 세로 중 큰 쪽으로 판단
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      const isSwipe = absX >= THRESHOLD || absY >= THRESHOLD;

      e.preventDefault();
      e.stopPropagation();

      if (isTap) {
        // 탭 → 다음 슬라이드
        moveToSlide(+1);
      } else if (isSwipe) {
        // 주 방향 결정 (가로 vs 세로)
        if (absX >= absY) {
          // 가로 스와이프
          moveToSlide(deltaX > 0 ? +1 : -1);
        } else {
          // 세로 스와이프 — 위로 밀기(deltaY > 0) = 다음, 아래로 밀기 = 이전
          moveToSlide(deltaY > 0 ? +1 : -1);
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

  // 5) 스크롤 리스너 — 슬라이드 인덱스 업데이트 + 모바일 하단 경계 방어
  useEffect(() => {
    if (!ready) return;

    const isMobile = window.innerWidth < 640;
    let lastScrollY = window.scrollY; // 스크롤 방향 감지용

    // ── 부드러운 스크롤 (handleScroll 내에서도 사용) ──
    const SCROLL_DUR = 800;
    const COOL = SCROLL_DUR + 100; // 900ms

    const smoothScroll = (targetY, duration = SCROLL_DUR) => {
      const startY = window.scrollY;
      const diff = targetY - startY;
      if (Math.abs(diff) < 1) return;
      const startTime = performance.now();
      const ease = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo({ top: startY + diff * ease(progress), behavior: "instant" });
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const handleScroll = () => {
      // ★ isScrolling 또는 쿨다운 중이면 인덱스 업데이트 완전 건너뛰기
      if (isScrolling.current) return;
      if (swipeCooldownRef.current) return;
      if (isTouching.current) return;
      if (!sectionRef.current) return;

      const currentScrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // ── 모바일: 아래에서 위로 스크롤 시 히어로 섹션 경계 처리 ──
      if (isMobile) {
        const isScrollingUp = currentScrollY < lastScrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        // 아래로 스크롤하면 차단 상태 리셋 (다시 올라올 때 한 번 멈추게)
        if (isScrollingDown && currentScrollY >= sectionBottom) {
          topEntryBlockRef.current = false;
        }

        // 위로 스크롤 시 히어로 하단 경계 도달
        if (isScrollingUp && currentScrollY < sectionBottom && lastScrollY >= sectionBottom) {
          if (!topEntryBlockRef.current) {
            // 첫 번째: ProblemSection 상단에서 멈춤 (히어로 섹션 경계에서 정지)
            topEntryBlockRef.current = true;
            window.scrollTo({ top: sectionBottom, behavior: "instant" });
            lastScrollY = sectionBottom;
            return;
          }
          // 두 번째: 히어로 섹션으로 진입 허용 — 마지막 슬라이드(image5)로 스냅
          const lastImageIndex = totalSlides - 1;
          lastSlideRef.current = lastImageIndex;
          setCurrentSlide(lastImageIndex);

          const pageHeight = sectionHeight / totalPages;
          const targetScroll =
            sectionTop +
            pageHeight * 0.2 +
            lastImageIndex * pageHeight +
            pageHeight * 0.5;

          swipeCooldownRef.current = true;
          isScrolling.current = true;
          smoothScroll(targetScroll, SCROLL_DUR);
          setTimeout(() => {
            isScrolling.current = false;
            swipeCooldownRef.current = false;
          }, COOL);
          lastScrollY = targetScroll;
          return;
        }

        // 히어로 섹션 내부에서 위쪽으로 벗어나는 관성 스크롤 방지
        if (isScrollingUp && currentScrollY < sectionTop) {
          window.scrollTo({ top: sectionTop, behavior: "instant" });
          lastScrollY = sectionTop;
          lastSlideRef.current = -1;
          setCurrentSlide(-1);
          return;
        }
      }

      lastScrollY = currentScrollY;

      // ── 슬라이드 인덱스 업데이트 ──
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const pageHeight = sectionHeight / totalPages;

      let newSlide;
      if (scrolled <= pageHeight * 0.2) {
        newSlide = -1;
      } else {
        const imageScroll = scrolled - pageHeight * 0.2;
        const calculatedIndex = Math.min(
          Math.floor(imageScroll / pageHeight),
          totalSlides - 1
        );
        newSlide = Math.max(0, calculatedIndex);
      }

      if (newSlide !== lastSlideRef.current) {
        setCurrentSlide(newSlide);
        lastSlideRef.current = newSlide;
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

        {/* ── 모바일 슬라이드 인디케이터 (하단 중앙 가로 동그라미) ── */}
        <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:hidden">
          {[...Array(totalPages)].map((_, idx) => {
            const slideIdx = idx - 1; // -1 = video, 0~4 = images
            const isActive = currentSlide === slideIdx;
            return (
              <div
                key={idx}
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-2.5 w-2.5 bg-primary scale-125"
                    : "h-2 w-2 bg-white/40"
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
