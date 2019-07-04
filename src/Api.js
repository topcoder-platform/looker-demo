import React, {Component} from 'react'
import Input from './Input'
import Header from './Header'

  
class App extends Component{    
    
    constructor(props){
        super(props);

        this.imageUrl={
            url:'',
        };

        this.state = this.imageUrl
    }
    
     render() {
       
      
        
        return (
            <div>
            
            <Header />
            <Input />
           
               
         </div>
        )
    
      }
}

export default App