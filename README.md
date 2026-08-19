# R&D Portfolio

XR, Robotics, Digital Twin, Geospatial, AI 분야의 2023–2025 연구와 프로젝트를 소개하기 위한 개인 포트폴리오입니다. Vue 3와 Vite로 제작했으며 별도 서버나 데이터베이스 없이 GitHub Pages에 배포할 수 있습니다.

배포 주소: [https://leelee412.github.io/](https://leelee412.github.io/)

## 주요 기능

- Home, Projects, About의 세 가지 핵심 화면
- 연도·통합 분야 필터와 고밀도 2열 프로젝트 카드
- 구현·성과·미디어·관련 링크 중심의 간결한 프로젝트 상세 페이지
- About 안에 Profile, Skills, Experience, Education, Publications, Contact 통합
- 기존 `/experience`, `/publications`, `/contact` URL의 About 섹션 리다이렉트
- 모바일, 태블릿, 데스크톱 반응형 레이아웃
- 데이터 파일 중심의 콘텐츠 관리
- 링크가 있을 때만 노출되는 논문·데모 영상·코드 버튼
- SEO 및 Open Graph 메타태그
- GitHub Pages 호환 해시 라우팅
- GitHub Actions 자동 배포

## 시작하기

Node.js 20 이상을 권장합니다.

코드 편집기 없이 사이트만 확인하려면 프로젝트 폴더의 `포트폴리오_열기.cmd`를 더블클릭합니다. 로컬 서버가 최소화된 창으로 실행되고 기본 브라우저가 자동으로 열립니다.

```bash
npm install
npm run dev
```

터미널에 표시된 로컬 주소를 브라우저에서 열어 확인합니다.

## 콘텐츠 수정

개인 정보와 콘텐츠는 `src/data` 폴더에서 관리합니다.

| 파일 | 관리 내용 |
| --- | --- |
| `src/data/profile.js` | 이름, 소개, 연구 분야, 기술 스택, 연락처 |
| `src/data/projects.js` | 프로젝트 제목, 설명, 기간, 역할, 기술, 성과, 이미지, 링크 |
| `src/data/publications.js` | 논문 및 학술대회 발표 |
| `src/data/experience.js` | 경력, 연구 활동, 교육, 수상 |

### 프로젝트 추가

`src/data/projects.js`의 `projects` 배열에 기존 항목과 같은 구조의 객체를 추가합니다.

```js
{
  id: 'unique-project-id',
  index: '13',
  year: '2025',
  title: '프로젝트 제목',
  subtitle: 'English Subtitle',
  description: '프로젝트 설명',
  categories: ['VR', 'AI'],
  period: '2025.01 — 2025.06',
  role: '담당 역할',
  technologies: ['Unity', 'OpenAI API'],
  achievements: ['주요 성과'],
  challenge: '해결하려 한 문제',
  contribution: ['설계하고 구현한 내용'],
  image: '/media/2025/project-name-cover.jpg',
  imageAlt: '프로젝트 화면 설명',
  paperUrl: '',
  videoUrl: '/media/2025/project-name-demo.mp4',
  codeUrl: '',
  codeStatus: 'Private prototype',
  featured: false,
}
```

- 공개할 이미지와 영상은 `public/media/연도` 폴더에 넣고 `/media/연도/파일명` 형식으로 지정합니다.
- `paperUrl`, `videoUrl`, `codeUrl`이 비어 있으면 해당 버튼은 표시되지 않습니다.
- 화면의 통합 분야 필터를 바꾸려면 `src/views/ProjectsView.vue`의 `fieldFilters` 매핑을 수정합니다.

### 공개 파일과 원본 자료

- GitHub Pages에서 사용하는 압축 이미지·영상만 `public/media/2023`, `public/media/2024`, `public/media/2025`에 둡니다.
- 원본 발표 자료와 고용량 영상은 로컬 `my/`에 보관하며 `.gitignore`로 Git 업로드에서 제외합니다.
- 분석용 프레임, 임시 변환 파일, 참고 저장소는 로컬 `_work/`에 보관하며 역시 Git에 올리지 않습니다.
- 웹페이지에서 실제로 표시하는 파일은 방문자가 내려받을 수 있으므로, 공개하면 안 되는 개인정보·원본·소스 코드는 `public/`에 넣지 않습니다.

### 개인 정보와 연락처 수정

`src/data/profile.js`에서 placeholder를 실제 정보로 바꿉니다. 이메일은 표시 문자열과 링크를 함께 수정합니다.

```js
email: 'name@example.com',
emailHref: 'mailto:name@example.com',
githubLabel: 'github.com/username',
githubUrl: 'https://github.com/username',
```

### SEO 수정

`index.html`의 `title`, `description`, Open Graph 항목을 실제 이름과 배포 주소에 맞게 수정합니다. 공유 이미지는 `public/og-card.png`입니다.

## 빌드 및 미리보기

```bash
npm run build
npm run preview
```

프로덕션 파일은 `dist` 폴더에 생성됩니다.

## GitHub Pages 배포

1. 이 프로젝트를 GitHub 저장소의 `main` 브랜치에 push합니다.
2. GitHub 저장소에서 **Settings → Pages**로 이동합니다.
3. **Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
4. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드하고 배포합니다.
5. Actions의 `Deploy to GitHub Pages` 실행이 끝나면 Pages 주소로 접속합니다.

Vue Router는 `createWebHashHistory()`를 사용하므로 GitHub Pages에서 하위 페이지를 새로고침해도 404가 발생하지 않습니다. Vite의 `base`는 `아이디.github.io` 사용자 사이트에 맞게 루트 경로(`/`)로 설정되어 있습니다.

## 폴더 구조

```text
.
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ media/
│  │  ├─ 2023/
│  │  ├─ 2024/
│  │  └─ 2025/
│  └─ og-card.png
├─ src/
│  ├─ assets/main.css
│  ├─ components/
│  │  ├─ PageHero.vue
│  │  ├─ ProjectCard.vue
│  │  └─ ProjectVisual.vue
│  ├─ data/
│  │  ├─ experience.js
│  │  ├─ profile.js
│  │  ├─ projects.js
│  │  └─ publications.js
│  ├─ router/index.js
│  ├─ views/
│  │  ├─ AboutView.vue
│  │  ├─ ContactView.vue
│  │  ├─ ExperienceView.vue
│  │  ├─ HomeView.vue
│  │  ├─ ProjectDetailView.vue
│  │  ├─ ProjectsView.vue
│  │  └─ PublicationsView.vue
│  ├─ App.vue
│  └─ main.js
├─ index.html
├─ package.json
└─ vite.config.js
```

`ContactView.vue`, `ExperienceView.vue`, `PublicationsView.vue`는 데이터와 기존 구현을 보존하기 위해 남겨두었습니다. 해당 URL은 현재 About의 대응 섹션으로 이동합니다.
