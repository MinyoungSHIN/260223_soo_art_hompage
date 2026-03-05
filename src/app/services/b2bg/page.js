"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

/* ── 수치 카드 데이터 ── */
const stats = [
  { value: "200+", label: "공연 실적" },
  { value: "50+", label: "합창단 컨설팅" },
  { value: "30+", label: "기업/정부 파트너" },
  { value: "100%", label: "고객 재계약률" },
];

/* ── 문제 섹션 (Pain Point) ── */
const painPoints = [
  {
    icon: "🎭",
    title: "공연 기획이 막막하다",
    desc: "어떤 프로그램을 구성해야 할지, 어떻게 진행해야 할지 막막한 담당자들. 전문가의 도움이 필요합니다.",
  },
  {
    icon: "😰",
    title: "합창단 실력 향상이 어렵다",
    desc: "합창단의 실력 향상과 무대 퍼포먼스 개선이 어려운 지휘자들. 전문 컨설팅이 필요합니다.",
  },
  {
    icon: "🎤",
    title: "아티스트 섭외가 어렵다",
    desc: "적합한 아티스트를 찾고 섭외하는 것이 어렵고 복잡한 경험. 원스톱 서비스가 필요합니다.",
  },
];

/* ── 욕망 섹션 (Desire) ── */
const desires = [
  {
    title: "성공적인 공연을 기획하고 싶다",
    desc: "기관·기업·지자체의 문화 공연, 초청 공연, 기념 공연에서 성공적인 무대를 만들고 싶은 마음. 전문가의 기획으로 완벽한 공연을 만듭니다.",
  },
  {
    title: "합창단 실력을 한 단계 높이고 싶다",
    desc: "합창에 안무를 접목하여 무대 퍼포먼스의 차원을 높이고 싶은 지휘자들. 전문 컨설팅으로 실력을 향상시킵니다.",
  },
  {
    title: "원스톱으로 해결하고 싶다",
    desc: "공연 기획부터 아티스트 섭외, 무대 연출까지 한 번에 해결하고 싶은 마음. 원스톱 서비스로 편리하게 진행합니다.",
  },
];

/* ── 커리큘럼 ── */
const curriculum = [
  {
    step: "01",
    title: "상담 & 니즈 파악",
    desc: "공연의 목적, 규모, 예산, 일정을 파악하고 최적의 솔루션을 제안합니다.",
  },
  {
    step: "02",
    title: "프로그램 & 제안서",
    desc: "콘셉트, 프로그램 구성, 연출 방향, 예산안이 포함된 맞춤 제안서를 제공합니다.",
  },
  {
    step: "03",
    title: "준비 & 리허설",
    desc: "캐스팅, 무대 세팅, 음향·조명 준비, 리허설까지 공연 준비를 총괄합니다.",
  },
  {
    step: "04",
    title: "공연 & 사후 관리",
    desc: "당일 공연을 완벽히 수행하고, 공연 후 결과 리포트와 미디어 자료를 제공합니다.",
  },
];

/* ── 보상 섹션 (Reward) ── */
const rewards = [
  {
    title: "성공적인 공연",
    desc: "기관·기업·지자체의 문화 공연에서 성공적인 무대를 만들어냅니다. 관객들의 만족도가 높은 공연을 제공합니다.",
  },
  {
    title: "합창단 실력 향상",
    desc: "전문 컨설팅으로 합창단의 실력과 무대 퍼포먼스를 한 단계 높입니다. 대회 수상, 정기 연주회에서 좋은 결과를 얻습니다.",
  },
  {
    title: "원스톱 편의성",
    desc: "공연 기획부터 아티스트 섭외, 무대 연출까지 한 번에 해결합니다. 복잡한 업무를 간편하게 처리합니다.",
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "어떤 규모의 공연도 가능한가요?",
    a: "네, 소규모 문화 공연부터 대형 기념 공연까지 다양한 규모의 공연을 기획하고 진행합니다. 공연 규모와 예산에 맞는 맞춤형 솔루션을 제공합니다.",
  },
  {
    q: "합창 안무 컨설팅은 어떻게 진행되나요?",
    a: "합창단 현장 방문 워크숍을 통해 단원들의 체력과 연령을 고려한 맞춤형 안무를 안출합니다. 대회 심사 기준도 반영하여 실전에 유리한 안무를 구성합니다.",
  },
  {
    q: "아티스트 섭외는 어떻게 하나요?",
    a: "공연 콘셉트에 맞는 최적의 아티스트를 추천하고, 출연 계약 및 일정 관리, 리허설 코디네이션까지 원스톱으로 제공합니다.",
  },
  {
    q: "공연 비용은 얼마인가요?",
    a: "공연 규모, 프로그램 구성, 아티스트 섭외 등에 따라 비용이 달라질 수 있습니다. 상담을 통해 자세한 예산안을 제공드립니다.",
  },
  {
    q: "어떤 기관과 협업했나요?",
    a: "경기도, 하남시, 수원시 등 지자체와 HP, 이화여대, 대한민국공군 등 다양한 기관과 협업한 실적이 있습니다. 200건 이상의 공연 실적을 보유하고 있습니다.",
  },
];

