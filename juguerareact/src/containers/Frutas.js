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
    render() {
        const Meses =["Enero","Febrero","Marzo","Abril","Mayo"
                    ,"Junio","Julio","Agosoto","Septiembre","Octubre"
                    ,"Noviembre","Diciembre"]
        let fecha = new Date()
        let mesNum = fecha.getMonth()
        //Obtiene el mes actual para saber que frutas buscar
        let mes = Meses[mesNum]                    
        return (
            <div>
                {/* obtiene el mes */}
                {
                    console.log(data.Frutas)
                    
            }
            </div>
        );
    }
}

Frutas.propTypes = {

};

export default Frutas;