import React from 'react'
import Imagen from './image'
export default (props) => {
    return (
        <div>
            <Image imagen={props.fotoFruta} 
                    titulo={props.nombreFruta } ></Image>
        </div>
    )
}