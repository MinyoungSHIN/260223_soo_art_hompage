import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* 1. 히어로 — 후킹 */}
      <HeroSection />

      {/* 2. 문제 제시 — 고객의 고민 */}
      <ProblemSection />

      {/* 3. 솔루션 — 서비스 제안 */}
      <SolutionSection />

      {/* 4. 신뢰 — 협업 기관 증빙 */}
      <TrustSection />

      {/* 5. 후기 — 참석자 리뷰 */}
      <TestimonialsSection />

      {/* 6. 포트폴리오 하이라이트 */}
      <PortfolioSection />

      {/* 7. CTA — 행동 유도 */}
      <CtaSection />

      {/* 8. 연락처 폼 */}
      <ContactSection />
    </>
  );
}
