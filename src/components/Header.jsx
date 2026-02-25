"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/FullLogo_NoBuffer.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Service",
    subLinks: [
      { href: "/services/choir", label: "수아트 콰이어" },
      { href: "/services/lesson", label: "프리미엄 레슨" },
      { href: "/services/b2bg", label: "B2BG 비즈니스" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const darkSections = document.querySelectorAll("[data-header-theme='dark']");
    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyDark = entries.some((e) => e.isIntersecting);
        setOnDarkSection(isAnyDark);
      },
      { rootMargin: "-0px 0px -95% 0px" }
    );
    darkSections.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  /* hover 진입 시 열기 (타이머 취소) */
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServiceOpen(true);
  };

  /* hover 이탈 시 약간의 딜레이 후 닫기 */
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServiceOpen(false), 180);
  };

  const textColor = onDarkSection
    ? "text-white"
    : scrolled
      ? "text-secondary"
      : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        onDarkSection
          ? "bg-white/5 backdrop-blur-3xl border-b border-white/10"
          : scrolled
            ? "bg-white/20 backdrop-blur-3xl border-b border-white/20"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* ── 왼쪽: 로고 + 상호명 ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-10 w-10">
            <Image
              src={logo}
              alt="Soo Art & Company"
              fill
              className={`object-contain transition-all duration-500 ${
                onDarkSection
                  ? "brightness-0 invert"
                  : scrolled
                    ? "mix-blend-multiply"
                    : "brightness-0 invert"
              }`}
              priority
            />
          </div>
          <span
            className={`text-lg font-bold tracking-wider transition-colors duration-500 ${textColor}`}
          >
            수아트앤컴퍼니
          </span>
        </Link>

        {/* ── 가운데: Desktop Nav ── */}
        <nav className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) =>
            link.subLinks ? (
              /* ── Service 드롭다운 (hover) ── */
              <div
                key={link.label}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-base font-medium transition-colors duration-500 hover:text-primary ${textColor}`}
                >
                  {link.label}
                </button>

                {/* ── 드롭다운 패널 (글라스모피즘 + 순차 애니메이션) ── */}
                <div
                  className={`absolute -left-4 top-full pt-3 transition-all duration-500 ${
                    serviceOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-2"
                  }`}
                >
                  <div
                    className={`w-52 overflow-hidden rounded-xl border py-1.5 backdrop-blur-2xl transition-colors duration-500 ${
                      scrolled && !onDarkSection
                        ? "border-black/8 bg-white/70"
                        : "border-white/15 bg-black/40"
                    }`}
                  >
                    {link.subLinks.map((sub, idx) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setServiceOpen(false)}
                        className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:text-primary ${
                          scrolled && !onDarkSection
                            ? "text-secondary/80 hover:bg-black/5"
                            : "text-white/80 hover:bg-white/10"
                        }`}
                        style={{
                          transitionDelay: serviceOpen ? `${idx * 60}ms` : "0ms",
                          opacity: serviceOpen ? 1 : 0,
                          transform: serviceOpen
                            ? "translateY(0)"
                            : "translateY(-8px)",
                          transition: `opacity 250ms ${idx * 60}ms, transform 250ms ${idx * 60}ms, background-color 200ms, color 200ms`,
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ── 일반 링크 ── */
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-500 hover:text-primary ${textColor}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── 오른쪽: CTA + 모바일 메뉴 ── */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-primary px-5 py-2 text-base font-bold text-white transition-all duration-500 hover:-translate-y-0.5 md:inline-block"
            style={{ boxShadow: "0 2px 10px rgba(255,107,53,0.25)" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,53,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 10px rgba(255,107,53,0.25)"; }}
          >
            상담 신청
          </Link>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="메뉴 열기"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-500 ${
                mobileOpen
                  ? "translate-y-2 rotate-45 bg-secondary"
                  : onDarkSection
                    ? "bg-white"
                    : scrolled
                      ? "bg-secondary"
                      : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-500 ${
                mobileOpen
                  ? "opacity-0"
                  : onDarkSection
                    ? "bg-white"
                    : scrolled
                      ? "bg-secondary"
                      : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-500 ${
                mobileOpen
                  ? "-translate-y-2 -rotate-45 bg-secondary"
                  : onDarkSection
                    ? "bg-white"
                    : scrolled
                      ? "bg-secondary"
                      : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`overflow-hidden bg-white transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) =>
            link.subLinks ? (
              /* ── Mobile Service 아코디언 ── */
              <div key={link.label}>
                <button
                  onClick={() => setMobileServiceOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-secondary transition-colors hover:bg-accent"
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${mobileServiceOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServiceOpen && (
                  <div className="ml-4 border-l border-gray-200 py-1">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServiceOpen(false);
                        }}
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-accent hover:text-primary"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-secondary transition-colors hover:bg-accent"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-xl bg-primary px-5 py-3 text-center text-base font-bold text-white shadow-md transition-all hover:shadow-lg"
          >
            상담 신청
          </Link>
        </nav>
      </div>
    </header>
  );
}
