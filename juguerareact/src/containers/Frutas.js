import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import data  from '../Frutas.json';

class Frutas extends PureComponent {

    
    constructor(props) {
        super(props);
        this.state = {
          frutas: [],
        };
      }


      handleClick = (event) => {
        console.log(event.target)
        
      }
    render() {
        
        const Meses =["Enero","Febrero","Marzo","Abril","Mayo"
                    ,"Junio","Julio","Agosoto","Septiembre","Octubre"
                    ,"Noviembre","Diciembre"]
        let fecha = new Date()
        let mesNum = fecha.getMonth()
        //Obtiene el mes actual para saber que frutas buscar
        let mes = Meses[mesNum]                    
        let frutasTemporada
        let imgFrutas
        //obtiene las frutas de la temporada
        frutasTemporada= data.Frutas.filter((Mes)=>{
            if (Mes.Mes===mes){
                return true
            }
            
        })[0].Frutas
        //console.log(frutasTemporada);


        imgFrutas=frutasTemporada.map((fruta)=>{                             
            return <div key={fruta.Fruta} id={`Id${fruta.Fruta}`} onClick={this.handleClick}>
                <img src={fruta.Imagen}  alt={fruta.Fruta}/>
            </div>
        })

        //console.log(imgFrutas);

        return (
            <div id="Frutas-Temporada">
                {imgFrutas}                
            </div>
        );
    }
}

Frutas.propTypes = {

};

export default Frutas;