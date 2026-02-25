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

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(-1); // -1 = 동영상
  const [coverVisible, setCoverVisible] = useState(true); // 로딩 커버
  const [ready, setReady] = useState(false); // 이미지 렌더링 허용
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
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

  // 2) ready 이후에만 스크롤 리스너 등록
  useEffect(() => {
    if (!ready) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;

      if (scrolled <= 0) {
        setCurrentSlide(-1);
      } else {
        const pageHeight = sectionHeight / totalPages;
        const slideIndex = Math.min(
          Math.floor(scrolled / pageHeight),
          totalSlides - 1
        );
        setCurrentSlide(slideIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
            transition: ready ? "opacity 1.2s ease" : "none",
          }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
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
                  transition: "opacity 1.2s ease, transform 1.2s ease-out",
                }}
              >
                <Image
                  src={src}
                  alt={`Hero ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  sizes="100vw"
                />
              </div>
            );
          })}

        {/* ── 오버레이 ── */}
        <div className="absolute inset-0 z-[2] bg-black/50" />

        {/* ── 콘텐츠 ── */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm md:text-base">
            Soo Art &amp; Company
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
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

          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed tracking-wide text-white/90 md:text-xl">
            클래식·뮤지컬 전문 공연, 프리미엄 1:1 Voice 레슨까지
            <br /> 수아트앤컴퍼니와 함께 하세요.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="min-w-[150px] text-center rounded-xl border-2 border-transparent bg-primary px-10 py-3 text-lg font-bold text-white transition-all duration-500 hover:-translate-y-1"
              style={{
                boxShadow: "0 4px 14px rgba(255,107,53,0.3)",
                transition: "all 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(255,107,53,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 14px rgba(255,107,53,0.3)";
              }}
            >
              상담 신청
            </Link>
            <a
              href="#problem"
              className="min-w-[150px] text-center rounded-xl border-2 border-white/30 px-5 py-3 text-lg font-bold text-white backdrop-blur-sm transition-all duration-500 hover:border-none hover:bg-white hover:text-secondary hover:-translate-y-1"
              style={{
                boxShadow: "0 4px 14px rgba(255,255,255,0.1)",
                transition: "all 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(200,200,200,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 14px rgba(255,255,255,0.1)";
              }}
            >
              서비스 알아보기
            </a>
          </div>
        </div>

        {/* ── 슬라이드 인디케이터 (클릭으로 이동 가능) ── */}
        <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2">
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
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
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
