import React, { useState } from "react";
import "./Paciente.css"

function Paciente({pacientes, setPacientes, mascota, dueño, fecha, hora, coms}){
    
    const eliminarCita=()=>{
        const newPacientes=pacientes.filter(paciente => paciente.dueño != dueño);
        setPacientes(newPacientes)
    }

    return(
        <div className="pacienteContainer">
            <h2>Nombre:{mascota}</h2>
            <h2>Dueño: {dueño}</h2>
            <h2>Fecha:{fecha}</h2>
            <h2>Hora:{hora}</h2>
            <h2>Sintomas:{coms}</h2>
            <button onClick={eliminarCita}>Eliminar Cita</button>
        </div> 
    )
}

export default Paciente