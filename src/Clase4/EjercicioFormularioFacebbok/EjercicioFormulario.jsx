import FormularioNombre from './FormularioNombre'
import FormularioPassword from './FormularioPassword'
import ComponenteLineaHorizontal from './ComponenteLineaHorizontal'


const estilos ={
    display :"flex",
    flexDirection : "column",
    height : "200px",
    width : "300px",
    padding : "20px",
    boxShadow : "0px 0px 15px -5px rgba(0,0,0,0.59)",
    margin :"10px",
    
}

function EjercicioFormulario(){


    return(

        <div style={estilos}>
            <FormularioNombre />
            <FormularioPassword />
            <ComponenteLineaHorizontal />


        </div>
    )
}


export default EjercicioFormulario;