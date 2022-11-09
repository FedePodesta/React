
import { useState } from "react";

function AgregandoComportamiento (){
    /* esta variable, existe en el browser, pero por mas cambios que le haga, por el ciclo de carga de REACT nunca va a actualizar el DOM con el color rojo por que no se entera del cambio */
    //let variable = "" 
    
    //HOOK
    // const [ Variable , la funcion de actualización] = useState ("Valor inicial")

    const [colorDeLaLetra, setColorDeLaLetra ] = useState ("");
    // Cuando yo quiera ver el valor de la variable , llamo a "color"
    // Cuando yo quiera actualizar el valor de la variable " color" , utilizo la funcion setColor
    
    return (

        <p style={{color : colorDeLaLetra}} onDoubleClick={()=>{setColorDeLaLetra("red");}} onClick={()=>{setColorDeLaLetra("blue")}} >¿De que color soy?</p>
    )


}

export default AgregandoComportamiento