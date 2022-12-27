#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd build

# copy 404
cp index.html 404.html

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'sadmin.tarucy.net' > CNAME

rm -rf .git
git init
git checkout -B gh-pages
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:hada0127/sadmin.git gh-pages


cd -
