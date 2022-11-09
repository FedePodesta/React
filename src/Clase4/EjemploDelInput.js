import { useState } from "react"

function EjemploDelInput(){

    const [nombre, setNombre] = useState();

    const guardarNombre = (event) => {
        //del objeto evento que recibo de js saco el elemento sobre el que ocurrio el evento y luego le pido al imput el valor que tiene dentro
        let nombreIngresado = event.target.value
        setNombre(nombreIngresado)
    }

    return (
        <div>
            <input type="text" value={nombre} onChange={(event)=>{guardarNombre(event)}}/>
            {`${nombre}`}
        </div>
    )
}

export default EjemploDelInput