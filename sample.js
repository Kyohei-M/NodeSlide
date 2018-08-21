const bodyParser = require('body-parser')
var express = require('express')
var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(process.env.PORT || 8080, () => { console.log('Example app listening!') })

app.get('/', function(req, res) {
  const body = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>app.js</title>
      </head>
      <body>
        <form method="post">
          <input type="text" id="text1" name="text" value="Sample">
          <input type="submit">
        </form>
      </body>
    </html>
  `
  res.send(body)
})

app.post('/', function(req, res) {
  console.log(req.body.text + " is posted")
  res.send("text = " + req.body.text)
})