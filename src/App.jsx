import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [ideas, setIdeas] = useState([]);

  const generateIdeas = () => {
    if (!input.trim()) return;

    const newIdeas = [
      { en: `Idea in English about "${input}"`, es: `Idea en español sobre "${input}"` },
      { en: `Creative concept in English for "${input}"`, es: `Concepto creativo en español para "${input}"` },
    ];
    setIdeas(newIdeas);
  };

  return (
    <div className="container">
      <h1>Bilingual Brainstorm 🌐</h1>
      <p>Generate creative ideas in English and Spanish</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your topic..."
      />
      <button onClick={generateIdeas}>Generate</button>

      <div className="ideas">
        {ideas.map((idea, index) => (
          <div key={index} className="idea">
            <p><strong>🇬🇧 {idea.en}</strong></p>
            <p>🇪🇸 {idea.es}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
