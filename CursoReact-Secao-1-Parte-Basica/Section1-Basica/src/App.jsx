//components
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge"
//styles
import "./App.css";

export default function App() {
  return (
    <div classname="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}
