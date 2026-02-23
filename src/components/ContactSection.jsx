"use client";

import { useState } from "react";

const serviceOptions = [
  { value: "", label: "서비스를 선택해주세요" },
  { value: "choir", label: "수아트 콰이어 (단원 신청)" },
  { value: "lesson", label: "프리미엄 1:1 레슨 (상담 신청)" },
  { value: "b2bg", label: "B2BG 비즈니스 (제안서 요청)" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "전송에 실패했습니다.");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* ── 왼쪽: 안내 텍스트 ── */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              함께 만들어갈
              <br />
              무대가 있으신가요?
            </h2>
            <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-white/60">
              수강 신청, 공연 기획, 비즈니스 협업 등 어떤 문의든 환영합니다.
              빠른 시간 내에 연락드리겠습니다.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/50">이메일</p>
                  <p className="font-semibold text-white">
                    contact@sooart.co.kr
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/50">전화</p>
                  <p className="font-semibold text-white">02-1234-5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── 오른쪽: 폼 ── */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm lg:p-10"
          >
            {/* 성공 메시지 */}
            {status === "success" && (
              <div className="mb-6 rounded-xl bg-success/20 px-4 py-3 text-sm font-medium text-success">
                ✓ 문의가 성공적으로 접수되었습니다. 빠른 시일 내에
                연락드리겠습니다!
              </div>
            )}

            {/* 에러 메시지 */}
            {status === "error" && (
              <div className="mb-6 rounded-xl bg-error/20 px-4 py-3 text-sm font-medium text-error">
                ✕ {errorMsg}
              </div>
            )}

            <div className="space-y-5">
              {/* 성함 */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  성함 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder-white/30 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  연락처 <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-1234-5678"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder-white/30 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* 서비스 선택 */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  관심 서비스 <span className="text-primary">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  {serviceOptions.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-secondary text-white"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 문의 내용 */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  문의 내용 <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="문의하실 내용을 자유롭게 작성해주세요."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder-white/30 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 w-full rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  전송 중...
                </span>
              ) : (
                "문의 보내기"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
