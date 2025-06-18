import { useState } from "react";
const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Cleber");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, sim!</p>}
      <h1>If ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}

      <button onClick={() => setName("João")}>Clica aqui para deixar como João!</button>
      <button onClick={() => setName("Não João")}>Clica aqui para tirar o João!</button>
    </div>
  );
};

export default ConditionalRender;
