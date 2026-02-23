"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/FullLogo.png";

const navLinks = [
  { href: "#services", label: "서비스" },
  { href: "#portfolio", label: "포트폴리오" },
  { href: "#contact", label: "문의하기" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* ── Logo ── */}
        <Link href="/" className="relative h-10 w-36 shrink-0">
          <Image
            src={logo}
            alt="Soo Art & Company"
            fill
            className={`object-contain transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-secondary" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            상담 신청
          </a>
        </nav>

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
                : scrolled
                  ? "bg-secondary"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                  ? "bg-secondary"
                  : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              mobileOpen
                ? "-translate-y-2 -rotate-45 bg-secondary"
                : scrolled
                  ? "bg-secondary"
                  : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-xl bg-primary px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            상담 신청
          </a>
        </nav>
      </div>
    </header>
  );
}
