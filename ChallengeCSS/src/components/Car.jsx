import Styles from "./Car.module.css";

const Car = ({car}) => {
  return (
    <div className={Styles.card}>
      <h1>{car.name}</h1>
      <p>Ano: {car.age}</p>
      <p>KM: {car.km}</p>
    </div>
  );
};

export default Car;
