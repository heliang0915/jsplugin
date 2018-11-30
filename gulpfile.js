/**
 * Created by hotread on 2017/6/7.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var rename = require('gulp-rename');
var uglify = require("gulp-uglify");

console.log(path.join(__dirname, '/public/sass/*.scss'));

gulp.task('sass', function() {
  gulp.src(path.join(__dirname, '/public/sass/*.scss')).pipe(sass({
    // outputStyle:"expanded"
    outputStyle: "compressed"
  }).on('error', function(err) {
    console.log(err);
  })).pipe(gulp.dest(path.join(__dirname, '/public/css/')));

});

gulp.task("minjs", function() {
  gulp.src("./public/js/*/*.js")
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest("./public/js/min/"));
});
gulp.task('sass-watch', function() {
  gulp.watch(path.join(__dirname, '/public/sass/*.scss'), ['sass'])
})
gulp.task('js-watch', function() {
  gulp.watch(path.join(__dirname, '/public/js/*/*.js'), ['minjs'])
})

gulp.task('default', ['sass-watch','js-watch']);
