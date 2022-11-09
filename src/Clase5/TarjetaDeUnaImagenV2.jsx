



function TarjetaDeUnaImagenV2(props){

    const estilos ={
        contenedor : {
            display : "flex",
            flexDirection :"column",
            maxWidth : "300px",
            margin : "10px"
            },
            imagen : {
                height : "200px",
                marginBottom : "10px"
            },
            alerta : {
                backgroundColor : "#A00E1D",
                color : "white",
                maxWidth : "60px",
                textAlign : "center",
                marginBottom : "10px"
            },
            titulo : {
                fontSize : "1.5rem"
            },
            subTitulo : {
                color : "#A5A3A3",
                fontSize :"1rem"
            },
            precio : {
                fontSize: "1.5rem",
                fontWeight : "bold",
            }
    }



    return(

        <div style={estilos.contenedor}>
            <img src={props.imagen} alt="ImagenDePrueba" />
            <div>
            <span style={estilos.alerta}>Nuevo!</span>
            </div>
            <span style={estilos.titulo}> {props.detalle} </span>

            <span style={estilos.subTitulo}>3 cuotas sin interes de $7.000</span>
            <span>${props.precio}</span>
        </div>
    );
    }



export default TarjetaDeUnaImagenV2