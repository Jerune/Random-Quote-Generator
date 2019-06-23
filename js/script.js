/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//Array of colors that can be used as background color for the website and button

var colors = [
  '#1E8FB9',
  '#d6e160',
  '#36b55c',
  '#F3CF96',
  '#b961eb'
];

//Array of objects storing a quote, author, citation(optional) and date(optional).

var quotes = [
  {
  quote:'Als je je ogen opent na een nacht slapen, besef je dan: deze nieuwe dag is een heerlijk kado',
  source:'Merijn Roubroeks',
  date:'5 juni 2019'
  },
  {
  quote:'Jij bent de belangrijkste persoon in je leven. Zorg goed voor jezelf',
  source:'Merijn Roubroeks',
  date:'26 mei 2019'
  },
  {
  quote:'Ik ben niet wat mij is overkomen; ik ben wat ik verkies te worden',
  source:'Merijn Roubroeks',
  citation:'Carl Gustav Jung',
  date:'15 mei 2019'
  },
  {
  quote:'Het meest dierbare is als je met jezelf en met je dierbaren in vrede kan zijn',
  source:'Merijn Roubroeks',
  date:'5 mei 2019'
  },
  {
  quote:'Alles wat je nu doet, past bij je. Als je daar in gelooft, dan ontvouwt het juiste pad zich vanzelf',
  source:'Merijn Roubroeks',    
  date:'16 april 2019'
  },
  {
  quote:'Praat je wel eens tegen jezelf? Vraag jezelf dan eens af; Wie ben jij en wie praat er?',
  source:'Merijn Roubroeks',    
  date:'27 maart 2019'
  },
  {
  quote:'De vraag of iets realistisch is kan worden beantwoord met: Wil jij er werk van maken om iets realiteit te laten worden?',
  source:'Merijn Roubroeks',    
  date:'12 maart 2019'
  },
  {
  quote:'Lach naar mensen, zonder reden',
  source:'Merijn Roubroeks',    
  date:'7 maart 2019'
  },
  {
  quote:'In plaats van je mogelijke bestemming, geniet van je pad',
  source:'Merijn Roubroeks',    
  date:'26 februari 2019'
  },
  {
  quote:'Wie zou je zijn zonder het gevoel dat je indruk moet maken?',
  source:'Merijn Roubroeks',    
  date:'20 februari 2019'
  },
  {
  quote:'Innerlijke vrede is pas mogelijk wanneer we de illusie van controle loslaten',
  source:'Merijn Roubroeks',    
  date:'6 februari 2019'
  },
];


/***
Creates a random number between 0 and the length of the quotes array 
and returns the object that is stored in this array.
***/

function getRandomQuote(){
  var randomNumber = Math.round(Math.random() * (quotes.length -1));
  return quotes[randomNumber];
}

function getRandomColor(){
  var randomNumber = Math.round(Math.random() * (colors.length -1));
  return colors[randomNumber];
}

/***
Prints the available information from the randomly selected quotes object 
inside of html code onto the page.
***/
function printQuote(){
  var html = '';
  var newQuote = getRandomQuote();
  var newColor = getRandomColor();
  html += '<p class="quote">'+ newQuote.quote + '</p><p class="source">'+ newQuote.source ;
  if(newQuote.citation){
    html +='<span class="citation">' + newQuote.citation + '</span>';
  };
  if(newQuote.date){
    html +='<span class="year">' + newQuote.date + '</span>';
  };
  html += '</p>';
  document.getElementById("quote-box").innerHTML = html;
  document.getElementById("loadQuote").style.backgroundColor = newColor;
  document.body.style.backgroundColor = newColor;
  return html;
}
// Prints quote to the page when page is loaded for the first time

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);