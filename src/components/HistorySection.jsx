"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Theater, Building2, GraduationCap, Mic, Sparkles, Radio } from "lucide-react";

const categories = [
  { id: "choral", label: "합창 지도", color: "slate", bgColor: "bg-slate-50", icon: Music },
  { id: "musical", label: "뮤지컬 지도", color: "blue", bgColor: "bg-blue-50", icon: Theater },
  { id: "affiliations", label: "대표 활동", color: "stone", bgColor: "bg-stone-50", icon: Building2 },
  { id: "school", label: "출강 이력", color: "emerald", bgColor: "bg-emerald-50", icon: GraduationCap },
  { id: "performance", label: "공연 이력", color: "purple", bgColor: "bg-purple-50", icon: Mic },
  { id: "choreography", label: "무대 연출 (안무)", color: "amber", bgColor: "bg-amber-50", icon: Sparkles },
  { id: "media", label: "방송 출연", color: "rose", bgColor: "bg-rose-50", icon: Radio },
];

const historyData = {
  choral: [
    { content: "이화유스콰이어 지휘", year: "2013 ~ 2023" },
    { content: 'HP 기업 합창단 "더 하모니" 지휘', year: "2012 ~ 2016" },
    { content: "천주교 서울교구 고덕동 성당 성가대 지휘", year: "2005 ~ 2015" },
    { content: "이화여자대학교 교직원 합창단 지휘자", year: "2013" },
    { content: "육군 제 1 항공여단 군가 합창단 객원지휘", year: "2010" },
    { content: "수원유스콰이어 발성지도 및 부지휘", year: "2016 ~ 2019" },
  ],
  musical: [
    { content: "하남시 청소년 뮤지컬단 대표 및 수페리오레 음악감독", year: "2024 ~ 현재" },
    { content: "하남시 어린이 연극뮤지컬단 아롱별 음악감독", year: "2022 ~ 2023" },
    { content: '하남시 연극학교 뮤지컬 "빨래" 음악감독', year: "2013, 2021 ~ 2022" },
    { content: "신세계백화점 문화센터 어린이 뮤지컬 강사", year: "2019" },
    { content: "하남시 청소년 뮤지컬단 돈키호테 음악감독", year: "2014 ~ 2015" },
    { content: "서울시 중구 청소년 뮤지컬단 음악감독", year: "2012 ~ 2013" },
    { content: "대한항공 연수원 뮤지컬 음악감독", year: "2011" },
  ],
  affiliations: [
    { content: "이화챔버콰이어 단원", year: "2005 ~ 2025" },
    { content: "정샘 콰이어 단원", year: "2025 ~ 현재" },
    { content: "이화음악인협회 정회원", year: "2025 ~ 현재" },
    { content: "서울 바로크싱어즈 단원", year: "2014 ~ 2016" },
    { content: '교회예술기획 공간 "광" 단원', year: "2015 ~ 2016" },
    { content: "개그맨 고명환의 오페라이야기 사랑의묘약 단원", year: "2012 ~ 2013" },
    { content: "스콜라 칸토룸 서울 중세음악 앙상블 단원", year: "2010" },
  ],
  school: [
    { content: "하남시 신평중학교 뮤지컬단 강사", year: "2018 ~ 현재" },
    { content: "서울시 은빛초등학교 다함께예술로 강사", year: "2025" },
    { content: "김포시 장기중학교 합창단 강사", year: "2015 ~ 2017" },
    { content: "용인시 구성초등학교 합창단 강사", year: "2015" },
    { content: "의정부시 녹양초등학교 어린이합창단 강사", year: "2012 ~ 2013" },
  ],
  performance: [
    { content: "팝페라팀 수페리오레 '하남시 버스킹' 및 스타필드 초청공연 외 다수", year: "현재" },
    { content: "국립합창단 주최 창작 오페라 '고집불통 옹' 처녀 역", year: "2013" },
    { content: '예술기획사 공간 주관 오페라 "사랑의 묘약" 출연', year: "2010" },
    { content: "하남시립합창단 창작뮤지컬 '유관순' 유관순 역", year: "2014" },
    { content: "하남시립합창단 뮤지컬 '그리스' 샌디 역", year: "기간미정" },
    { content: '창작음악극 "이성례마리아" 이성례마리아 역', year: "2015 ~ 2016" },
    { content: "용인시 오페라단 차세대 음악회", year: "2005" },
    { content: "부평시립합창단 정기연주회 초청 독창", year: "2010" },
    { content: "국립제주박물관 초청 독창", year: "2009" },
    { content: "하남시 체육대회 오프닝세레모니 독창", year: "2011" },
    { content: "서울시 영안교회 솔리스트", year: "2007 ~ 2008" },
    { content: "의정부시 열방교회 솔리스트", year: "2008 ~ 2009" },
    { content: "광주시 성령교회 솔리스트", year: "2004 ~ 2005" },
  ],
  choreography: [
    { content: "하남시립합창단 안무 및 무대연출", year: "~ 현재" },
    { content: "서울시 광진구립합창단 무대연출", year: "2018" },
    { content: "연세콰이어 무대연출", year: "2017" },
    { content: "바로크오라토리오 합창단 무대연출", year: "2013" },
    { content: "태백시 어린이합창단 발성지도 및 무대연출", year: "2012" },
    { content: "구리시립 소년소녀합창단 발성지도 및 무대연출", year: "2012" },
    { content: "성남시합창단 무대연출", year: "2011" },
  ],
  media: [
    { content: 'MBC 드라마 "불의여신 정이" 타이틀곡 녹음', year: "2013" },
    { content: 'KBS 드라마 "장사의 신" 타이틀곡 녹음', year: "2015" },
    { content: "KBS 진품명품 고문서 합창 재연", year: "2021" },
  ],
};

