
import React,{Component} from 'react';
//import  Fondo from './components/Fondo'
 import Barra from './components/Barra.js'
 import Container from 'react-bootstrap/Container'
 import Footer from './components/Footer'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
import Cardp from './components/Cardproy.js'
import  './style.css';

// import img1 from './images/listadetareas.jpg'
import img2 from './images/buscadorimagenes.jpg'
import img3 from './images/rick.jpg'
import img4 from './images/tipodecambio.jpg'
import img5 from './images/organizesongs.png'
import img6 from './images/login1.png'
import img7 from './images/login2.png'



class App extends Component{




    render(){
      return(
        //aca se maqueta la estructura
        
          <Container fluid  className="contenedor">
              <Row  className="gruposuperior1" >
                  <div  className="col1" >
                  <Barra/>
                  </div>
              </Row>
           
              <Row  >
              
                      <Col className="col2"    >

                        <h3  className="titulo">Hello World! || I'm Victor</h3>
                        
                      </Col>
                      
              </Row>

              <Row  className="contenedorcards" >
              
                       <Col  className="col-sm-6 col-md-6" > 
                          <Cardp  imgsrc={img5} title={'Organizador de canciones'} 
                          description={'Busque la cancion de su preferencia +Enter y organize su musica segun las 3 categorias disponibles :)'} 
                          href={'https://victorlaragurmendi.github.io/searchsongs/'}/>
                        </Col>
                         
                        <Col className="col-sm-6 col-md-6"  > 
                        <Cardp  imgsrc={img2} title={'Buscador de Imagenes en React'}
                         description={'Una lista de imagenes hecha la cual recibe un nombre y devuelve las coincidencias del resultado de la api'} 
                          href={'https://listadetareas.webcindario.com/'}/>
                        </Col>
            
                        <Col  className="col-sm-6 col-md-6" > 
                        <Cardp  imgsrc={img3} title={'Buscador de Personajes Vue'}
                        description={'Un buscador el cual recibe un nombre  de la serie de personajes Rick&Morty y devuelve las coincidencias del resultado de la API'} 
                        href={'https://rickvictorlara.webcindario.com/'}/>
                         
                        </Col>

                        <Col  className="col-sm-6 col-md-6"   > 
                          <Cardp  imgsrc={img4} title={'Tipo de cambio en PHP'}
                          description={'Una aplicacion que permite determinar el tipo de cambio en el mes y el año,se usa una api que la SUNAT dispone para nosotros '}
                          href={'https://calculodos.webcindario.com/'}/>
                        </Col>

                        <Col  className="col-sm-6 col-md-6"   > 
                          <Cardp  imgsrc={img6} title={'login UX/UI 1'}
                          description={'Diseño de login con parametros de diseño UX/UI'}
                          href={'https://loginchulo1.netlify.app/'}/>
                        </Col>

                        <Col  className="col-sm-6 col-md-6"   > 
                          <Cardp  imgsrc={img7} title={'login UX/UI 2'}
                          description={'Diseño de login con parametros de diseño UX/UI'}
                          href={'https://loginchulo2.netlify.app/'}/>
                        </Col>

                       
                        
              
              </Row>

          
           <Row className="contenedorFooter" >
              
                        <Col></Col>
                        
                         
                        <Col> </Col>
                        <Footer></Footer>
                    
              
           </Row>
          
              
        </Container>
       
        
      
        

      )
    }
}



export default App;
