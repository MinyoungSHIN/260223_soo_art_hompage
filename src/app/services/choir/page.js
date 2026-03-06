"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Mic, Calendar, Users } from "lucide-react";

/* ── 수치 카드 데이터 ── */
const stats = [
  { value: "30~40세", label: "타겟 연령대" },
  { value: "하남", label: "활동 지역" },
  { value: "금요일", label: "연습 시간" },
  { value: "연 1회", label: "정기연주회" },
];

/* ── 문제 섹션 (Pain Point) ── */
const painPoints = [
  {
    icon: "🎭",
    title: "어렸을 때 이루지 못한 꿈",
    desc: "학창시절 노래하고 싶었던 마음, 무대에 서고 싶었던 꿈. 하지만 시간이 흘러 그 꿈은 미뤄졌습니다.",
  },
  {
    icon: "😔",
    title: "이제는 늦었다는 생각",
    desc: "나이가 들었다고, 실력이 없다고 포기했던 순간들. 하지만 진짜 늦은 건 없습니다.",
  },
  {
    icon: "🎤",
    title: "혼자서는 어려운 도전",
    desc: "무대에 서고 싶지만 혼자서는 막막하고, 어디서 시작해야 할지 모르겠던 경험.",
  },
];

/* ── 욕망 섹션 (Desire) ── */
const desires = [
  {
    title: "관객 앞에서 노래하고 싶다",
    desc: "수백 명의 관객 앞에서 당신의 목소리를 들려주는 그 순간. 떨리는 손, 뛰는 심장, 그리고 환호하는 관객들.",
  },
  {
    title: "내 인생의 특별한 무대",
    desc: "일상의 루틴을 벗어나, 나만의 무대를 만들어가는 시간. 평생 기억에 남을 순간을 만들어갑니다.",
  },
  {
    title: "함께 만드는 아름다운 화음",
    desc: "혼자가 아닌, 함께 만들어가는 합창의 아름다움. 서로의 목소리가 어우러져 완성되는 특별한 경험.",
  },
];

/* ── 커리큘럼 ── */
const curriculum = [
  {
    step: "01",
    title: "기초 발성 & 호흡",
    desc: "복식호흡부터 올바른 발성법까지, 음악의 기초 체력을 쌓습니다.",
  },
  {
    step: "02",
    title: "보컬 & 합창 트레이닝",
    desc: "파트별 연습과 전체 합창을 병행하며, 여러 성부가 어우러지는 화음을 완성합니다.",
  },
  {
    step: "03",
    title: "안무 & 무대 퍼포먼스",
    desc: "독보적인 합창 안무 노하우로 노래에 움직임을 더해 입체적인 무대를 만듭니다.",
  },
  {
    step: "04",
    title: "실전 무대 경험",
    desc: "정기 연주, 외부 초청 행사 등 진짜 관객 앞에 서는 무대 경험을 제공합니다.",
  },
];

/* ── 보상 섹션 (Reward) ── */
const rewards = [
  {
    icon: Mic,
    title: "정기 연주 기회",
    desc: "정기 연주회에서 당신의 무대를 선보입니다. 가족, 친구, 동료들이 함께하는 특별한 순간.",
  },
  {
    icon: Calendar,
    title: "보컬 트레이닝 기회",
    desc: "고음이 두렵지 않게! 발성부터 호흡, 음정까지 전문가의 지도로 어떤 노래든 자신있게 부릅니다.",
  },
  {
    icon: Users,
    title: "전문가급 공연 사진과 영상 제공",
    desc: "같은 꿈을 가진 30-40대 동료들과 함께 성장하고, 평생의 추억을 만들어갑니다.",
  },
];

/* ── FAQ ── */
const faqs = [
  {
    q: "음악을 전혀 모르는 초보자도 참여할 수 있나요?",
    a: "네, 물론입니다! 음악을 사랑하는 마음만 있으면 누구나 환영합니다. 기초 발성부터 지도하며, 초보자도 무대에 설 수 있도록 체계적으로 교육합니다.",
  },
  {
    q: "연습 일정과 장소는 어떻게 되나요?",
    a: "하남 지역 연습실에서 주 1회, 매주 금요일 저녁 7시부터 9시까지 정기 연습이 진행됩니다. 자세한 일정과 위치는 입단 시 안내드립니다.",
  },
  {
    q: "30-40세만 참여할 수 있나요?",
    a: "수아트 콰이어 in 하남은 30-40세를 주 타겟으로 하지만, 무대에 서고 싶은 마음이 있으시다면 문의해주세요. 음악에 대한 열정이 가장 중요합니다.",
  },
  {
    q: "단원비는 얼마인가요?",
    a: "월 단원비와 연주회 참가비가 별도로 있습니다. 상담을 통해 자세한 안내를 받으실 수 있습니다.",
  },
  {
    q: "정기 연주회는 언제 하나요?",
    a: "연 1회 정기 연주회가 있으며, 그 외에도 지역 축제나 초청 공연 등 상시 공연 기회가 주어집니다.",
  },
];

