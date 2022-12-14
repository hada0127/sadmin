# Svelte SPA Boilerplate
Web FrontEnd 용 Boilerplate   
Sveltekit (ts, eslint, prettier, playwright, vitest)   
Reset css 기본적용   
   
### 주요 디렉토리 구조
```bash
├── build //빌드 파일
├── static
│   ├── css
│   │   └── reset.css //Reset css
│   ├── favicon
│   ├── font
│   └── assets
├── src
│   ├── lib //$lib로 접근
│   │   ├── scss // scss ($scss로 접근)
│   │   │   └── variable.scss //Scss 변수
│   │   ├── store // store 저장소 ($store로 접근)
│   │   └── components // 컴포넌트 ($components로 접근, Atomic Design Pattern 간략화)
│   │       ├── atoms
│   │       ├── modules
│   │       └── templates
│   └── routes
│       ├── [...404]
│       │   └── +page.svelte //404 오류 페이지
│       └── +page.svelte //각 폴더 내 시작파일
├── app.html //기본 html 구조
└── 200.html //기본 html 구조 (200 fallback)
``` 

## 설치
```
npx degit hada0127/svelte-web
```

## test
```
yarn dev
```

## build
```
yarn build
```

## nginx 설정
```
server {
  listen 80;
  root /usr/share/nginx/html;
  gzip on;
  gzip_types text/css application/javascript application/json image/svg+xml;
  gzip_comp_level 9;
  etag on;
  location / {
    try_files $uri $uri/ /index.html;
  }
```

## 초기설정(참고)
```
npm i -g yarn
yarn global add eslint
yarn global add typescript
npm create svelte@latest
```
Where should we create your project?   
  (leave blank to use current directory)    
✔ Which Svelte app template? › **Skeleton project**   
✔ Add type checking with TypeScript? › **Yes, using TypeScript syntax**   
✔ Add ESLint for code linting? **Yes**   
✔ Add Prettier for code formatting? **Yes**   
✔ Add Playwright for browser testing? **Yes**   
✔ Add Vitest for unit testing? **Yes**   
```
yarn
yarn add axios
yarn add -D sass
```