#!/usr/bin/env node
/** Guillaume Isabelle GINOL
 * Vision: Simple notification are received and a simple command generates them

 * Current Reality: Gulp notify mastery
 */


var gulp = require("gulp");

var	notify = require("gulp-notify");

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





