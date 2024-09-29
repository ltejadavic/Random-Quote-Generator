import React, { useState } from 'react';
import quotes from './QuotesDatabase';  // Importar las citas
import './RandomQuote.css';  // Importar el archivo CSS para estilos

function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);  // Inicializa con la primera cita
  const [bgColor, setBgColor] = useState('#282c34');  // Color de fondo predeterminado

  // Función para generar una nueva cita y cambiar el color
  const generateNewQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].quote === quote.quote);  // Asegurarse de que la cita no se repita

    setQuote(quotes[randomIndex]);

    // Generar un nuevo color de fondo
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div className="quote-container" style={{ backgroundColor: bgColor }}>
      <div className="quote-box">
        <h1 style={{ color: bgColor }}>
          "{quote.quote}"
        </h1>
        <p style={{ color: bgColor }}>
          - {quote.author ? quote.author : 'Unknown'} -
        </p>
        <button
          className="new-quote-btn"
          onClick={generateNewQuote}
          style={{ backgroundColor: bgColor, color: '#fff' }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;