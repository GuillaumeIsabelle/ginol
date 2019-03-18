var gulp = require("gulp"),
	notify = require("gulp-notify");

var args = process.argv.slice(2);

var msg = args[0];

console.log(msg);


gulp.task('notify',function()
	{
		return (gulp.src("./")
			.pipe(
				notify(msg))
		);
	});

gulp.runTask('notify');



