# Sadmin - Svelte Admin UI Kit
Sadmin is an Administrator UI kit that utilizes the component function of svelte.   
Features include built-in components for easy customization.   
## Documents
[Open Documents](http://sadmin.tarucy.net/)

## Installation
```
npx degit hada0127/sadmin
```
## Setting Nginx
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
}  
```
## Version History
Before release   

## License
MIT License.
