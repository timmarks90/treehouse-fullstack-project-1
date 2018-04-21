// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Quotes to display
var quotes = [
  {
    quote: "You only live once, but if you do it right, once is enough",
    source: "Mae West",
    tag: "Life"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi",
    citation: "American Journal of Education",
    year: 1877,
    tag: "Life"
  },
  {
    quote: "If a man does his best, what else is there?",
    source: "General George S. Patton",
    year: 1945,
    tag: "Drive"
  },
  {
    quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    source: "Barack Obama",
    citation: "APA Style Citation",
    year: 2018,
    tag: "Drive"
  },
  {
    quote: "Tomorrow, is the first blank page of a 365 page book. Write a good one.",
    source: "Brad Paisley",
    tag: "Future"
  }
];

// Log quotes
console.log(quotes);

// Select random quote from quotes array and return to the getRandomQuote function
function getRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};

// On click of button, print Random quote with properties to page
function printQuote() {
  // Call getRandomQuote function and store returned quote object in a variable
  var changeQuote = getRandomQuote();

  var html = ' ';
  // Swap quote
  html += '<p class="quote">' + changeQuote.quote + '</p>';

  // Swap source
  html += '<p class="source">' + changeQuote.source ;
  // If citation exists, add it
  if (changeQuote.citation) {
    html += '<span class="citation">' + changeQuote.citation + '</span>';
  }
  // If year exists, add it
  if (changeQuote.year) {
    html += '<span class="year">' + changeQuote.year + '</span>';
  }
  // If tag exists, add it
  if (changeQuote.tag) {
    html += '<span class="tag">' + changeQuote.tag + '</span>';
  }
  // Close paragraph
  html += '</p>';

  // Assign quoteBox variable to html Id
  document.getElementById('quote-box').innerHTML = html;

  // Change page background color on click of button
  function changeBackgroundColor() {
    // Create array of colors
    var colors = ['#00D1FF', '#FF4D4D', '#4BC2C5', '#F56A47', '#6C567B', '#375A7F', '#E95280', '#22559C','#0E9577', '#EA8F79']
    // Assign random color from color array to variable
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    // change the body css background color
    var changeColor = document.body.style.backgroundColor = randomColor;
    return changeColor;
  }
  // Invoke change color function
  changeBackgroundColor();

  // Reset timer
  clearInterval(refreshQuote);
  startTimer();
}
// ----------- End onClick button functionality with printQuote function -----------

// Autorefresh quote on 10s timer
var refreshQuote;

function startTimer() {
  refreshQuote = setInterval(printQuote, 10000);
}
// Start timer
startTimer();
