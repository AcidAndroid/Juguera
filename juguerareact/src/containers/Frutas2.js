import React, { Component } from 'react'
import frutas  from '../frutas';
import Grid from '@material-ui/core/Grid'
import Fruta from '../views/Fruta'


export default class FrutasList extends Component {
    constructor(props) {
      super(props)    
      this.state = {
         meses:['Enero','Febrero','Marzo','Abril','Mayo'
         ,'Junio','Julio','Agosoto','Septiembre','Octubre'
         ,'Noviembre','Diciembre']
         ,mesActual:'Enero'
         ,frutasTemporada:[]
      }
    }
  componentWillMount(){
    let mesActual =this.state.meses[new Date().getMonth()]
    let frutasTemporada =[]    
    frutasTemporada = this.filtrarFrutas(mesActual)
    this.setState(...this.state,{mesActual:mesActual,frutasTemporada:frutasTemporada})    
  } 
  
  filtrarFrutas (mesActual){    
    let tmpFrutas=[]
    
    tmpFrutas=frutas.Frutas.filter((mes)=>{
        if(mes.Mes===mesActual) {return true}
    })[0].Frutas
    return tmpFrutas
  }

  handleClick(target){
    alert('');
  }
  render() {
    return (
      <Grid container>

        <h1>Estas son las frutas mas frescas para el mes de {this.state.mesActual}</h1><br/>
        {this.state.frutasTemporada.map((fruta)=>{
          const stilo ={height: 0,paddingTop: '56.25%'}
            return <Grid item xs={4}>
            <Fruta fotoFruta={fruta.Imagen} nombreFruta={fruta.Fruta}  styleCard={stilo} onClick={this.handleClick} ></Fruta>
            {/* <img style={{ height: '100%', width: '100%'}} src={fruta.Imagen}  alt={fruta.Fruta}/> */}
            
            </Grid>
        })
        }
      </Grid>
    )
  }
}
