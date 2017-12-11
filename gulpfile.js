let gulp = require("gulp");
let uglify = require("gulp-uglify");
let pump = require("pump");
let minifyCss = require("gulp-minify-css");

gulp.task('compress-js', function(cb) {
  pump([
    gulp.src('assets/js/*.js'),
    uglify(),
    gulp.dest('dist')
  ],
  cb
  );
});

gulp.task('minify-css', function() {
  gulp.src("dist/*.css")
  .pipe(minifyCss())
  .pipe(gulp.dest('dist'));
});
