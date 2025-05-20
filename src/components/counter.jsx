import { useState } from "react";

export function Tiriye() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)} style={{ backgroundColor: '#f1c40f' }}>Decrease</button>
      <button onClick={() => setCount(count + 1)} style={{ backgroundColor: '#f39c12' }}>Increase</button>
    </div>
  );
}


