/*el componente tarjetero simplemente tiene tres componentes  del tipo TarjetaDeUnaImagenV2. UIno despues de otro. (no importa si es horizontal ov ertical) 

Hacer las mods necesarias al componente TarjetaDeUnaImagenV2 para que acepte que le pasen el texto como propiedades. solo los campos de precio, y titulo. No la imagen.*/

import TarjetaDeUnaImagenV2 from "./TarjetaDeUnaImagenV2"


function Tarjetero (){

    return(
        <div>
        <TarjetaDeUnaImagenV2
            imagen="https://picsum.photos/200/300?random=1" detalle="Camisa Friday II Slim Fit" 
            precio= "21.000"/>

        <TarjetaDeUnaImagenV2 
            imagen="https://picsum.photos/200/300?random=2"
            detalle="Camisa Super Nj Business Rayada Classic Fit"
            precio= "23.000"/>

        <TarjetaDeUnaImagenV2
            imagen="https://picsum.photos/200/300?random=3" 
            detalle="Boxer Kevingston estampado de algodon" 
            precio= "4000"/>
        </div>
    )
}

export default Tarjetero;