export default function ChoirPage() {
  // SEO를 위한 동적 메타데이터 설정
  useEffect(() => {
    document.title = "수아트 콰이어 in 하남 | 무대에 서고 싶은 당신을 위한 합창단";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "어렸을 때 이루지 못한 무대의 꿈, 이제 수아트 콰이어와 함께 이루세요. 하남 지역 30-40대를 위한 전문 합창단. 주 1회 금요일 저녁 연습, 정기 연주회 및 상시 공연 기회."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "어렸을 때 이루지 못한 무대의 꿈, 이제 수아트 콰이어와 함께 이루세요. 하남 지역 30-40대를 위한 전문 합창단. 주 1회 금요일 저녁 연습, 정기 연주회 및 상시 공연 기회.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full-width 비주얼 + 카피
      ═══════════════════════════════════════ */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden pt-0" data-header-theme="dark">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/choir_hero.mp4" type="video/mp4" />
        </video>
        {/* 고급스러운 검정색 그라데이션 오버레이 */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.9) 100%),
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
            SOO ART Choir
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            수아트 콰이어 in <span className="italic">하남</span>
            <br />
            <span className="text-primary">1기 단원 모집 중!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed tracking-wide text-white/90 sm:text-base"
          >
            하남 지역 30~40대 일반인을 위한 전문 합창단입니다. 
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="/contact"
              className="w-full rounded-xl border-2 border-transparent bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,107,53,0.5)] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
              style={{ boxShadow: "0 4px 14px rgba(255,107,53,0.3)" }}
            >
              단원 신청하기
            </Link>
            <a
              href="#curriculum"
              className="w-full rounded-xl border-2 border-white/30 px-5 py-2.5 text-sm font-bold text-white transition-all duration-500 hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:[box-shadow:0_12px_32px_rgba(255,255,255,0.2)] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
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
                <h3 className="mb-2 text-lg font-bold tracking-tight text-secondary sm:text-xl">
                  {point.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-secondary/60 sm:text-base">
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
              무대에 서고 싶었던 그 꿈, <br />이제 현실이 됩니다.
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
                className="rounded-xl bg-gradient-to-r from-primary/3 to-primary/8 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              >
                <h3 className="mb-3 text-xl font-bold tracking-tight text-primary sm:text-2xl">
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
              바로 무대에 서기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CURRICULUM — 교육 과정
      ═══════════════════════════════════════ */}
      <section className="bg-background-subtle py-16 sm:py-20 lg:py-24" id="curriculum">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl"
          >
            <div className="text-center mb-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                Curriculum
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
                교육 과정
              </h2>
              <p className="mt-1 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
                기초부터 무대까지, 단계별로 배워갑니다.
              </p>
            </div>
            <div className="grid items-stretch gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-full min-h-[400px] overflow-hidden rounded-2xl bg-black"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                  style={{ 
                    transform: 'scale(1.5)', 
                    transformOrigin: 'center',
                    objectPosition: 'center center'
                  }}
                >
                  <source src="/video/choir3.mp4" type="video/mp4" />
                </video>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 h-full"
              >
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
                  <h3 className="mt-3 mb-2 text-base font-bold tracking-tight text-secondary sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-secondary/60 sm:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REWARD — 보상
      ═══════════════════════════════════════ */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl"
          >
            <div className="text-center mb-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                Reward
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              이제 당신이 무대의 주인공입니다.
              </h2>
              <p className="mt-1 text-sm font-medium leading-relaxed text-secondary/70 sm:text-base">
              언제까지 관객석에만 계실건가요?
              </p>
            </div>
            <div className="grid items-stretch gap-12 lg:grid-cols-2">
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 order-2 lg:order-1 h-full">
                {rewards.map((reward, idx) => {
                  const Icon = reward.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-2 border-transparent transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(255,107,53,0.1)] h-full"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="text-primary shrink-0" size={28} />
                        <h3 className="text-lg font-bold tracking-tight text-secondary">
                          {reward.title}
                        </h3>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-secondary/60">
                        {reward.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-full min-h-[400px] overflow-hidden rounded-2xl order-1 lg:order-2"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/video/choir2.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </motion.div>
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
                <p className="mt-2 text-sm font-medium leading-relaxed text-secondary/60 sm:text-base">
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
            당신의 무대가 기다립니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 mx-auto max-w-2xl text-sm font-medium leading-relaxed text-white/90 sm:text-base"
          >
            지금 바로 시작하면 11월 정기 연주회에서 당신의 목소리를 들려줄 수 있습니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 mx-auto max-w-3xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              {[
                { label: "대상", value: "30~40대 일반인" },
                { label: "모집 기간", value: "3/16(월) ~ 4/17(금)" },
                { label: "오디션", value: "4/24(금) 19:00" },
                { label: "연습 기간", value: "5/1(금) ~ 10/30(금)" },
                { label: "정기 공연", value: "11월 중" },
                { label: "장소", value: "하남시 미사역 인근 연습실", span: "sm:col-span-2 lg:col-span-1" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center ${item.span || ""}`}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">{item.label}</p>
                  <p className="text-sm font-semibold text-white sm:text-base">{item.value}</p>
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
              지금 바로 무대에 서기
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
