const { src, dest, watch, parallel, series } = require('gulp');
const plumber = require("gulp-plumber");
const less = require('gulp-less');
const sourcemap = require("gulp-sourcemaps");
const csso = require('gulp-csso');
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const gulpStylelint = require('gulp-stylelint');
const svgSprite = require('gulp-svg-sprite');
const del = require('del');

function cleanDist() {
  return del('dist')
}


function styles() {
  return src('app/less/style.less')
  .pipe(gulpStylelint({
    reporters: [
      { formatter: 'string', console: true }
    ]
  }))
    .pipe(sourcemap.init())
    .pipe(plumber())
    .pipe(less(
      autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
      })
    )
    )
    .pipe(csso())
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}


function watching() {
  watch(['app/less/**/*.less'], styles);
  watch(['app/js/**/*.js', '!app/js/script.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    },
    browser: 'firefox',
  });
}

function scripts() {
  return src([
    'app/js/src/*.js',
  ])
  .pipe(uglify())
  .pipe(concat('script.min.js'))
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())

}

function images() {
  return (src('app/img/**/*.{jpg,png,svg,webp}'))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('dist/img'))
}

function Webp() {
  return src('app/img/**/*.jpg')
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(dest('app/img'))
}

function sprite() {
  return src('app/img/for_sprite/*.svg')
    .pipe(svgSprite(
      config = {
        shape: {
          dimension: {
            maxWidth: 32,
            maxHeight: 32
          },
          spacing: {
            padding: 15
          }
        },
        mode: {
          stack: {
            sprite: "../icons/icons/svg",
            example: true
          }
        },
      }
    ))
    .pipe(dest('app/img'));
}

function build() {
  return src([
    'app/css/style.min.css',
    'app/fonts/**/*',
    'app/js/*.js',
    'app/*.html'
  ], { base: 'app' })
    .pipe(dest('dist'))
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.Webp = Webp;
exports.svgSprite = sprite;
exports.images = images;
exports.cleanDist = cleanDist;


exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);

