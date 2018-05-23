import React from 'react'
import Imagen from './image'
export default (props) => {
    return (
        <div>
            <Imagen imagen={props.fotoFruta} 
                    titulo={props.nombreFruta}
                    classNameCard={props.classNameCard}
                    styleCard={props.styleCard}                     
                    ></Imagen>
        </div>
    )
}