  var app = require('express')();
  var Queue = [1, 2];
  //use(siofu.router);
  var uuid = require('uuid');
  var fs = require('fs.extra');
  var mkdirp = require('mkdirp');
  var exec = require("child_process").exec;
  var siofu = require("socketio-file-upload");
  app.set('view engine', 'pug');
  app.get('/', function(req, res) {
      res.render("index");
  })

<<<<<<< HEAD
  var uploader = new siofu();
  uploader.dir = "/path/to/save/uploads";

  app.use(siofu.router)
  app.listen(2001, () => {
      console.log('3D printer station is listening on port 2001');
  })

  function upload(stl) {
      var path = __dirname + "/jobs/"
      var stlUUID = uuid.v4();
      var jobUUID = uuid.v4();
      var gcodeUUID = uuid.v4();
      var folder = path + jobUUID + '/'
      fs.mkdirs(folder, function(err) {
          if (err) {
              console.log(err);
          }
      })
      var fileloc = folder.concat(stlUUID)
      fs.copy(fileloc + ".stl", function(e) {
          if (e) {
              console.log(e);
          }
      })
  }
=======
  app.listen(2001, () => {
      console.log('3D printer station is listening on port 2001');
  })

  function upload(stl) {
      var path = __dirname + "/jobs/"
      var stluuid = uuid.v4();
      var jobuuid = uuid.v4();
      var gcodeuuid = uuid.v4();
      var folder = path + jobuuid + '/'
      fs.mkdirs(folder, function(err) {
          if (err) {
              console.log(err);
          }
      })
      var fileloc = folder.concat(stluuid)
      fs.copy(fileloc + ".stl", function(e) {
          if (e) {
              console.log(e);
          }
      })
  }

>>>>>>> origin/master

io.on("connection",function(socket){
  var uploader = new siofu();
  uploader.dir = "/upload";
  uploader.listen(socket)


<<<<<<< HEAD
})


  function Slice(stl, Bsettings, Csettings) {
      exec("cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r\nslic3r-console.exe" + "Slic3r " + stlUUID + ".stl " + "--load " + Bsettings + Csettings, function(err) {
=======
  function Slice(stl, Bsettings, Csettings) {
      exec("cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r\nslic3r-console.exe" + "Slic3r " + stluuid + ".stl " + "--load " + Bsettings + Csettings, function(err) {
>>>>>>> origin/master
          if (err) {
              throw err;
          }
      })
  }

<<<<<<< HEAD
  function priorityUtility(Importance, added, time, jobUUID) {
      var prio = (importace - added) / time;
=======
  function priorityUtility(Importance, added, time, jobuuid) {
      var prio = (importace - added)/ time;
>>>>>>> origin/master
      return jobuuid.prio;
  }
