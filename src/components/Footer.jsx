import Image from "next/image";
import logo from "@/app/FullLogo.png";

const footerLinks = [
  {
    title: "서비스",
    links: [
      { label: "수아트 콰이어", href: "#services" },
      { label: "프리미엄 1:1 레슨", href: "#services" },
      { label: "B2BG 비즈니스", href: "#services" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "포트폴리오", href: "#portfolio" },
      { label: "문의하기", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111112] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* ── 로고 & 설명 ── */}
          <div className="md:col-span-1">
            <div className="relative mb-4 h-10 w-36">
              <Image
                src={logo}
                alt="Soo Art & Company"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-white/40">
              성악, 합창, 공연 기획 전문 기업
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
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-xs font-medium text-white/30">
            © {new Date().getFullYear()} Soo Art &amp; Company. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
