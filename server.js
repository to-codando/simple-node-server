const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000

app.use(cors())
app.use('/', express.static(__dirname + '/public'));
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const bancoDeDados = {
  names: ['Marciely', 'João', 'Enzo', 'Rodrigo']
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/names', function(req, res) {
  res.json({ names: bancoDeDados.names });
});

app.post('/names', function (req, res) {
  const body = req.body
  console.log(req.body)
  const { name } = body
  bancoDeDados.names.push(name)
  return res.json(bancoDeDados.names)
})