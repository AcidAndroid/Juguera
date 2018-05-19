import React from 'react'
// import {Card, Icon} from 'react-materialize'

export default (props) => {
  return (
    <div className="card">
         <img className="card-img img-fluid" src={props.imagen} alt={props.titulo}/>
         <div className="card-img-overlay">
            <h1 className="card-title">{props.titulo}</h1>
            <p className="card-text">{props.info}</p>
         </div>                  
        {/* <Card className='small'
  header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
  actions={[<a href='#'>This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card> */}
    </div>
  )
}
