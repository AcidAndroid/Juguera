import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class BuscarJugo extends PureComponent {    
    constructor(props) {
        
        super(props);
        this.state={
            jugosFiltrados:[]
        }
        
    }
    
    componentDidMount() {        
        // let a= this.props.jugos.Jugos;
        // console.log(this.props.jugos.Jugos)
        
        
            
    }
    

    render() {
        this.state.jugosFiltrados=this.props.jugos.Jugos.filter((item)=>{
            return item.Ingredientes.includes(this.props.fruta.toLowerCase())
        })

        

        return (
            <div>
                {this.state.jugosFiltrados.map((item) => {
                    return  <div key={item.Id}>
                            <div>
                                <span>{item.Nombre}</span>
                            </div>
                            <div>
                                <span>{item.Imagen}</span>
                            </div>
                            <div>
                                <span>Ingredientes:
                                <ol>
                                {item.Ingredientes.map((ing)=>{
                                    return <li>{ing}</li>
                                })}
                                </ol></span>
                            </div>
                            <div>
                                <span>Instrucciones:
                                <ol>
                                    {item.Instrucciones.map((instr)=>{
                                        return <li>{instr}</li>
                                    })}
                                </ol>
                                </span>                                
                            </div>
                            </div>       
                     })}
            </div>
        );
    }
}

BuscarJugo.propTypes = {

};

export default BuscarJugo;