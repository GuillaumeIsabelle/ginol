#!/usr/bin/env node
/** Guillaume Isabelle GINOL
 * Vision: Simple notification are received and a simple command generates them

 * Current Reality: Gulp notify mastery
 */


var gulp = require("gulp");

var	notify = require("gulp-notify");

var args = process.argv.slice(2);
var options = {onLast : true};


var state = 0;
var msg = args[0];

if (args[0]== "-f" || args[0]== "--f" ||args[0]== "--fail" || args[0]== "--failure"  )
 { state=-1;
  msg = args[1];
}
if (args[0]== "-s" || args[0]== "--s" ||args[0]== "--success" || args[0]== "--succeeding"  )
 { state=1;
  msg = args[1];
}
//@STCGoal Argument for FAILURE -f
//@STCGoal Argument for Success  -s
//@Result Green = Success

if (state == 0)
console.log(msg);
else if (state == -1)
console.warn("FAILURE:: " + msg);
else if (state==1)
console.log("SUCCESS:: " + msg);

function myFunc(done) {
  
  gulp.src('./')
  .pipe(notify(msg,options) 
    );
}

// run our custom build
myFunc(function () {
  console.log(msg + '\nDone!');
});





