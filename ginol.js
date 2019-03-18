var gulp = require("gulp"),
	notify = require("gulp-notify");

var args = process.argv.slice(2);

var msg = args[0];

console.log(msg);

function myFunc(done) {
  
  gulp.src('./')
  .pipe(notify(msg) 
    );
}

// run our custom build
myFunc(function () {
  console.log(msg + '\nDone!');
});





