#!/usr/bin/env sh

rm -rf ../docs
npm run build
cp -r dist ../docs
git add --all
git commit -m "new deploy"
git push origin master
rm -rf dist
