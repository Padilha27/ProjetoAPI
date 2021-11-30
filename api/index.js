const express = require ('express')
const bodyParser = require ('body-parser')

const app = express ()

app.use (bodyParser.json())

const port = 3306

app.get('/teste', (req,res) => res
.status(200) 
.send({mnsagem: 'boas vindas'}))

app.listen(port,() => console.log (`servidor rodando porta ${port}`))

module.exports = app