import React,  { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'





import '../components/styles/Footer.css' 



const Footer = () => {


	const [inputValues, setInputValues] = useState('');

	const handleOnChange = event => {
		setInputValues({
			...inputValues,
			[event.target.name] : event.target.value
			
		});
		console.log(event.target.value);
	  };
	
	const sendMessage =(e) => {
		e.preventDefault()


	const mensaje=inputValues.textArea
	const urlWsp = new URL(`https://wa.me/+51982043391/?text=${mensaje}`)
	
	window.open(urlWsp)  
	
	 
	}
	

	return(
            <div className="footer">
				<Row className="grupofooter">
					<Col className="columna1footer">

					<div className="contact-info">
								
								<ul>
									<li className="letritas">Mas informacion</li>
									<li className="letritas"><i className ="email">Email:&nbsp;&nbsp;</i>10laragurmendi@gmail.com</li>
									<li className="letritas">Lima, Peru  2021 </li>
								</ul>
					</div>
				
					</Col>

					<Col className="columna2footer">
							<Form>
								
							<Form.Group controlId="formBasicPassword">
								<Form.Control className="textArea" onChange={handleOnChange}  as="textarea" rows="3"  name="textArea" placeholder="Escriba aqui.." />
								
							</Form.Group>
								<Button variant="light" type="submit"  onClick={sendMessage}>
									Enviar mensaje
								</Button>
							
							</Form>	
					</Col>
				
				</Row>
			</div>
			)
}
    

export default Footer;