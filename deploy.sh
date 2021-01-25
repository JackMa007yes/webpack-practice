yarn build &&
git checkout gh-pages &&
rm -rf *.sh *.js *.json *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'updata' &&
git push &&
git checkout master