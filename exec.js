var exec = require("child_process").exec;

exec("cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r;slic3r-console.exe; slic3r teensy.stl", function(err){
  if (err){
    throw err;
  }
});
