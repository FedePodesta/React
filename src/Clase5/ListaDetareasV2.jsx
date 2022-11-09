/* Realizar un componente que tenga un elemento ul o il y adentro elemen tos li para cada uno de los siguientes intems. 
-comprar carne
-sacar turno con el dentista
-buscar nuevo depto

*/
import ItemListaDeTareas from "./ItemListaDeTareas";

/* Los HOOKS son el estado interno de un componente, un Hook es algo que el componente maneja internamente

Las PORPS son el estado externo de un componente. Un valor que le pasa el componente padre a un hijo*/

function ListaDeTareasV2(){


    return(
        
        <div>
            <h3>Lista de pendientes</h3>
            <ul>
                <ItemListaDeTareas textoTarea={"Comprar Carne"}/>
                <ItemListaDeTareas textoTarea={"Sacar turnos con el dentista"}/>
                <ItemListaDeTareas textoTarea={"Buscar nuevo Departamento"}/>
            </ul>
        </div>
    )
}

export default ListaDeTareasV2