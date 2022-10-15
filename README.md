# Svelte Admin UI Template
Web FrontEnd Admin용 UI Template   
Svelte + Routify3(beta) + Vite 조합      
Bulma 수정적용(폰트관련)   
Pretendard 폰트 적용   
eslint, vscode 설정 적용      
SCSS 적용   

## 설치
```
npx degit hada0127/svelte-admin
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