export default function B2BPage() {
  // SEO를 위한 동적 메타데이터 설정
  useEffect(() => {
    document.title = "B2B Solution | Soo Art & Company";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연, 합창 안무 컨설팅, 전문 아티스트 섭외 — 학교·정부기관·회사를 위한 전문 공연 솔루션."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "이현정 대표가 직접 무대에 서는 클래식·뮤지컬 공연, 합창 안무 컨설팅, 전문 아티스트 섭외 — 학교·정부기관·회사를 위한 전문 공연 솔루션.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full-width 비주얼 + 카피
      ═══════════════════════════════════════ */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden pt-0" data-header-theme="dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=900&fit=crop&q=80')",
          }}
        />
        {/* 고급스러운 검정색 그라데이션 오버레이 */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.7) 100%),
              radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%)
            `,
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm"
          >
            B2B Solution
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            B2B Solution
            <br />
            <span className="text-primary">전문 공연 기획 및 컨설팅</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs font-medium leading-relaxed tracking-wide text-white/90 sm:text-sm md:text-base"
          >
            기업·기관·지자체를 위한 클래식·뮤지컬 공연 기획, 합창단 안무 컨설팅 및 전문 아티스트 섭외 서비스
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="/contact"
              className="w-full rounded-xl border-2 border-transparent bg-primary px-5 py-2.5 text-xs font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
            >
              공연 문의하기
            </Link>
            <a
              href="#curriculum"
              className="w-full rounded-xl border-2 border-white/30 px-5 py-2.5 text-xs font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.1)" }}
            >
              서비스 상세 보기
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS — 핵심 수치
      ═══════════════════════════════════════ */}
      <section className="bg-background py-8 sm:py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-8 sm:gap-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-secondary/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROBLEM — 문제 제시 (Pain Point)
      ═══════════════════════════════════════ */}
      <section id="story" className="bg-background-subtle py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Your Story
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              혹시 이런 경험이 있으신가요?
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              >
                <div className="text-4xl mb-3">{point.icon}</div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-secondary">
                  {point.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-secondary/60">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DESIRE — 욕망 자극
      ═══════════════════════════════════════ */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Your Dream
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              성공적인 공연을 만들고 싶은 그 마음, <br />이제 현실이 됩니다.
            </h2>
          </motion.div>

          <div className="mt-12 space-y-6">
            {desires.map((desire, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ x: 8 }}
                className="rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 p-6 sm:p-8 border border-primary/20"
              >
                <h3 className="mb-3 text-xl font-bold tracking-tight text-secondary sm:text-2xl">
                  {desire.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
                  {desire.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 중간 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-block rounded-xl border-2 border-transparent bg-primary px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)]"
              style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
            >
              나도 성공적인 공연을 만들고 싶어요
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PLAN — 계획 (프로그램 소개)
      ═══════════════════════════════════════ */}
      <section className="bg-background-subtle py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-8 sm:px-6 lg:px-8">
          <div className="grid items-center text-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm text-center">
                How It Works
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl text-center">
                어떻게 공연을 진행하나요?
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 mx-auto max-w-3xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-left">
                  {[
                    { label: "상담", value: "공연 목적·규모 파악" },
                    { label: "제안서", value: "맞춤형 프로그램 구성" },
                    { label: "준비", value: "캐스팅·무대 세팅" },
                    { label: "리허설", value: "완벽한 공연 준비" },
                    { label: "공연", value: "성공적인 무대 완성", span: "sm:col-span-2 lg:col-span-1" },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`bg-white rounded-lg p-4 shadow-sm ${item.span || ""}`}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-secondary/60 mb-2">{item.label}</p>
                      <p className="text-base font-semibold text-secondary">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CURRICULUM — 교육 과정
      ═══════════════════════════════════════ */}
      <section id="curriculum" className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Process
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              진행 프로세스
            </h2>
            <p className="mt-1 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
              상담부터 공연까지, 단계별로 진행합니다.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {curriculum.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              >
                <span className="text-xs font-bold text-primary/60">{item.step}</span>
                <h3 className="mt-3 mb-2 text-base font-bold tracking-tight text-secondary">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-secondary/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REWARD — 보상 (무대 경험)
      ═══════════════════════════════════════ */}
      <section className="bg-background-subtle py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Your Reward
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              언제까지 막막하게만 계실건가요?
            </h2>
            <p className="mt-1 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
              이제 당신이 성공적인 공연을 만드는 주인공입니다.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {rewards.map((reward, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-2 border-transparent transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(255,107,53,0.1)]"
              >
                <h3 className="mb-3 text-lg font-bold tracking-tight text-secondary">
                  {reward.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-secondary/60">
                  {reward.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">FAQ</p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              자주 묻는 질문
            </h2>
          </motion.div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
                className="rounded-xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <h3 className="text-sm font-bold text-secondary sm:text-base">{faq.q}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-secondary/60">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — 강력한 행동 유도
      ═══════════════════════════════════════ */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-8 text-center sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            당신의 공연이 기다립니다
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 mx-auto max-w-3xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                { label: "공연 기획", value: "클래식·뮤지컬 전문 공연" },
                { label: "안무 컨설팅", value: "합창단 무대 퍼포먼스" },
                { label: "아티스트 섭외", value: "전문 아티스트 캐스팅" },
                { label: "원스톱 서비스", value: "기획부터 공연까지" },
                { label: "상담", value: "무료 상담 가능", span: "sm:col-span-2 lg:col-span-1" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 ${item.span || ""}`}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">{item.label}</p>
                  <p className="text-base font-semibold text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center"
          >
            <Link
              href="/contact"
              className="w-full rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-500 hover:bg-white/90 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.45)] sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.25)" }}
            >
              지금 바로 공연 문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
