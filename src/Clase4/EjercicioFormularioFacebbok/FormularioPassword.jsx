import { useState } from "react"

function InputNombre(){

        const [password, setPassword] = useState()

    return(

        <input style={{margin:"10px"}}  type="text" placeholder="Nombre o Email o Telefono" value={password} onChange={(event)=>(setPassword(event.target.value))}/>
    )
}

export default InputNombre