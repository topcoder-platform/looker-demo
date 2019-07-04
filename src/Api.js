import React, {Component} from 'react'
import Input from './Input'
import Header from './Header'



// const lookerApi = [
//     {
//         host:"https://topcoder.looker.com:19999/api/3.0",
//         client_id:"9VYVfQV2W2Nh3Z4dCZDW",
//         client_secret:"rhjnQrZ9mRd3kfWV9PDrmnR6",
//         loginUrl:"/login",
//         timeout:31000

//     }
  
// ]

//const url = "https://api.topcoder.com/v4/looks/1089/run/jpg"

//  const url = "https://api.topcoder.com/v4/looks/1325/run/png"
  
class App extends Component{    
    
    constructor(props){
        super(props);

        this.imageUrl={
            url:'',
        };

        this.state = this.imageUrl
    }
    
     render() {
       
        //const { imageUrl } = this.state
        
        
        return (
            <div>
            
            <Header />
            <Input />
           
               
         </div>
        )
    
      }
}

export default App