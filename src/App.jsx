import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = parseInt(count);
    setParagraphs(text.slice(0, number));
  };

  return (
    <main>
      <section className="section-center">
        <h4>tired of boring lorem ipsum?</h4>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="text">paragraphs:</label>
          <input
            type="number"
            id="text"
            min="1"
            max="8"
            step="1"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
        <article className="lorem-text">
          {paragraphs.map((paragraph) => {
            return <p key={nanoid()}>{paragraph}</p>;
          })}
        </article>
      </section>
    </main>
  );
};
export default App;
