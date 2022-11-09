import { useState } from "react"

function EjemploDelInput2(){

    const [nombre, setNombre] = useState("V por defecto");
    const [cumpleConOchoCaracteres, setCumpleConOchoCaracteres] = useState(true)
    const guardarNombre = (event) => {
        //del objeto evento que recibo de js saco el elemento sobre el que ocurrio el evento y luego le pido al imput el valor que tiene dentro
        let nombreIngresado = event.target.value
        setNombre(nombreIngresado)
        tieneOchoCaracteresMas()
    }
        const tieneOchoCaracteresMas = () => {
            if(nombre.length <= 8){
                setCumpleConOchoCaracteres(false)

            }else {
                setCumpleConOchoCaracteres(true)
            }
        }
    return (
        <div>
            <input type="text" value={nombre} onChange={(event)=>{guardarNombre(event)}}/>
            {cumpleConOchoCaracteres ? "" : <label style={{color : "red"}}>Debe tener 8 caracteres o mas</label>}
            
        </div>
    )
}

export default EjemploDelInput2;