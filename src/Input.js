import React, { Component } from 'react';
import Select from './FormComponent/Select'


class Input extends Component {

    constructor(props){
        super(props);

        this.state = {
            projectName:['Demo1','Demo2','Demo3'],
            selctedProjectName:'',
            PngUrl:'',
            Data: []
         }
      //  this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    
    }

    handleInput(e){
        let value =e.target.value;

        this.setState({
            selctedProjectName:value
           
        })

              
       
        const url1 = "https://api.topcoder.com/v4/looks/"
        const url2 = "/run/png"
        const url3 ="/run/json"
        var lookId = ''

        switch(value){
            case 'Demo1': 
                lookId=1325
                break;
            case 'Demo2': 
                lookId=1326
                break;
            case 'Demo3': 
                lookId=1324  
                break;
            default:
                lookId=" "
                window.alert("Please select an option")
         
        }

        if(lookId!==" ")
        
        {

            this.setState({
                PngUrl: "http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif"
            })
         
       //document.getElementById("PicRep").classList.add('loading');
        
        const finalUrl=url1+lookId+url2
        const finalUrl2=url1+lookId+url3

        this.callFetchJpg(finalUrl)
        this.callFetchJson(finalUrl2)

        }
       
    }

    callFetchJpg(url){

        fetch(url,{
            'method':'GET'
            })
          .then(result => result.blob())
          .then(result => {
            console.log(result)
            this.setState({
                PngUrl: URL.createObjectURL(result)
                          })
            })
    }

    callFetchJson(url)
        {
        fetch(url,{
            'method':'GET'
            })
            .then(result => result.json())
            .then(result => {
            this.setState({
                Data:result
                         })
            })
    }

  //  handleFormSubmit(){}

    render(){
        return(
            <div className="container">
                <form className="container" 
                // onSubmit={this.handleFormSubmit}
                > 
                    <Select 
                        title={'Project Name'}
                        name={'Project Name'}
                        placeholder={'Select the Project'}
                        projectName={this.state.projectName}
                        handleChange={this.handleInput}  
                    />
                </form>

                <div className="container" style={{maxHeight:50}}>
                    <div className="row">           
                        <div className="col-sm-6"  >
                            <label>Pictorial Representation</label>
                                <div id="PicRep" style={{overflow:'scroll',height:'400px'}}> 
                                
                                    <img src={this.state.PngUrl} alt=""/>

                                </div>
                                
                        </div>
                    
                        <div className="col-sm-6" >
                                <label>Data Representation</label><br></br>
                                <div  style={{overflow:'scroll',height:'400px'}}> 
                                    <div>
                                        <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Handle</th>
                                                <th scope="col">Points</th>
                                             </tr>

                                        </thead>
                                        <tbody>
                                             {
                                                this.state.Data.map((item,idx)=>{
                                                        return(
                                                        <tr>
                                                            <td key={item['handle']}> 
                                                                {item['handle']} 
                                                            </td>
                                                            
                                                            <td key={item['points']}>
                                                                {item['points']} 
                                                            </td>

                                                        </tr>
                                                            
                                                            )
                                                    })
                                                }
   
                                                
                                            
                                            
                                        </tbody>        

                                        </table>
                                       
                                    </div>   
                                </div>
                        </div>  
                    </div>  

                </div>
            
            </div>
        )
    }
}

export default Input