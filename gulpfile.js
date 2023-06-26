import pkg from 'gulp';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import clean from 'gulp-clean';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from "browser-sync";
import cssMin from 'gulp-cssmin';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass)
const { src, dest, watch, series, parallel } = pkg;
const sassOpts = { outputStyle: 'compressed', errLogToConsole: true }; // "let" and "const"!!

const sync = browserSync.create()
function browsersyncServe() {
  sync.init({
    server: {
      baseDir: '.'
    }
  });
}

function browsersyncReload(){
  sync.reload({stream: true});
}

function styles() {
  return src('src/assets/scss/**/*.scss')
    .pipe(sass(sassOpts))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(dest('dist/css'))
}

const pics = () => {
  return src('src/assets/images/**/*')
    .pipe(dest('dist/images'))
}

const icons = () => {
  return src('src/assets/icons/**/*')
    .pipe(dest('dist/icons'))
}

const devWatch = () => {
  browsersyncServe()
  watch(['src/assets/images/**/*', 'src/assets/icons/**/*', 'src/assets/scss/**/*.scss'], parallel(pics, icons, styles)).on('change', sync.reload);
  watch('*.html').on('change', sync.reload);
};

const dirClean = () => {
    return src(['dist/css/*', 'dist/icons/*', 'dist/images/*'], {read: false})
    .pipe(clean());
}

const dev = series(parallel(dirClean, styles, pics, icons), devWatch);

export default dev
