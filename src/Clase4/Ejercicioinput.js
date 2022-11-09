import { useState } from "react"

function Ejercicioinput(){

    const [contra, setContra] = useState("vacio");

    const guardarContra = (event) => {
        
        let contraIngresada = event.target.value
        setContra(contraIngresada)
    }

    return (
        <div>
            <input type="password" value={contra} onChange={(event)=>{guardarContra(event)}}/>
            {`${contra}`}
        </div>
    )
}

export default Ejercicioinput