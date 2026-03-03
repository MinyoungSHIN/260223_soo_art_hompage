
import Image from "next/image";

const footerLinks = [
  {
    title: "서비스",
    links: [
      { label: "수아트 콰이어", href: "/services/choir" },
      { label: "프리미엄 1:1 레슨", href: "/services/lesson" },
      { label: "B2B 비즈니스", href: "/services/b2bg" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "회사소개", href: "/about" },
      { label: "포트폴리오", href: "/portfolio" },
      { label: "문의하기", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer data-header-theme="dark" className="bg-[#111112] pt-16 pb-6">
      <div className="mx-auto max-w-5xl px-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {/* ── 로고 & 설명 ── */}
          <div className="md:col-span-1">
            <div className="relative mb-4 h-10 w-36 sm:h-12 sm:w-40">
              <Image
                src="/image/logo_footer.png?v=1"
                alt="Soo Art & Company"
                fill
                className="object-contain object-left brightness-0 invert"
                unoptimized
              />
            </div>
            <p className="text-xs font-medium leading-relaxed text-white/40 sm:text-sm">
              공연 기획 및 보이스 에듀케이션 전문 기업,
              <br />
              예술로 세상을 감동시킵니다.
            </p>
          </div>

          {/* ── 링크 그룹 ── */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/60">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-white/40 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── 하단 구분선 & 카피라이트 ── */}
        <div className="mt-8 border-t border-white/10 pt-6 pb-3">
          <p className="text-center text-sm font-medium text-white/50">
            © {new Date().getFullYear()} Soo Art &amp; Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
