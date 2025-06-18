/* Styling */
import "./App.css";

/* Imports */
import Disney from "/assets/baixados.jfif";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

export default function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 1, brand: "Chevrolet", color: "Branco", newCar: false, km: 12200 },
    { id: 1, brand: "Ford", color: "Vermelho", newCar: true, km: 400 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  return (
    <div>
      <h1>Avançando em React</h1>
      {/* Imagem em Public */}
      <div>
        <p>Essa é a imagem em Public!</p>
        <img src="/baixados (1).jfif" alt="Disney" />
      </div>
      {/* Imagem em Assets */}
      <div>
        <p>Essa é a imagem em Assets!</p>
        <img src={Disney} alt="Disney" />
      </div>

      <div>
        {/* Componentes */}
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* Props */}
        <ShowUserName name="Guilherme" age="21" function="Programmer" />
        {/* Destructuring */}
        <CarDetails brand="Ferrari" km={13000} color="red" newCar={false} />
        {/* Reaproveitando Dados */}
        <CarDetails brand="VW" km={10000} color="blue" newCar={true} />
        <CarDetails brand="Fiat" km={12000} color="black" newCar={false} />
        {/*Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}

        {/* Fragments */}
        <Fragment propFragment="Funciona" />

        {/* Children */}
        <Container myValue="testing">
          <p>Este é o conteúdo</p>
        </Container>
        
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />

        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>

        {/* Tarefa 4 */}
        <UserDetails name="Guilherme" age="16" workTitle="Programmer" />
      </div>
    </div>
  );
}
