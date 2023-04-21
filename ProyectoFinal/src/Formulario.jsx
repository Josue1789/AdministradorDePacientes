import React, { useState } from "react";
import './Formulario.css'

function Formulario(){
    const [paciente, setPasciente]=useState([])
    const [mascota, setMascota]=useState("")
    const [dueño, setDueño]=useState("")

    function agregarPaciente(){
        setPasciente([...paciente,mascota])
        setMascota("")
        setDueño("")
    }

    return(
        <div className="Formulario">
            <form className="inputFormulario" action="">
                <label htmlFor="">Nombre Mascota</label>
                <input onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type="text" />
                <label htmlFor="">Nombre Dueño</label>
                <input onChange={(e)=>{setDueño(e.target.value)}} value={dueño} type="text" />
                <button onClick={agregarPaciente} type="submit">Agregar</button>
            </form>
        </div>
        
    )
}

export default Formulario