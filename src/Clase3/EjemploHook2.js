import { useState } from "react";

const estilos = {
    habilitado : {
        color: "white",
        backgroundColor : "black"
    },
    inhabilitado : {
        color: "grey",
        backgroundColor : "yellow"
    }
}

function EjemploHook2 () {

const [habilitar, setHabilitar] = useState(true);
const cambiarHabilitacion = () => {
    setHabilitar(!habilitar)

}

return(
    <div>
        <button onClick={cambiarHabilitacion}>haceme Click</button>
        <p style={habilitar ? estilos.habilitado:estilos.inhabilitado }>TEXTO</p>
    </div>

)
}

export default EjemploHook2