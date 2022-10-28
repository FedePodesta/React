/*Para crear un componente de funcion se necesita;
1) Declarar una funcion, y la buena practica dice que se tiene que llamar igual que el  archivo donde esta
2)Tiene que tener u nreturn que devuelve "html"
3) No se debe olvidar especificar que  funcion (si es que existe varias) se va a exportar del archivo (es la que se ejecuta primero cuando node lee este archivo)
*/

function TituloH1ConEstilo(){

    return(
        
            <h1 style={{backgroundColor : "red" }}>Hola, Como estas?</h1>

    );
}


export default TituloH1ConEstilo;