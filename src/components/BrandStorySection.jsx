"use client";

import { Music, Users, Sparkles, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandStorySection() {
    const coreValues = [
        {
            icon: Music,
            title: "열정 (Passion)",
            text: "음악에 대한 깊은 열정으로 모든 무대에 진정성을 담습니다.",
            english: "Passion",
        },
        {
            icon: Users,
            title: "성장 (Growth)",
            text: "단원, 학생, 파트너 모두 함께 성장하는 가치를 추구합니다.",
            english: "Growth",
        },
        {
            icon: Sparkles,
            title: "퀄리티 (Quality)",
            text: "압도적인 실력으로 최고의 결과를 만들어 드립니다.",
            english: "Quality",
        },
    ];

    const mission = "수아트앤컴퍼니는 사람이 음악으로 변하는 순간을 만드는 곳입니다. 무대 올라가기 직전, 떨리던 그 순간을 기억해요. 우리는 한 사람의 목소리가 무대에서 빛나는 순간을 만들어요. 그 순간의 주인공은 바로 당신이에요!";

    return (
        <section className="bg-background-subtle py-16 sm:py-20 lg:py-25">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                
                {/* 뱃지 + 메인텍스트: 중앙 정렬 */}
                <div className="mb-12 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                            BRAND STORY
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-5xl">
                            Music <span className="text-primary italic">Makes</span> Us
                        </h2>
                    </motion.div>
                </div>

                {/* 설명 텍스트: 메인텍스트 아래 중앙 정렬 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-20"
                >
                    <div className="text-secondary/70 text-lg sm:text-xl leading-relaxed tracking-tight text-center max-w-4xl mx-auto space-y-2">
                        <p className="sm:block">
                            수아트는<br className="sm:hidden" />
                            <mark className="bg-primary/20 px-1 py-0.5 rounded text-xl sm:text-2xl font-bold italic text-secondary">"빼어날 수(秀) + 예술(Art)"</mark><br className="sm:hidden" />
                            <span className="sm:hidden"></span>
                            이라는 뜻이에요.
                        </p>
                        <p className="sm:block">
                            우리는 한 사람의 목소리가<br className="sm:hidden" /> 무대에서
                            <mark className="bg-primary/20 px-1 py-0.5 rounded text-xl sm:text-2xl font-bold italic text-secondary">빛나는</mark> 순간을 만들어요.<span className="sm:hidden"><br /><br /></span>
                        </p>
                        <p>
                            그 순간의 <mark className="bg-primary/20 px-1 py-0.5 rounded text-xl sm:text-2xl font-bold italic text-secondary">주인공</mark>은 바로 당신이에요!
                        </p>
                    </div>
                </motion.div>

                {/* 파형 애니메이션 - 텍스트와 카드 사이에 배치 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-end justify-center gap-1.5 sm:gap-2 h-20 sm:h-24 w-full max-w-5xl mx-auto mb-24"
                >
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 sm:w-3 rounded-full"
                            style={{
                                background: 'rgba(255, 107, 53, 0.8)',
                                boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.6), inset -2px -2px 4px rgba(0,0,0,0.1), 2px 2px 6px rgba(0,0,0,0.08)',
                            }}
                            animate={{
                                height: [
                                    `${Math.random() * 40 + 20}%`,
                                    `${Math.random() * 80 + 40}%`,
                                    `${Math.random() * 40 + 20}%`,
                                ],
                            }}
                            transition={{
                                duration: 1 + Math.random() * 0.5,
                                repeat: Infinity,
                                delay: i * 0.03,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>

                {/* 핵심가치 카드들 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-secondary/40 sm:text-sm">
                        CORE VALUE
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                    {coreValues.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-xl p-5 lg:p-7 shadow-sm border border-gray-100 text-left transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 relative lg:min-h-[140px] flex flex-col justify-center"
                            >
                                {/* 아이콘, 제목, 설명 텍스트 - 아이콘 옆에 제목, 설명은 아래 */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <Icon className="text-primary shrink-0" size={28} />
                                        <h4 className="text-lg font-semibold text-secondary whitespace-nowrap">
                                            {value.title}
                                        </h4>
                                    </div>
                                    <p className="text-secondary/60 text-sm leading-relaxed whitespace-normal">
                                        {value.text}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}