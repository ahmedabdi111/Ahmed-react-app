import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{backgroundColor:"yellow"}}>
      <h2>Count: {count}</h2>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Decrease</button> */}
      <button onClick={() => setCount(count + 1)} style={{ backgroundColor: '#f1c40f' }}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ backgroundColor: '#f39c12' }}>Decrease</button>

    </div>
  );
}

export default Counter;
