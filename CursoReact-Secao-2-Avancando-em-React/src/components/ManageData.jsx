import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar váriavel</button>
      <p>Valor novo: {number}</p>
      <button onClick={() => setNumber(25)}>Mudar o state</button>
    </div>
  );
};

export default ManageData;
