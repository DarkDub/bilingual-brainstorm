// src/components/BrainstormForm.jsx
import { useState } from "react";

export default function BrainstormForm({ onGenerate }) {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    onGenerate(idea);
    setIdea("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <input
        type="text"
        placeholder="Escribe tu idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        style={{
          padding: "0.7rem 1rem",
          width: "70%",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.7rem 1.2rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#1e40af")}
        onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
      >
        Generar
      </button>
    </form>
  );
}
