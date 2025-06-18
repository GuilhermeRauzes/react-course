/*Props pode ser em states, constantes e de Pai/Filho! */
const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuário é: {props.name}</h2>
      <h2>A idade dele é: {props.age}</h2>
      <h2>A função dele é: {props.function}</h2>
    </div>
  );
};

export default ShowUserName;
