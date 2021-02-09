import React,{Component}from 'react'
import Nav from 'react-bootstrap/Nav'
import './styles/Barra.css'
import './styles/font/flaticon.css'

import {  animateScroll as scroll, scroller} from 'react-scroll'




class Barra extends  Component{

    
  constructor(props){
    super(props)
    this.barraMenu=React.createRef();
    this.esconderMenu = this.esconderMenu.bind(this);


    this.barraMenu=React.createRef()
    
    this.dato={
      cont:1
    }

    this.state={
      styl:{
        display:'block'
      },
      color:{
        background: '#024059'

      }
      
    }
   

    }
  
    
    esconderMenu=()=>{
      
      this.cambiarcolor()
      console.log('hola')
      if(this.dato.cont === 1){
        this.setState((state,props)=>({styl:state.styl={display:'none'}}),()=>{this.dato.cont=0})

       console.log('amigo')
      }else{
        this.setState((state,props)=>({styl:state.styl={display:'block'}}),()=>{this.dato.cont=1})
        
        console.log('señor')
      }
      
    }
    cambiarcolor=()=>{
      if(this.dato.cont === 1){
        this.setState((state,props)=>({color:state.color={background:'#2980b9'}}),()=>{this.dato.cont=0})

       console.log('amigo')
      }else{
        this.setState((state,props)=>({color:state.color={background:'#024059'}}),()=>{this.dato.cont=1})
        
        console.log('señor')
      }
    }

    
    
   goarriba=()=>{
    scroll.scrollToTop()
   }
   goabajo=()=>{
     scroll.scrollToBottom()
     
   }
   gocontenedor=()=>{
    
    scroller.scrollTo('contenedor',{
      duration: 1000,
      delay: 100,
      smooth: true,
      
      offset: -147, // Scrolls to element + 50 pixels down the page
      
    })
    
   }
    render(){
        return(

            <div >
                <div className="menu_bar" >
                 
             <span className="btn-menu flaticon-menu" onClick={this.esconderMenu}   style={this.state.color} > {this.state.currentEvent}   </span> 
                </div>

              <Nav className=" justify-content-center navigation" activeKey="/home" style={this.state.styl} >
                
              <ul className="nav-items">
                <li onClick={this.goarriba}> <span className="flaticon-internet"></span> INICIO</li>
                <li onClick={this.gocontenedor}><span className="flaticon-portfolio"></span> PORTAFOLIO </li>
                <li><span className="flaticon-blog"></span> BLOG</li>
                <li onClick={this.goabajo}><span className="flaticon-contact"></span> CONTACT</li>   
              </ul>

              </Nav>
             

             </div>
        )
    }
}



export default Barra;