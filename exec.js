var app = require('express')()
    //  .use(siofu.router)
    //    .listen(5000);
var uuid = require('uuid')
// var fs = require('fs.extra')
var mkdirp = require('mkdirp')
var exec = require("child_process").exec
var siofu = require("socketio-file-upload")
app.set('view engine', 'pug')
app.get('/', function(req, res) {
    res.render("index")
})

exec("cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r\nslic3r-console.exe\nslic3r teensy.stl --output slic3r-mswin-x64-1-2-9a-stable/Slic3r", function(err, out) {
    if (err) {
        throw err
    }
    upload()
    console.log("finished")
    console.log(out)
})
app.listen(6969, () => {
    console.log('3D printer station is listening on port 6969')
})

function upload(stl) {
    var path = __dirname + "/jobs/"
    var stluuid = uuid.v4()
    var jobuuid = uuid.v4()
    var gcoudeuuid = uuid.v4()
    var folder = path+jobuuid+'/'
    fs.mkdirs(folder, function(err) {
        if (err) {
            console.log(err);
        }
    })
    fs.copy(stl, folder + suuid + ".stl", function(e) {
        if (e) {
            console.log(e);
            loadViewer()
        }
    })
}

function loadViewer() {

}
