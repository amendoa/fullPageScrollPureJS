"use strict";

var gulp = require("gulp"),
  browserSync = require("browser-sync"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  cssmin = require("gulp-cssmin");

gulp.task("default", function () {
  browserSync.init(
    [
      "app/index.html",
      "app/assets/stylesheet/**/*.css",
      "app/assets/javascript/**/*.js",
    ],
    {
      open: "external",
      server: {
        baseDir: "./app/",
      },
    }
  );
});

gulp.task("build", function () {
  gulp
    .src("./app/assets/javascript/**/*.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/javascript/"));

  gulp
    .src("./app/assets/stylesheet/**/*.css")
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/stylesheet/"));
});
