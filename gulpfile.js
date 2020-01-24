// Initialize modules
const {
  src,
  dest,
  watch,
  series,
  parallel
} = require("gulp");

const browserSync = require("browser-sync").create();

const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const concat = require("gulp-concat");
const terser = require("gulp-terser");

const replace = require("gulp-replace");



// SCSS task
function scssTask() {
  return src("app/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

// JS task
function jsTask() {
  return src("app/js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(
      terser({
        keep_fnames: true,
        mangle: false
      })
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

// Cachebusting task
const cbString = new Date().getTime();

function cacheBustTask() {
  return src(["./dist/*.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("./dist/"));
}

// Watch task
function watchTask() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });

  watch(["app/scss/**/*.scss", "app/js/**/*.js"], parallel(scssTask, jsTask));
  watch("./dist/*.html").on("change", browserSync.reload);
}

// Deafult task
exports.default = series(parallel(scssTask, jsTask), cacheBustTask, watchTask);