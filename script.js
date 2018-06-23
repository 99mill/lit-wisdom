// constant variables
const newQuote = document.querySelector('.generate');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const url = 'https://random-quote-generator.herokuapp.com/api/quotes/random';

// load quote on load or fetch new quote when prompted
window.onload = generateQuote;
newQuote.addEventListener('click', generateQuote);

// fetch quote from api and display new text
function generateQuote() {
    fetch(url)
    .then(r => r.json())
    .then(data => {
        quote.textContent = data.quote;
        author.textContent = data.author;  
    })
    .catch(e => console.log(e));
}