import React from 'react'
// import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import {Card, Icon} from 'react-materialize'

export default (props) => {
  return (
    <Card>
      <CardMedia image={props.imagen} title={props.titulo} className={props.classNameCard} style={props.styleCard} />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.titulo}
        </Typography>
        <Typography component="p">{props.info}</Typography>
      </CardContent>
      
    </Card>    
  )
}
