import './App.css'
import MyForm from './components/MyForm'

export default function App() {
  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{name: "Josias", email: "josias@gmail.com", bio: "Essa é a minha bio"}}/>
    </div>
  
  )
}
