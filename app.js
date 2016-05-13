var app=require('express')()


// app.get('/hello', (req, res) => {
//   res.send('hi yALL')
// })
app.set('view engine', 'pug')
app.use(express.static('www'))

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});



app.listen(3000, () => {
  console.log('3D printer station is listening on port 3000')
})
