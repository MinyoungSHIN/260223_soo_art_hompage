# 🎨 Design Direction: Soo Art & Company

이 파일은 레퍼런스 이미지의 B2B 웹사이트 구조를 차용하며, 최신 웹 트렌드와 예술적 감성을 결합한 디자인 시스템을 정의합니다.

## 1. Tech Stack (Core)
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Database/Auth**: Supabase (Contact 폼 데이터 연동 및 관리)
- **Infrastructure**: Vercel (Deployment)
- **UI Components**: shadcn/ui (Radix UI 기반 프리미엄 컴포넌트)

## 2. Color System (Semantic)
이미지의 오렌지 포인트 컬러와 신뢰감 있는 무채색을 조화롭게 사용합니다.

- **Primary (Action)**: `#FF6B35` (Bright Orange)
  - 사용처: 주요 CTA 버튼, 핵심 키워드 하이라이트, 포인트 아이콘.
- **Secondary (Trust)**: `#1A1A1B` (Deep Charcoal)
  - 사용처: 푸터 배경, 다크 모드 섹션, 서브 타이틀.
- **Accent (Elegant)**: `#F4F1EA` (Soft Beige)
  - 사용처: 아카데미 섹션 배경, 부드러운 대비가 필요한 카드 배경.
- **Background**: 
  - Main: `#FFFFFF`
  - Subtle: `#F8F9FA` (섹션 간 구분을 위한 연한 그레이)
- **Status**:
  - Success: `#059669` | Error: `#DC2626` | Info: `#2563EB`

## 3. Hero Section (Dynamic Video)
- **Implementation**: HTML5 `<video>` Tag with Overlay.
- **Style**: 
  - 상단 헤더부터 이어지는 Full-width 레이아웃.
  - `bg-black/40` 오버레이를 적용하여 영상 위의 화이트 텍스트 가독성 극대화.
  - 영상 로드 전 Placeholder로 `#FF6B35` 그라데이션 적용.

## 4. Component Typography & UI
- **Font**: Pretendard (KR/EN 통합)
  - Headings: Bold (700), `tracking-tight`
  - Body: Medium (500), `leading-relaxed`
- **Shape**: 
  - 카드 및 버튼의 코너 라운딩(`Rounded-xl` : 12px~16px).
  - shadcn/ui의 기본 테마를 따르되, Border를 최소화하고 Shadow(Soft elevation)로 입체감 표현.
  
※ 이미지/동영상 파일이 없을 경우 AI를 활용하여 임의로 생성하여 붙여 넣음.