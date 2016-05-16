var app = require('express')()
    // .use(siofu.router)
    //     .listen(3000);
var uuid = require('uuid');
var exec = require("child_process").exec;
var siofu = require("socketio-file-upload");
var folder = uuid.v4();
var stl = uuid.v4();
var gcode = uuid.v4();

app.engine('pug', require('pug').__express);
app.get('index', function(req,res){
  res.render("index.pug")
})
/*var command = "cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r\n"
command += "slic3r-console.exe\n"
command += "slic3r teensy.stl --output slic3r-mswin-x64-1-2-9a-stable/Slic3r"
*/
//cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r\nslic3r-console.exe\nslic3r teensy.stl --output slic3r-mswin-x64-1-2-9a-stable/Slic3r
exec("cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r\nslic3r-console.exe\nslic3r teensy.stl --output slic3r-mswin-x64-1-2-9a-stable/Slic3r", function(err, out) {
    if (err) {
        throw err;
    }

    console.log("finished");
    console.log(out);
})

app.listen(3000, () => {
    console.log('3D printer station is listening on port 3000')
})
