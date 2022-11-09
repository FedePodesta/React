import { useState } from "react"

function Ejercicioinput2(){

    const [contra, setContra] = useState("vacio");

    const guardarContra = (event) => {
        
        let contraIngresada = event.target.value
        setContra(contraIngresada)
    }
    /*controlar que la passwo9rd tiene entre 3 y 5 caracteres y que inicia con mayuscula. sacan el primer caracter de la hook y lo guardan en una variable auxiliar, le aplican la propiedad upper pa convertirlo en mayuscula. si el resultado en esa variable auxiliar, es igual al primer caracter del hook significa que es */
    return (
        <div>
            <input type="password" value={contra} onChange={(event)=>{guardarContra(event)}}/>
            {`${contra}`}
        </div>
    )
}

export default Ejercicioinput2