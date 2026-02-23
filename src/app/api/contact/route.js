import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/**
 * Supabase에 "contacts" 테이블을 먼저 생성해야 합니다.
 *
 * SQL:
 * CREATE TABLE contacts (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   phone TEXT NOT NULL,
 *   service TEXT NOT NULL,
 *   message TEXT NOT NULL,
 *   created_at TIMESTAMPTZ DEFAULT now()
 * );
 */

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, service, message } = body;

    // ── 유효성 검사 ──
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // ── Supabase 연결 확인 ──
    if (!supabase) {
      console.warn(
        "[Contact API] Supabase가 설정되지 않았습니다. 데이터가 저장되지 않습니다."
      );
      // 개발 환경에서는 성공 응답 반환
      return NextResponse.json({
        success: true,
        message: "문의가 접수되었습니다. (Supabase 미연결 — 개발 모드)",
      });
    }

    // ── Supabase에 데이터 저장 ──
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, phone, service, message }])
      .select();

    if (error) {
      console.error("[Contact API] Supabase 에러:", error);
      return NextResponse.json(
        { error: "데이터 저장 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "문의가 성공적으로 접수되었습니다.",
      data,
    });
  } catch (err) {
    console.error("[Contact API] 서버 에러:", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
