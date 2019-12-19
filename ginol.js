#!/usr/bin/env node
/** Guillaume Isabelle GINOL
 * Vision: Simple notification are received and a simple command generates them
 
 * Current Reality: Gulp notify mastery
 */

var defaultTimeOut = 7;

// var gulp = require("gulp");
// var	notify = require("gulp-notify");

const notifier = require('node-notifier');

const path = require('path');

// String
//notifier.notify('Message');

var args = process.argv.slice(2);



var state = 0;
var msg = args[0];

if (args[0] == "-f" || args[0] == "--f" || args[0] == "--fail" || args[0] == "--failure") {
  state = -1;
  msg = args[1];
}
if (args[0] == "-s" || args[0] == "--s" || args[0] == "--success" || args[0] == "--succeeding") {
  state = 1;
  msg = args[1];
}
//@STCGoal Argument for FAILURE -f
//@STCGoal Argument for Success  -s
//@Result Green = Success

var titleSuffix = "Ginol msg";
var title = titleSuffix;
var icon = 'Annotate_info.ico';


if (state == 0) { console.log(msg); }
else if (state == -1) {
  console.warn("FAILURE:: " + msg);
  title = "FAILURE::" + titleSuffix; icon = "Annotate_Warning.ico";
}
else if (state == 1) { console.log("SUCCESS:: " + msg); title = "SUCCESS::" + titleSuffix; icon = "112_RightArrowShort_Green.ico"; }



function notifyFunc(done) {

  // gulp.src('./')
  // .pipe(notify(msg,options) 
  //   );

  var iconpath = path.join(__dirname, icon);
  console.log(iconpath);
  // Object
  notifier.notify({
    title: title,
    message: msg,
    timeout: defaultTimeOut,
    //wait: false,
    icon: iconpath, // Absolute path (doesn't work on balloons)
    //  icon: icon, // Absolute Path to Triggering Icon
    // open: "http://guillaumeisabelle.com"
  });
}

// run our custom build
notifyFunc(function () {
  console.log(msg + '\nDone!');
});





