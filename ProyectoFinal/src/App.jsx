import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Formulario from './Formulario'
import Paciente from './Paciente'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="App">
      <div>
        <Header titulo = {"Datos de Paciente"}/>
        <Formulario 
        pacientes = {pacientes} 
        setPacientes= {setPacientes}/>
      </div>
      <div>
      <Header titulo = {"Lista de Pacientes"}/>
      {pacientes.map((paciente)=>{
        return <Paciente mascota={paciente.mascota} dueño={paciente.dueño} fecha={paciente.fecha} 
        hora={paciente.hora} coms={paciente.coms}/>
      })}
      </div>
    </div>
  )
}

export default App
