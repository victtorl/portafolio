import React,{Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'





import '../components/styles/Footer.css' 






class Footer extends Component{



    render(){
        return(
            <div className="footer">
				<Row className="grupofooter">
					<Col className="columna1footer">

					<div className="contact-info">
								
								<ul>
									<li className="letritas">Mas informacion</li>
									<li className="letritas"><i className ="email">Email:&nbsp;&nbsp;</i>victorlara.cod@gmail.com</li>
								</ul>
					</div>
				
					</Col>

					<Col className="columna2footer">
							<Form>
								
							<Form.Group controlId="formBasicPassword">
								<Form.Control as="textarea" rows="3" placeholder="Escriba aqui.." />
								
							</Form.Group>
								<Button variant="light" type="submit" >
									Enviar mensaje
								</Button>
							
							</Form>	
					</Col>
				
				</Row>
			</div>
        )
    }
}

export default Footer;