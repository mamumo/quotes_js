window.onload = main;

function main(){
  console.log("window is loaded")

  var quotes = ["Hi there- Marie", "Today is Monday- Tony", "Tomorrow is Tuesday - Jim"]

  for( var i = 0; i <quotes.length; i++){
    appendQuote(quotes[i])
  }

  var form = document.getElementById("quote-form");
  form.onsubmit = function(event) {
    event.preventDefault();
    console.log(":)")
    handleClick();
  }
}

function handleClick() {
  console.log('I was clicked!!')
  var fullQuote = document.getElementById('quote-text-input')
  var authorQuote = document.getElementById('author-text-input')
  var userInput1 = fullQuote.value
  var userInput2 = authorQuote.value
  console.log( 'user input', userInput1, userInput2);
  appendQuote(userInput1 + " " + "-" + " " + userInput2);
  fullQuote.value = '';
  authorQuote.value = '';
 }

function appendQuote(quote) {
  var quotesList = document.getElementById('quote-list')
  var li = document.createElement('li');
  li.innerText = quote;
  quotesList.appendChild(li)
}

// tbc

function deleteQuote(quote) {
  var quotesList = document.getElementById('quote-list')
  var li = document.getElementById('li');
  li.innerText = quote;
  quotesList.removeChild(li);
}



