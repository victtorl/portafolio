import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import '../style.css'





const Cardproy=(props)=>{
    return(
        <Card  bg='light' border='info'  >
            <div className="overflow">
        <Card.Img variant="top" src={props.imgsrc}/ >
            </div>
        <Card.Body>
    <Card.Title>{props.title}</Card.Title>
            <Card.Text>
             {props.description}
            </Card.Text>
    <Button variant="primary" href={props.href} target="_blank">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}

export default Cardproy