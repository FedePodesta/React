/* Refactorizar el ejercicio 1 de los monos tal que el contador sume valores sin limite (puede llegar más lejos que el 2) y cuando;
-el contador sea par muestre el mono tapandose los ojos
cuando sea impar muestre el mono con los oidos tapados
 */

import { useState } from "react";

function Tarea1 (){

const [contador, setContador] = useState(0);

const sumandoAlContador = () =>{
    setContador(contador + 1)
}

    return (
        <div>
            <button onClick={sumandoAlContador}> Click Me   </button>
            {contador % 2 ? "🙈" : "🙉"}
        </div>
    )

}

export default Tarea1