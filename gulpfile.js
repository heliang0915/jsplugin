/**
 * Created by hotread on 2017/6/7.
 */

var gulp=require('gulp');
var sass=require('gulp-sass');
var path=require('path');

gulp.task('sass',function(){
    gulp.src(path.join(__dirname,'/sass/*.scss')).pipe(sass({
        // outputStyle:"expanded"
        outputStyle:"compressed"
    }).on('error',function (err) {
        console.log(err);
    })).pipe(gulp.dest(path.join(__dirname,'/css/')));

});

gulp.task('sass-watch',function(){
     gulp.watch(path.join(__dirname,'/sass/*.scss'),['sass'])
})

gulp.task('default',['sass-watch']);