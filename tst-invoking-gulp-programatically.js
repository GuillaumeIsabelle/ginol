var gulp = require('gulp')	,
	notify = require("gulp-notify");

function myFunc(done) {
  // eg: copy *.js files into `./dist`
  gulp.src('./')
  .pipe(notify("hello") 
    );
}

// run our custom build
myFunc(function () {
  console.log('Done!');
});

