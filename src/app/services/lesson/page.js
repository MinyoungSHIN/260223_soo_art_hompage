"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

/* ── 수치 카드 데이터 ── */
const stats = [
  { value: "98%", label: "입시 합격률" },
  { value: "15+", label: "년 지도 경력" },
  { value: "1:1", label: "맞춤 커리큘럼" },
  { value: "300+", label: "누적 수강생" },
];

/* ── 문제 섹션 (Pain Point) ── */
const painPoints = [
  {
    icon: "🎯",
    title: "입시 준비가 막막하다",
    desc: "어떤 곡을 선택해야 할지, 어떻게 준비해야 할지 막막한 입시생과 학부모님들. 체계적인 가이드가 필요합니다.",
  },
  {
    icon: "😰",
    title: "발성 기초가 부족하다",
    desc: "기초 발성부터 제대로 배우지 못해 실력 향상에 한계를 느끼는 분들. 올바른 발성법을 배워야 합니다.",
  },
  {
    icon: "🎤",
    title: "혼자서는 실력 향상이 어렵다",
    desc: "스스로 연습하지만 실력이 늘지 않고, 무엇이 문제인지 모르겠던 경험. 전문가의 피드백이 필요합니다.",
  },
];

/* ── 욕망 섹션 (Desire) ── */
const desires = [
  {
    title: "원하는 학교에 합격하고 싶다",
    desc: "리틀엔젤스, 예중·예고, 음대 입시에서 합격이라는 결과를 얻고 싶은 마음. 체계적인 준비로 목표를 달성합니다.",
  },
  {
    title: "제대로 된 발성을 배우고 싶다",
    desc: "기초부터 탄탄하게 쌓아가는 발성 기법. 안전하고 효율적인 방법으로 목소리를 개발합니다.",
  },
  {
    title: "자신 있게 노래하고 싶다",
    desc: "무대에서 떨리지 않고, 자신의 목소리에 자신감을 갖고 싶은 마음. 전문가의 지도로 실력을 키웁니다.",
  },
];

/* ── 커리큘럼 ── */
const curriculum = [
  {
    step: "01",
    title: "진단 & 목표 설정",
    desc: "학생의 현재 음역·음색·호흡 능력을 정밀 진단하고, 목표에 맞는 맞춤형 커리큘럼을 설계합니다.",
  },
  {
    step: "02",
    title: "기초 발성 & 호흡",
    desc: "복식호흡부터 올바른 발성법까지, 음악의 기초 체력을 쌓습니다. 안전하고 효율적인 방법으로 지도합니다.",
  },
  {
    step: "03",
    title: "레퍼토리 구축 & 해석",
    desc: "입시곡 선정 및 해석, 좋아하는 곡으로 배우기 등 목표에 맞는 레퍼토리를 구축하고 음악적 해석을 심화합니다.",
  },
  {
    step: "04",
    title: "실전 시뮬레이션",
    desc: "모의 실기시험, 무대 매너 연습, 심리 컨디션 관리까지. 실제 상황에 대비한 실전 트레이닝을 제공합니다.",
  },
];

/* ── 보상 섹션 (Reward) ── */
const rewards = [
  {
    title: "입시 합격",
    desc: "원하는 학교에 합격하는 성취감. 리틀엔젤스, 예중·예고, 음대 입시에서 목표를 달성합니다.",
  },
  {
    title: "실력 향상",
    desc: "제대로 된 발성법을 배워 실력이 눈에 띄게 향상됩니다. 자신의 목소리에 자신감을 갖게 됩니다.",
  },
  {
    title: "평생의 자산",
    desc: "올바른 발성법과 음악적 소양은 평생의 자산이 됩니다. 취미든 전문이든 음악과 함께하는 인생을 만듭니다.",
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "입시 준비는 언제부터 시작해야 하나요?",
    a: "입시 목표 학교와 전공에 따라 다르지만, 보통 1~2년 전부터 체계적인 준비를 시작하는 것을 권장합니다. 상담을 통해 학생의 현재 실력과 목표를 파악한 후 맞춤형 커리큘럼을 제안드립니다.",
  },
  {
    q: "초보자도 수강할 수 있나요?",
    a: "네, 물론입니다! 기초 발성부터 차근차근 지도하며, 초보자도 안심하고 시작할 수 있습니다. 학생의 수준에 맞춰 맞춤형 커리큘럼을 제공합니다.",
  },
  {
    q: "레슨 시간과 장소는 어떻게 되나요?",
    a: "1:1 맞춤 레슨으로 학생과 선생님의 일정에 맞춰 조율합니다. 자세한 일정과 위치는 상담을 통해 안내드립니다.",
  },
  {
    q: "레슨비는 얼마인가요?",
    a: "목표와 수준에 따라 레슨비가 달라질 수 있습니다. 상담을 통해 자세한 안내를 받으실 수 있습니다.",
  },
  {
    q: "취미 레슨도 가능한가요?",
    a: "네, 물론입니다! 입시나 전문 목적이 아닌 취미 레슨도 환영합니다. 부담 없이 즐기면서도 제대로 된 발성을 배울 수 있습니다.",
  },
];

export default function LessonPage() {
  // SEO를 위한 동적 메타데이터 설정
  useEffect(() => {
    document.title = "프리미엄 1:1 보이스 레슨 | Soo Art & Company";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "리틀엔젤스 입학, 예중·예고·음대 입시, 일반인 취미레슨까지. 합격을 넘어 예술가로 성장하는 시간."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "리틀엔젤스 입학, 예중·예고·음대 입시, 일반인 취미레슨까지. 합격을 넘어 예술가로 성장하는 시간.";
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
              "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=900&fit=crop&q=80')",
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
            Premium Voice Lesson
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            프리미엄 1:1 레슨
            <br />
            <span className="text-primary">맞춤형 보이스 트레이닝</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-xs font-medium leading-relaxed tracking-wide text-white/90 sm:text-sm md:text-base"
          >
            입시·전문·취미 목표에 맞는 1:1 맞춤 레슨. 이현정 대표의 전문 지도로 목표를 달성합니다.
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
              레슨 상담 신청
            </Link>
            <a
              href="#curriculum"
              className="w-full rounded-xl border-2 border-white/30 px-5 py-2.5 text-xs font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)] sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              style={{ boxShadow: "0 4px 14px rgba(255,255,255,0.1)" }}
            >
              커리큘럼 보기
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
              목표를 달성하고 싶은 그 마음, <br />이제 현실이 됩니다.
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
              나도 목표를 달성하고 싶어요
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
                어떻게 목표를 달성하나요?
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
                    { label: "상담", value: "목표 및 현황 파악" },
                    { label: "진단", value: "음역·음색·호흡 분석" },
                    { label: "커리큘럼", value: "맞춤형 학습 계획" },
                    { label: "레슨", value: "1:1 전문 지도" },
                    { label: "피드백", value: "지속적인 모니터링", span: "sm:col-span-2 lg:col-span-1" },
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
              Curriculum
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              체계적인 교육 과정
            </h2>
            <p className="mt-1 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
              기초부터 실전까지, 단계별로 배워갑니다.
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
              이제 당신이 목표를 달성하는 주인공입니다.
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
            당신의 목표가 기다립니다
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
                { label: "입시 레슨", value: "리틀엔젤스·예중·예고·음대" },
                { label: "전문 레슨", value: "성가대·아티스트 준비" },
                { label: "취미 레슨", value: "개인 맞춤형 커리큘럼" },
                { label: "레슨 시간", value: "1:1 맞춤 일정 조율" },
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
              지금 바로 레슨 시작하기
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
