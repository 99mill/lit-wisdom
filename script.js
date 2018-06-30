// constant variables
const newQuote = document.querySelector('.generate');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// End point depreciated?
// const url = 'https://random-quote-generator.herokuapp.com/api/quotes/random'; 
const url = 'https://talaikis.com/api/quotes/random/';

// load quote on load or fetch new quote when prompted
window.onload = contingencyQuote;
newQuote.addEventListener('click', contingencyQuote);

// fetch quote from api and display new text
function generateQuote() {
    fetch(url)
    .then(r => r.json())
    .then(data => {
        quote.textContent = data.quote;
        author.textContent = data.author;
    })
    .catch(e => {
        contingencyQuote();
        console.log(e)}
    );
}

// if the api depreciates or throws and error
function contingencyQuote() {
    var randQuote = list[Math.floor( Math.random() * (list.length + 1)) ];
    quote.textContent = randQuote.quote;
    author.textContent = randQuote.author; 
};