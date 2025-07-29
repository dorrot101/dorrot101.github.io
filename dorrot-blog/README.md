# Dorrot Blog

Next.js와 Notion API를 사용한 블로그 시스템입니다.

## 기능

- **Notion 통합**: Notion 데이터베이스를 CMS로 사용
- **카테고리 시스템**: 다양한 주제별 포스트 분류
- **반응형 디자인**: 모바일 친화적인 UI
- **다크 모드 지원**: 시스템 설정에 따른 다크 모드
- **GitHub Actions 자동 배포**: Push 시 자동으로 GitHub Pages에 배포

## 설정 방법

### 1. Notion 설정

1. Notion에서 새 데이터베이스를 생성합니다.
2. 다음 속성들을 추가합니다:
   - **Title** (제목): 텍스트
   - **Slug** (URL 경로): 텍스트
   - **Date** (날짜): 날짜
   - **Category** (카테고리): 선택
   - **Tags** (태그): 다중 선택
   - **Published** (공개 여부): 체크박스
   - **Excerpt** (요약): 텍스트

3. [Notion Integration](https://www.notion.so/my-integrations)을 생성하고 API 키를 받습니다.
4. 데이터베이스를 Integration과 연결합니다.

### 2. 환경 변수 설정

`.env.local` 파일에 다음 환경 변수를 설정합니다:

```env
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_database_id
```

### 3. GitHub Secrets 설정

GitHub 저장소의 Settings > Secrets and variables > Actions에서:
- `NOTION_API_KEY`: Notion API 키
- `NOTION_DATABASE_ID`: Notion 데이터베이스 ID

## 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 배포

main 브랜치에 push하면 자동으로 GitHub Pages에 배포됩니다.

## 기술 스택

- Next.js 15
- TypeScript
- Tailwind CSS
- Notion API
- GitHub Actions