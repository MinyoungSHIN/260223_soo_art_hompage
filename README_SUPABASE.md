# Supabase 연결 가이드

이 프로젝트는 Supabase와 연결되어 있습니다.

## 설정 방법

### 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 로그인합니다.
2. 새 프로젝트를 생성합니다.
3. 프로젝트 설정에서 API 키를 확인합니다.

### 2. 환경 변수 설정

프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고 다음 내용을 추가합니다:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**값을 찾는 방법:**
- Supabase 대시보드 → 프로젝트 선택 → Settings → API
- `Project URL`을 `NEXT_PUBLIC_SUPABASE_URL`에 입력
- `anon public` 키를 `NEXT_PUBLIC_SUPABASE_ANON_KEY`에 입력

### 3. Supabase 클라이언트 사용

프로젝트에서 Supabase를 사용하려면 다음과 같이 import합니다:

```javascript
import { supabase } from '@/lib/supabase';

// 예시: 데이터 조회
async function fetchData() {
  const { data, error } = await supabase
    .from('your_table')
    .select('*');
  
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  console.log('Data:', data);
}
```

## 주요 파일

- `src/lib/supabase.js` - Supabase 클라이언트 초기화 파일
- `.env.local` - 환경 변수 파일 (Git에 커밋되지 않음)
- `.env.example` - 환경 변수 예시 파일

## 일반적인 사용 예시

### 데이터 조회 (SELECT)

```javascript
const { data, error } = await supabase
  .from('posts')
  .select('*');
```

### 데이터 삽입 (INSERT)

```javascript
const { data, error } = await supabase
  .from('posts')
  .insert([
    { title: '제목', content: '내용' }
  ]);
```

### 데이터 업데이트 (UPDATE)

```javascript
const { data, error } = await supabase
  .from('posts')
  .update({ title: '새 제목' })
  .eq('id', 1);
```

### 데이터 삭제 (DELETE)

```javascript
const { data, error } = await supabase
  .from('posts')
  .delete()
  .eq('id', 1);
```

### 실시간 구독

```javascript
const channel = supabase
  .channel('posts-channel')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('Change received!', payload);
    }
  )
  .subscribe();
```

### 인증

```javascript
// 회원가입
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'password123'
});

// 로그인
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'example@email.com',
  password: 'password123'
});

// 로그아웃
const { error } = await supabase.auth.signOut();

// 현재 사용자 정보
const { data: { user } } = await supabase.auth.getUser();
```

### 파일 업로드

```javascript
const { data, error } = await supabase.storage
  .from('bucket-name')
  .upload('file-path.jpg', file);
```

## 참고 자료

- [Supabase 공식 문서](https://supabase.com/docs)
- [Supabase JavaScript 클라이언트](https://supabase.com/docs/reference/javascript/introduction)
- [Next.js와 Supabase 통합](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