// 음악 악보 SVG 패턴
const MusicPattern = () => (
  <svg
    className="absolute inset-0 opacity-[0.03]"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="music-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        <circle cx="30" cy="15" r="1.5" fill="currentColor" />
        <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="0.5" />
        <line x1="5" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="0.5" />
        <line x1="5" y1="30" x2="35" y2="30" stroke="currentColor" strokeWidth="0.5" />
        <path d="M 15 20 L 15 10" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M 25 25 L 25 15" stroke="currentColor" strokeWidth="1" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#music-pattern)" />
  </svg>
);

export default function HistorySection() {
  const [activeCategory, setActiveCategory] = useState("choral");

  const activeData = historyData[activeCategory] || [];
  const activeBgColor = categories.find((cat) => cat.id === activeCategory)?.bgColor || "bg-slate-50";

  return (
    <section className={`transition-colors duration-700 ${activeBgColor} py-15 sm:py-20 lg:py-25`}>
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-20">
        <div className="mb-12 text-center">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
            Experiences
          </p>
            <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl md:text-4xl">
              Our History
            </h2>
        </div>

        {/* Desktop: 좌측 탭 메뉴 / 우측 카드 (768px 이상) */}
        <div className="hidden md:grid md:grid-cols-[180px_1fr] md:gap-6 lg:gap-8">
          {/* 좌측 카테고리 탭 */}
          <div className="flex flex-col gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm md:text-base font-medium transition-all duration-300 ${activeCategory === category.id
                      ? "bg-white text-primary shadow-md"
                      : "text-secondary/70 hover:bg-white/50 hover:text-secondary"
                    }`}
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* 우측 이력 카드 */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {activeData.map((item, index) => (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="group relative overflow-hidden rounded-xl bg-white/80 p-6 lg:p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                  >
                    <MusicPattern />
                    <div className="relative flex items-start justify-between gap-4">
                      <p className="flex-1 text-lg font-medium leading-relaxed text-secondary">
                        {item.content}
                      </p>
                      <span className="shrink-0 text-base font-medium text-secondary/50">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: 상단 칩 / 하단 카드 */}
        <div className="md:hidden">
          {/* 상단 가로 스크롤 카테고리 칩 */}
          <div className="mb-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                    ? "bg-white text-primary shadow-md"
                    : "bg-white/60 text-secondary/70"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* 하단 이력 카드 */}
          <div className="space-y-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeData.map((item, index) => (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="group relative overflow-hidden rounded-xl bg-white/80 p-4 mb-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                  >
                    <MusicPattern />
                    <div className="relative flex flex-col gap-0.5">
                      <p className="text-base font-medium leading-relaxed text-secondary">
                        {item.content}
                      </p>
                      <span className="text-sm font-medium text-secondary/50">{item.year}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
