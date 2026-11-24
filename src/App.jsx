import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(["learning React", "debergement l projet"]);

  const add = () => {
    if (!text.trim()) return;
    setTasks([...tasks, text]);
    setText("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "3rem auto", fontFamily: "sans-serif" }}>
      <h1>Mes tâches</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="nouvelle jdida"
      />
      <button onClick={add}>Ajouter</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}{" "}
            <button onClick={() => setTasks(tasks.filter((_, j) => j !== i))}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}