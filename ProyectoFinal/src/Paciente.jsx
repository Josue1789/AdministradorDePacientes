import React, { useState } from "react";
import "./Paciente.css"

function Paciente({mascota, dueño, fecha, hora, coms}){

    return(
        <div className="pacienteContainer">
            <h2>Nombre:{mascota}</h2>
            <h2>Dueño: {dueño}</h2>
            <h2>Fecha:{fecha}</h2>
            <h2>Hora:{hora}</h2>
            <h2>Sintomas:{coms}</h2>
        </div> 
    )
}

export default Paciente