import { useState } from 'react';

function Inputer() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value); // reads user input
  };

  return (
    <div style={{ border: '2px solid black', padding: '5px', borderRadius: '4px', margin: "20px"}}>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Inputer;