// Style initialize 
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// Utils initialize
const rename = require('gulp-rename');

// Defining some path so we can use that in our function
var jalur = {
    style: {
        src: 'resources/scss/style.scss',
        dest: 'public/css/'
    }
};

function styling() {
    return gulp.src(jalur.style.src)
        .pipe(sass({ outputStyle: 'compressed', sourceMap: 'True' }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jalur.style.dest));
}

function pengawas() {
    gulp.watch('resources/scss/**/*.scss', styling);
}

var building = gulp.series(styling);

exports.styling = styling;

exports.default = building;