import React, { useState } from "react";
import './Formulario.css'

    function Formulario() {
        const [pacientes, setPacientes] = useState([])
        const [mascota, setMascota] = useState("")
        const [dueño, setDueño] = useState("")
        const [fecha, setFecha]=useState("")
        const [hora, setHora]=useState("")
        const [coms, setComs]=useState("")

    function agregarPaciente(){
        const informacion={
            mascota,
            dueño,
            fecha,
            hora,
            coms
        }
        setPacientes([...pacientes,informacion])
        setMascota("")
        setDueño("")
        setFecha("")
        setHora("")
        setComs("")
}

    return (
        <div>
            <form className="inputFormulario" action="">
                <label htmlFor="mascota">Nombre Mascota </label>
                <input id="mascota" onChange={(e) => { setMascota(e.target.value) }} value={mascota} type="text" />
                <label htmlFor="">Nombre Dueño</label>
                <input onChange={(e) => { setDueño(e.target.value) }} value={dueño} type="text" />
                <label htmlFor="">Fecha de Ingreso</label>
                <input onChange={(e)=>{setFecha(e.target.value)}} value={fecha} type="date" />
                <label htmlFor="">Hora de Ingreso</label>
                <input onChange={(e)=>{setHora(e.target.value)}} value={hora} type="time" />
                <label htmlFor="">Comentarios adicionales</label>
                <textarea onChange={(e)=>{setComs(e.target.value)}} value={coms} type="text" />
                <button onClick={agregarPaciente} type='button'>Agregar</button>
            </form>
        </div>
    )
}

export default Formulario