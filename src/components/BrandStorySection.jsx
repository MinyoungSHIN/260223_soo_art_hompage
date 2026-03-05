"use client";

import { Music, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandStorySection() {
    const cards = [
        {
            icon: Music,
            title: "예술적 열정",
            text: "음악과 무대에 대한 깊은 애정으로 모든 프로젝트에 진정성을 담습니다.",
        },
        {
            icon: Users,
            title: "함께하는 성장",
            text: "단원, 학생, 파트너 모두가 함께 성장하는 삶의 가치를 추구합니다.",
        },
        {
            icon: Sparkles,
            title: "최고의 퀄리티",
            text: "프리미엄 교육과 압도적인 무대 연출로 최상의 결과를 보장합니다.",
        },
    ];

    return (
        <section className="bg-background-subtle py-24">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* BRAND STORY label */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary font-semibold tracking-widest text-sm mb-1"
                >
                    BRAND STORY
                </motion.p>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-secondary leading-tight"
                >
                    Music <span className="text-primary italic">Makes</span> Us
                </motion.h2>

                 {/* Description */}
                 <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2, duration: 0.6 }}
                     viewport={{ once: true }}
                     className="mt-10 px-50 max-w-4xl mx-auto text-secondary/70 text-lg leading-relaxed space-y-4 text-center"
                 >
                     {[
                         "무대 올라가기 직전, 떨리던 그 순간을 기억해요.",
                         "수아트(秀+Art)는 \"빼어날 수 + 예술 그리고 음악\".",
                         "누구나 빛날 수 있다는 뜻이에요.",
                         "우리는 한 사람의 목소리가 무대에서 빛나는 순간을 만들어요",
                         "그 순간의 주인공은 바로 당신이에요!",
                         "오늘부터 같이 시작하실래요?",
                     ].map((sentence, index) => (
                         <motion.div
                             key={index}
                             initial={{ opacity: 0, x: -20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                             viewport={{ once: true }}
                             className="flex items-start gap-3"
                         >
                             <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                             <span>{sentence}</span>
                         </motion.div>
                     ))}
                 </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="
                  bg-white
                  rounded-2xl
                  p-8
                  shadow-sm
                  border border-gray-100
                  text-left
                  transition
                  duration-300
                  hover:shadow-lg
                  hover:shadow-primary/10
                "
                            >
                                <Icon className="text-primary mb-6" size={32} />

                                <h3 className="text-xl font-semibold text-secondary mb-3">
                                    {card.title}
                                </h3>

                                <p className="text-secondary/60 leading-relaxed">
                                    {card.text}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}