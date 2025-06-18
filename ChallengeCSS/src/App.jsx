import './App.css'
import Car from './components/Car'

export default function App() {
  const MyCars = [
    {name: "Fusca", age: 1970, km: 123456},
    {name: "Gol", age: 1980, km: 123456},
    {name: "Palio", age: 1990, km: 123456},
    {name: "Celta", age: 2000, km: 123456},
    {name: "Corsa", age: 2010, km: 123456},
    ];
    
  return (
    <div>
      <h1>Showroom de carros</h1>
      <div className='car-container'>
        {MyCars.map((car) => 
          <Car car={car}/>
      )}
      </div>
    </div>
  )
}
