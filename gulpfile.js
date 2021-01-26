const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const minify = require("uglify-es");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const sync = require("browser-sync").create();
const tildeImporter = require("node-sass-tilde-importer");
const del = require("del");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({
      importer: tildeImporter
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(cleanCSS())
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
}

exports.images = images;

// Webp

const createAvatarWebp = () => {
  return gulp.src("source/img/avatar/content/png/**/*.png")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img/avatar/content/webp"));
}

const createDirectionsWebp = () => {
  return gulp.src("source/img/directions/content/png/**/*.png")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img/directions/content/webp"));
}

const createFlagsWebp = () => {
  return gulp.src("source/img/flags/content/png/**/*.png")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img/flags/content/webp"));
}

const createLogoWebp = () => {
  return gulp.src("source/img/logo/content/png/**/*.png")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img/logo/content/webp"));
}

exports.createWebp = gulp.parallel(
  createAvatarWebp,
  createDirectionsWebp,
  createFlagsWebp,
  createLogoWebp
);

// Sprite

const sprite = () => {
  return gulp.src("source/img/svg-library/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/svg-library"));
}

exports.sprite = sprite;

// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

// JS

const jsmin = () => {
  return gulp.src("source/js/app.js")
    .pipe(minify())
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest("build/js"));
}

exports.jsmin = jsmin;

// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/img/**/*.{jpg,png,svg}",
    "source/css/style.css",
    "source/js/app.js"
  ],
    {
      base: "source"
    }
  )
    .pipe(gulp.dest("build"));
}

exports.copy = copy;

// Clean

const clean = () => {
  return del("build");
}

exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", gulp.series(html, sync.reload));
}

// Build

const build = gulp.series(
  clean,
  gulp.parallel(
    copy,
    styles,
    html,
    sprite,
    images,
    createAvatarWebp,
    createDirectionsWebp,
    createFlagsWebp,
    createLogoWebp
  )
);

exports.build = build;

exports.default = gulp.series(
  clean,
  gulp.parallel(
    copy,
    styles,
    html,
    sprite,
    createAvatarWebp,
    createDirectionsWebp,
    createFlagsWebp,
    createLogoWebp
  ),
  gulp.series(
    server,
    watcher
  )
);
