import "./globals.css";

export const metadata = {
  title: "Soo Art & Company",
  description: "Soo Art & Company 공식 홈페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
