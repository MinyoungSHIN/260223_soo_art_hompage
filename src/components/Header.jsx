"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/FullLogo_NoBuffer.webp";

const navLinks = [
  { href: "/about", label: "회사소개" },
  { href: "/services/choir", label: "수아트콰이어" },
  { href: "/services/lesson", label: "프리미엄레슨" },
  { href: "/services/b2bg", label: "B2BG 비즈니스" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // 다크 섹션(contact, footer) 감지 — 헤더 영역과 겹치면 흰색 배경 적용
    const darkSections = document.querySelectorAll("[data-header-theme='dark']");
    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyDark = entries.some((e) => e.isIntersecting);
        setOnDarkSection(isAnyDark);
      },
      { rootMargin: "-0px 0px -95% 0px" } // 뷰포트 상단 5%만 감지
    );
    darkSections.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* ── 왼쪽: 로고 + 상호명 ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-10 w-10">
            <Image
              src={logo}
              alt="Soo Art & Company"
              fill
              className={`object-contain transition-all duration-300 ${
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
            className={`text-lg font-bold tracking-wider transition-colors duration-300 ${
              onDarkSection ? "text-white" : scrolled ? "text-secondary" : "text-white"
            }`}
          >
            수아트앤컴퍼니
          </span>
        </Link>

        {/* ── 가운데: Desktop Nav ── */}
        <nav className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors duration-300 hover:text-primary ${
                onDarkSection ? "text-white" : scrolled ? "text-secondary" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── 오른쪽: CTA + 모바일 메뉴 ── */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-primary px-5 py-1.5 text-base font-bold text-white transition-colors hover:bg-primary-dark md:inline-block"
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
              className={`block h-0.5 w-6 transition-all duration-300 ${
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
              className={`block h-0.5 w-6 transition-all duration-300 ${
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
              className={`block h-0.5 w-6 transition-all duration-300 ${
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
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-secondary transition-colors hover:bg-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-xl bg-primary px-5 py-3 text-center text-base font-bold text-white transition-colors hover:bg-primary-dark"
          >
            상담 신청
          </Link>
        </nav>
      </div>
    </header>
  );
}
