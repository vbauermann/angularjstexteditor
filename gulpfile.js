const { src, dest, task, series } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const pathDist = "./dist";

task("[PROD][LESS]", () => {
  return src('./src/angularjstexteditor.less')
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(concat('angularjstexteditor.min.css'))
    .pipe(dest(pathDist));
});

task("[PROD][SANITIZE]", () => {
  return src('./src/angularjstexteditorSanitize.js')
    .pipe(uglify())
    .pipe(concat('angularjstexteditorSanitize.min.js'))
    .pipe(dest(pathDist));
});

task("[PROD][RANGY]", () => {
  return src('./src/angularjstexteditorRangy.js')
    .pipe(uglify())
    .pipe(concat('angularjstexteditorRangy.min.js'))
    .pipe(dest(pathDist));
});

task("[PROD][SETUP]", () => {
  return src('./src/angularjstexteditorSetup.js')
    .pipe(uglify())
    .pipe(concat('angularjstexteditorSetup.min.js'))
    .pipe(dest(pathDist));
});

const filesToProd = [
  './src/globals.js',
  './src/factories.js',
  './src/DOM.js',
  './src/validators.js',
  './src/taBind.js',
  './src/main.js',
]
task("[PROD][TEXTEDITOR]", () => {
  return src(filesToProd)
    .pipe(uglify())
    .pipe(concat('angularjstexteditor.min.js'))
    .pipe(dest(pathDist));
});



task('[RUN][PROD]', series('[PROD][LESS]', '[PROD][SANITIZE]', '[PROD][RANGY]', '[PROD][SETUP]', '[PROD][TEXTEDITOR]',
  function (done) {
    done();
  })
);