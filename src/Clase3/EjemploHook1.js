import { useState } from "react";


function EjemploHook1 () {

const [visibilidad, setVisibilidad] = useState(true);
const clickCambiarEstadoDeVisibilidad = () => {
    setVisibilidad(!visibilidad)

}

return(
    <div>
        <button onClick={clickCambiarEstadoDeVisibilidad}>haceme Click</button>
        {`Texto ${visibilidad}`}
        {visibilidad ? "" : "😛"}

    </div>

)
}

export default EjemploHook1