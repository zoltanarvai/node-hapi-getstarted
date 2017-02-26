const gulp = require('gulp');
const mocha = require('gulp-mocha');


gulp.task('test', () => {
    return gulp.src(['test/specs/**/*.spec.js'])
        .pipe(mocha())
});

gulp.task('tdd', () => {
    return gulp.watch(['src/**/*.js','test/specs/**/*.spec.js'], ['test']);
});