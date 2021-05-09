// Style initialize 
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// Utils initialize
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// Defining some path so we can use that in our function
var jalur = {
    style: {
        src: 'resources/scss/style.scss',
        dest: 'public/css/'
    }
};

function styling() {
    return gulp.src(jalur.style.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.', { includeContent: 'false', sourceRoot: '../resources/scss' }))
        .pipe(gulp.dest(jalur.style.dest));
}

function pengawas() {
    gulp.watch('resources/scss/**/*.scss', styling);
}

var building = gulp.series(styling);

exports.styling = styling;

exports.default = building;