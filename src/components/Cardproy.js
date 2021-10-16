import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './styles/Card.css'


import '../style.css'





const Cardproy=(props)=>{
    return(
        <Card  bg='light'   className="cardproy" >
            <div className="overflow">
    <Card.Title className="cardproy_title">{props.title}</Card.Title>
       
        <Card.Img variant="top" src={props.imgsrc}className="cardproy_img" /  >
            </div>
        <Card.Body>
            <Card.Text className="cardproy_description">
             {props.description}
            </Card.Text>
    <Button variant="primary" href={props.href} target="_blank" className="cardproy_button">Ir al proyecto</Button>
        </Card.Body>
        </Card>
    )
}

export default Cardproy

