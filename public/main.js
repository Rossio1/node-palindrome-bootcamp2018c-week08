const submit = document.getElementById('submit')

submit.addEventListener('click', function(e){
  e.preventDefault()
  const word = document.getElementById('word').value
  console.log(word)
  fetch('word', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'},
  body: JSON.stringify({
    'word': word
  })
})
.then(response => {
  console.log(response)
  // response.json()
})
})
