//EJERCICIO 3

const estiloH1 = {
    backgroundColor : "red",
    color : "white",
    fontSize : "80px"
}

const estiloH3 = {
    backgroundColor: "pink",
    fontSize : "50px"
}


function TituloH1ConMultiplesEstilos(){

    return(
        <div>
            <h1 style= {estiloH1}>Hola, Como estas?</h1>
            <h3 style={estiloH3}>Subtitulo</h3>
        </div>

    );
}


export default TituloH1ConMultiplesEstilos;