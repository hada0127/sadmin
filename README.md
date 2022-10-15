# Svelte + Routify3 Boilerplate
Web FrontEnd 용 Boilerplate
Svelte + Routify3(beta) + Vite 조합   
reset.css 기본적용   
eslint, vscode 설정 적용   
SCSS 적용

### 주요 디렉토리 구조
```bash
├── dist
│   └── client //빌드 파일
├── asset
│   ├── css
│   ├── favicon
│   ├── font
│   └── images
├── src
│   ├── component
│   │   ├── 프로그램명 //특정 프로그램용 요소
│   │   └── ui //UI 공통요소 (button, card, 등)
│   └── routes
│       ├── sample
│       │   ├── ignore.svelte //상위 모듈 무시 샘플
│       │   └── index.svelte //각 폴더 내 시작파일
│       ├── _module.svelte //해당 폴더 및 하위 폴더 전체 적용 레이아웃
│       └── index.svelte //각 폴더 내 시작파일
└── index.html //기본 html 구조
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
npm i -g eslint
npx @roxi/routify@next create .
yarn
npm i -D eslint eslint-plugin-svelte3
npm i axios
npm i -D svelte-preprocess sass
```