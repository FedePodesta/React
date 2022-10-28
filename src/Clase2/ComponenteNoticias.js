import React, { Fragment } from "react";


// EJERCICIO 4

function ComponenteNoticias(){


const estiloH1 = {
    fontSize : "80px"
}

const estiloP1 = {
    fontSize : "40px"
}

const estiloP2 = {
    fontSize : "30px",
    color : "grey"
}

    return(
        <React.Fragment>
        <h1 style={estiloH1}>Cuatro Zapatos con motor eléctrico para caminar más rápido</h1>
        <p style={estiloP1}>La tecnologia siempre busca dar comodidad a acciones diarias y en todo el mundo se han creado</p>
        <p style={estiloP2}>28 de Octubre de 2022</p>
        </React.Fragment>
            
            

    );
}


export default ComponenteNoticias;