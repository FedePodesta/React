/*
realizar un componente con tres estados, basados en un contador

Cuando el contador esta en 0 mostrar el emoji .🙊
Cuando esta en 1  🙉
cuando esta en 2 🙈
al llegar al estado 2, volver al 0 


PISTA: Le sumas uno mientras el contador sea menor de 2, cuando sea 2 , igual a 0
*/

import { useState } from "react";

function Ejercicio1 (){

const [contador, setContador] = useState(0);

const sumandoAlContador = () =>{
    if(contador < 2 ){
        setContador(contador + 1)
    }else{
        setContador(0)
    }
}

    return (
        <div>
            <button onClick={sumandoAlContador}> Click Me   </button>
            {contador === 0 ? "🙊" : ""}
            {contador === 1 ? "🙉" : ""}
            {contador === 2 ? "🙈" : ""}
        </div>
    )

}

export default Ejercicio1