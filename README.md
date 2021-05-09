# Gulp Build System Templates

## Personal taste for folder structure

```bash
root project
|
|-- Public
|   |--- css
|   |--- js
|   |--- images
|   |--- fonts
|  
|-- resources
|   |--- scss
|   |    |--- style.scss
|   |
|   |--- js
|   |    |--- main.js
|   |
|   |--- images
|   |
|   |--- fonts
|
|-- index.html
|-- gulpfile.js
|-- package.json
|-- package-lock.json
|-- gitignore

```
**Notes:** Public folder is a folder that we define in our gulpfile.js. Whether you want to change or not, is up to you.

## DevDependencies
**Requirements**
1. **project:** *gulp* `npm install -D gulp`
2. **system:** *gulp-cli* `npm install -g gulp-cli`

Optional DevDependencies for style:

1. gulp-sass: `npm install -D gulp-sass`
2. gulp-postcss: `npm install -D gulp-postcss`
3. cssnano: `npm install -D cssnano`
4. autoprefixer: `npm install -D autoprefixer`
5. postcss: `npm install -D postcss`

Optional DevDependencies for javascript:
1. gulp-babel: `npm install -D gulp-babel`
2. gulp-concat: `npm install -D gulp-concat`
3. gulp-uglify: `npm install -D gulp-uglify`

Optional DevDependencies for utils:
1. gulp-sourcemaps: `npm install -D gulp-sourcemaps`
2. gulp-rename: `npm install -D gulp-rename`

**Command for installing all of that Optional DevDependencies:**

``` bash
npm install --save-dev gulp-sass gulp-postcss cssnano autoprefixer postcss gulp-babel gulp-concat gulp-uglify gulp-sourcemaps gulp-rename
```