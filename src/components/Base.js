import React,{Component}from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

class Base extends Component{
        render(){
            return(

                <div>
                          <Button variant="outline-primary">Primary</Button>
                          <Button variant="primary" size="lg" active>
                          Primary button
                        </Button>
                </div>
            )
        }
}


export default Base;