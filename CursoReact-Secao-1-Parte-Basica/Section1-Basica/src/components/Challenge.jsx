const Challenge = () => {
  const a = 10;
  const b = 15;
  const soma = a + b;

  return (
    <div>
      <p>O valor de A é: {a}</p>
      <p>O valor de B é: {b}</p>
      <h1>A soma é: {soma} </h1>
      <button
        onClick={() => {
          console.log("A soma foi " + soma);
        }}
      >
        Clique aqui para somar no console!
      </button>
    </div>
  );
};

export default Challenge;
