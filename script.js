var quote =document.getElementById("quoteId")
var authorName =document.getElementById("authorId")

var quotes = [
    { text:"You only live once, but if you do it right, once is enough.",
     author:"Mae West" 
    },
    { text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
     },
    { text: "Be yourself; everyone else is already taken.",
    author: " Oscar Wilde" 
    },
    { text: "So many books, so little time.",
    author:"Frank Zappa"
    },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
     author: "Albert Einstein" 
    },
    {text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero" 
   }];
  
  function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
   
    document.getElementById("quoteId").textContent = `"${randomQuote.text}"`;
    document.getElementById("authorId").textContent = `--${randomQuote.author}`;
  }
  