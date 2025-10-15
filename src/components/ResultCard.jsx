// src/components/ResultCard.jsx
export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "1rem",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <p style={{ whiteSpace: "pre-line" }}>{result}</p>
    </div>
  );
}
