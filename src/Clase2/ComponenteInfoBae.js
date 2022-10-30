import React from "react"
import Infobae from './img/Infobae.jpg';

const estiloH1 = {
    fontSize : "80px"
}

const estiloH2 = {
    color: "orange",
    fontSize: "50px"
}

const estiloP1 = {
    fontSize : "40px"
}

const estiloP2 = {
    fontSize : "30px",
    color : "grey"
}


function ComponenteInfoBae(){

    return(
        <React.Fragment>
        <h2 style={estiloH2}>TENDENCIAS</h2>
        <h1 style={estiloH1}>Recetas temáticas de Halloween: 3 ideas divertidas para hacer con los más chicos </h1>
        <p style={estiloP1}>Estas preparaciones escalofriantes y deliciosas causan furor en las redes sociales y son el preludio perfecto para comenzar con una velada a puro susto. El paso a paso</p>
        <p style={estiloP2}>30 de Octubre de 2022</p>
        <hr/>
        <img src={Infobae} alt="imagen"/>
        <p style={estiloP2}>No hace falta un gran despliegue de medios o ingredientes, pero sí algo de imaginación (Instagram)</p>
        <p style={estiloP1}>Tanto si ya tenés pensado tu disfraz como si no, o si Halloween es más una excusa para montar una fiestecita en casa, tenemos la excusa perfecta para preparar y comer comidas deliciosas tanto dulces como saladas. La puesta escena es clave, así que no te olvides de usar tu imaginación para agasajar a tus invitados en la noche más terrorífica del año.</p>
        </React.Fragment>
        
            

    );
}

export default ComponenteInfoBae