/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    source: "Shoyo Hinata",
    citation: "Haikyuu",
  },
  {
    quote: "Human strength lies in the ability to change yourself.",
    source: "Saitama",
    citation: "One Punch Man",
  },
  {
    quote: "A dropout will beat a genius through hard work.",
    source: "Rock Lee",
    citation: "Naruto",
  },
  {
    quote:
      "Forgetting is like a wound. The wound may heal, but it has already left a scar.",
    source: "Monkey D. Luffy",
    citation: "One Piece",
  },
  {
    quote:
      "When you lose sight of your path, listen for the destination in your heart.",
    source: "Allen Walker",
    citation: "D.Gray Man",
  },
  {
    quote:
      "Enjoy your life today. Yesterday is gone, and tomorrow might never come. ",
    source: "Takeshi Yamamoto",
    citation: "Katekyo Hitman Reborn",
  },
  {
    quote: "Never trust anyone too much; remember, the devil was once an angel",
    source: "Kaneki",
    citation: "Tokyo Ghoul",
  },
  {
    quote: "How can you keep moving forward if you keep regretting the past?",
    source: "Edward Elric",
    citation: "Fullmetal Alchemist: Brotherhood",
  },
  {
    quote: "Being lonely is more painful than getting hurt.",
    source: "Monkey D. Luffy",
    citation: "One Piece",
  },
  {
    quote:
      "It’s okay to feel depressed. It takes time to overcome things. And then, by taking that time, you just start moving forward again. That’s just what humans do.",
    source: "Mondo Oowada",
    citation: "Danganronpa: Trigger Happy Havoc",
  },
  {
    quote:
      "You focus on the trivial and lose sight of what is most important; change is impossible in this fog of ignorance.",
    source: "Itachi Uchiha",
    citation: "Naruto",
  },
  {
    quote:
      "It’s painful when you get disappointed by the person you look up to",
    source: "Misaki Ayuzawa",
    citation: "Kaichou wa Maid-sama!",
  },
  {
    quote: "Sometimes, we have to look beyond what we want and do what’s best.",
    source: "Piccolo",
    citation: "Dragon Ball Z",
  },
  {
    quote: "If your life can change once, your life can change again.",
    source: "Sanae Furukawa",
    citation: "Clannad",
  },
  {
    quote:
      "Giving up kills people. When people reject giving up… they finally win the right to transcend humanity.",
    source: "Alucard",
    citation: "Hellsing",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  const randomQoute = quotes[randomNumber];
  return randomQoute;
}
/***
 * `printQuote` function
 ***/
function printQuote() {
  const quoteObject = getRandomQuote();

  document.getElementById("quote-box").innerHTML = `
  <p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}
    <span class="citation">${quoteObject.citation}</span>
    </p>`;
}
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
