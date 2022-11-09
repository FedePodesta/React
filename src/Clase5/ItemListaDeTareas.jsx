/* TODOS LOS COMPONENTES DE REACT RECIBEN UN PARAMETRO LLAMADO PROPS QUE ES UN OBJT LITERAL DE JS Y DENTRO TRAE TODOS LOS VALORES DE LOS ATRIBUTOS QUE  TIENE EL COMPONENTE EN LA INVOCACION 
lets props = {
    textoTarea : "valor que escribi donde lo invoque*/

import { useState } from "react";

function ItemListaDeTareas (props){
    const [estado, setEstado] = useState(false);

    const cambiarEstadoDeTarea = () =>{
        setEstado(!estado)
    }

    return(
    
        <li onClick={cambiarEstadoDeTarea}> 
            { estado ?
            <span style={{textDecoration : "solid 1px black line-through" }} >{props.textoTarea}</span>
            :
            <span>{props.textoTarea}</span>
            }
        </li>
    )
        }

export default ItemListaDeTareas;