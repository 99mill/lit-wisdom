const newQuote = document.querySelector('.generate');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const url = 'https://random-quote-generator.herokuapp.com/api/quotes/random';

window.onload = generateQuote;
newQuote.addEventListener('click', generateQuote);

function generateQuote() {
    fetch(url)
    .then(r => r.json())
    .then(function(data) {
        var text = data.quote;
        quote.textContent = data.quote;
        author.textContent = data.author;  
    })
    .catch(function(error) {
      console.log(error);
    });
    console.log('works');
    
}







//
