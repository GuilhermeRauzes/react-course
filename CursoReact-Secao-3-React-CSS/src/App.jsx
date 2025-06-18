import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import {UseState} from "react";
import Title from "./components/Title";

export default function App() {
  const n = 15;
  const redTitle = false;
  const [name] = useState("Gui");
  return (
    <div>
      {/*CSS Global */}
      <h1>React com CSS</h1>
      {/*CSS de Componente */}
      <MyComponent />
      <p>Esse paragrafo é do App.js</p>
      {/*CSS Inline */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          backgroundColor: "pink",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>

      {/*CSS Inline Dinamico*/}
      <h2
        style={
          n > 10
            ? {
                color: "magenta",
                backgroundColor: "black",
                textAlign: "center",
              }
            : { color: "pink", backgroundColor: "black", textAlign: "center" }
        }
      >
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "black", textAlign: "center" }
            : { color: "blue", backgroundColor: "red", textAlign: "center" }
        }
      >
        CSS Dinâmico
      </h2>

      {/*Class Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse titulo vai ter classe dinamica</h2>

      {/*CSS Modules*/}
      <Title />
    </div>
  );
}
