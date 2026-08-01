# R&D Portfolio

VR, Robotics, Digital Twin, AI 분야의 연구와 프로젝트를 소개하기 위한 개인 포트폴리오입니다. Vue 3와 Vite로 제작했으며 별도 서버나 데이터베이스 없이 GitHub Pages에 배포할 수 있습니다.

배포 주소: [https://leelee412.github.io/](https://leelee412.github.io/)

## 주요 기능

- Home, About, Projects, Publications, Experience, Contact 페이지
- 분야별 프로젝트 필터와 접근 가능한 상세 모달
- 모바일, 태블릿, 데스크톱 반응형 레이아웃
- 데이터 파일 중심의 콘텐츠 관리
- 이미지가 없을 때 표시되는 기본 프로젝트 placeholder
- 링크가 있을 때만 노출되는 논문·영상·프로젝트 버튼
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
  index: '07',
  title: '프로젝트 제목',
  subtitle: 'English Subtitle',
  description: '프로젝트 설명',
  categories: ['VR', 'AI'],
  period: '2025.01 — 2025.06',
  role: '담당 역할',
  technologies: ['Unity', 'OpenAI API'],
  achievements: ['주요 성과'],
  image: './images/project-name.jpg',
  imageAlt: '프로젝트 화면 설명',
  paperUrl: '',
  videoUrl: '',
  projectUrl: '',
  featured: false,
}
```

- 이미지는 `public/images` 폴더에 넣고 `./images/파일명.jpg` 형식으로 지정합니다.
- 이미지 값이 비어 있으면 기본 placeholder가 표시됩니다.
- `paperUrl`, `videoUrl`, `projectUrl`이 비어 있으면 해당 버튼은 표시되지 않습니다.
- 새 필터가 필요하면 `projectFilters` 배열에도 분야명을 추가합니다.

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
│  └─ og-card.png
├─ src/
│  ├─ assets/main.css
│  ├─ components/
│  │  ├─ PageHero.vue
│  │  ├─ ProjectCard.vue
│  │  ├─ ProjectModal.vue
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
│  │  ├─ ProjectsView.vue
│  │  └─ PublicationsView.vue
│  ├─ App.vue
│  └─ main.js
├─ index.html
├─ package.json
└─ vite.config.js
```
