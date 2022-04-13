import { useState, useEffect } from "react";
import axios from "axios";
import "./Quote.css";
function Quote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.quotable.io/random?maxLength=80"
        );
        setQuote(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div className="quote-wrapper mb-9">
      <p className="quote-content">"{quote.content}"</p>
      <p className="quote-author">By {quote.author}</p>
    </div>
  );
}

export { Quote };
