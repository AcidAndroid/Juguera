import React from 'react'
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'
// import {Card, Icon} from 'react-materialize'

export default (props) => {
  return (
    <Card>
      <CardMedia image={props.imagen} title={props.titulo} />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.titulo}
        </Typography>
        <Typography component="p">{props.info}</Typography>
      </CardContent>
      
    </Card>    
  )
}
