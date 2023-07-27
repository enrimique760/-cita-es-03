const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford"
    },
    
    {
        quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
        author: "John Lennon"
      },
      {
        quote: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
        author: "Winston Churchill"
      },
      {
        quote: "A mente é tudo. Você se torna aquilo que você acredita.",
        author: "Buddha"
      },
      {
        quote: "Ou você corre o dia ou o dia corre você.",
        author: "Jim Rohn"
      },
      {
        quote: "A verdadeira sabedoria está em saber que você não sabe nada.",
        author: "Sócrates"
      },
      {
        quote: "O maior prazer da vida é fazer aquilo que as pessoas dizem que você não é capaz.",
        author: "Walter Bagehot"
      }
    // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();