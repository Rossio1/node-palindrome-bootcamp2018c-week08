const express         = require('express')
const app             = express()
const port            = process.env.PORT || 3000
const bodyParser      = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/index.html')
});

app.post('/word',(req, res) => {
  console.log(req.body)
  const word = req.body.word
  if(word == word.split('').reverse().join('')){
    return res.send('Its a palindrome')
  }else{
    return res.send('Not a palindrome')
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
