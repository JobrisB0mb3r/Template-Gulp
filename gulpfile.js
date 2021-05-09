// Style initialize 
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// Javascript stuff initialize
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
// Utils initialize
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// Defining some path so we can use that in our function
var jalur = {
    style: {
        src: 'resources/scss/style.scss',
        dest: 'public/css/'
    },
    scripts: {
        src: 'resources/js/**/*.js',
        dest: 'public/js/'
    }
};

function styling() {
    return gulp.src(jalur.style.src, { base: 'resources/scss' })
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../resources/scss' }))
        .pipe(gulp.dest(jalur.style.dest));
}

function scripting() {
    return gulp.src(jalur.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../resources/js' }))
        .pipe(gulp.dest(jalur.scripts.dest));
}

function pengawas() {
    gulp.watch(jalur.scripts.src, scripting);
    gulp.watch('resources/scss/**/*.scss', styling);
}

var building = gulp.parallel(styling, scripting);

exports.styling = styling;
exports.scripting = scripting;
exports.pengawas = pengawas;

exports.default = building;