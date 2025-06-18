import MyComponent from "./MyComponent";

const FirstComponent = () => {
  return (
    <div>
      <h2>Meu primeiro componente</h2>
      <MyComponent />
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
