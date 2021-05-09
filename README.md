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
|-- package.json
|-- package-lock.json
|-- gitignore

```

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

Optional DevDependencies for utils:
1. gulp-sourcemaps: `npm install -D gulp-sourcemaps`