import { useState } from "react";

function ComponenteContador(){
    //HOOK
    const [contadorHook, setContadorHook] = useState(0);
    //VARIABLE TRADICIONAL
    let contadorTradicional = 0;

    const funcionContadora = () => {
        contadorTradicional++
        console.log(contadorTradicional)

        setContadorHook(contadorHook + 1 )
    }

    return (
        <div onClick ={funcionContadora}>
        H:{contadorHook} - T: {contadorTradicional}


        </div>
    )

}

export default ComponenteContador