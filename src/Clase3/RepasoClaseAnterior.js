//RECORDAMOS QUE LOS NOMBRES DE LOS COMPONENTES TIENE QUE COMENZAR EN MAYUSCULA 
//NO OLVIDAR EXPORT DEFAULT AL FINAL DE LA PAG

const estilos = {
    backgroundColor :"red",
    color : "blue"
}


function ComponenteRepasoClaseAnterior(){
    return(
        <div style={estilos}>
            <h1>Titulo</h1>
            <p>Hola, Como va ?</p>
        </div>
    );

}

export default ComponenteRepasoClaseAnterior