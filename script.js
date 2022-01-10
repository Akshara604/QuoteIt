fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const quote = data[Math.floor(Math.random()*data.length)].text;

    const Quote = document.getElementById("quoteText");

    Quote.innerHTML = quote;
   
  });