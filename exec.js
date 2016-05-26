  var app = require('express')()
      //  .use(siofu.router)
  var uuid = require('uuid')
      // var fs = require('fs.extra')
  var mkdirp = require('mkdirp')
  var exec = require("child_process").exec
  var siofu = require("socketio-file-upload")
  app.set('view engine', 'pug')
  app.get('/', function(req, res) {
      res.render("index")
  })
  app.listen(2001, () => {
      console.log('3D printer station is listening on port 2001')
      console.log("go to localhost:2001");
  })

  function upload(stl) {
      var path = __dirname + "/jobs/"
      var stluuid = uuid.v4()
      var jobuuid = uuid.v4()
      var gcoudeuuid = uuid.v4()
      var folder = path + jobuuid + '/'
      fs.mkdirs(folder, function(err) {
              if (err) {
                  console.log(err);
              }
          }
      })

  fs.copy(stl, folder + suuid + ".stl", function(e) {
      if (e) {
          console.log(e);

      }
  })



  function loadViewer() {


  }

  function Slice(stl, Bsettings, Csettings) {
      exec("cd C:/Users/louieadamian/Documents/slic3r-mswin-x64-1-2-9a-stable/Slic3r\nslic3r-console.exe" + "Slic3r " + stluuid + ".stl " + "--load " + Bsettings + Csettings, function(err) {
              if (err) {
                  throw err
              }
              //upload()
              console.log("finished")
              console.log(err)
          )
      }
  }

  function addJob2Q() {}




  var job = {
      priority: "150",
      time: "10000000",
      added: "1020"
  }

  function sort() {

  }

  function sortingFunction(prioa, priob, timea, timeb, addeda, addedb) {
      if (prioa > priob) {
          if (timea > timeb) {
              if (timea - timeb >= 600000) {

              }
          } else if (timea < timeb) {

          }
          if (timeb - timea >= 600000) {}
      } else if (timea = timeb) {

      } else if (prioa < priob) {

      } else if (prioa = priob) {
          if (timea > timeb) {
              if
          }
      } else {
          return false
      }
  }
