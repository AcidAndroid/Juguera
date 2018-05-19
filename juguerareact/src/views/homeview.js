import React from "react";
import Image from "./image"

const HomeView = (props) => {
return(
    <React.Fragment>        
        {/* <img src= {require('../images/juguera1.png')} alt="¡Juguera!" />                 */}
        <Image imagen={props.imagenPortada} titulo={'Juguera.'}
            info={'Recomendaciones de jugos con la fruta mas fresca de la estación.'}
        />
    </React.Fragment>
    )
}

export default HomeView;