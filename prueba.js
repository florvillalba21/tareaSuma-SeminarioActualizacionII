const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 4000

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "index.html");
})


app.post('/', (req, res) => {
  const suma = parseInt(req.body.num1) + parseInt(req.body.num2);
  res.send("<div>"+suma +"</div>");
  console.log(suma)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})