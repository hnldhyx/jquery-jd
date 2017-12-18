var gulp  = require('gulp');
gulp.task('copy', function(){
	return gulp.src(['hyxui/**/*.*'])
			.pipe(gulp.dest('build/hyxui'));
})