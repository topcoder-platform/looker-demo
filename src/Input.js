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
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
         
        }

        const finalUrl=url1+lookId+url2
        console.log(finalUrl)
        const finalUrl2=url1+lookId+url3

        this.callFetchJpg(finalUrl)
        this.callFetchJson(finalUrl2)
        
     
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

    handleFormSubmit(){}

    render(){
        return(
            <div className="container">
                <form className="container" onSubmit={this.handleFormSubmit}> 
                    <Select 
                        title={'Project Name'}
                        name={'Project Name'}
                        placeholder={'Select the Project'}
                        projectName={this.state.projectName}
                        handleChange={this.handleInput}  
                    />
                </form>

                <div className="container" style={{}}>
                    <div className="row">           
                        <div className="col-sm-6"  >
                            <label>Pictorial Representation</label>
                                <div style={{overflow:'scroll'}}> 
                                
                                    <img src={this.state.PngUrl} alt=""/>

                                </div>
                                
                        </div>
                    
                        <div className="col-sm-6" >
                                <label>Data Representation</label><br></br>
                                <div className="container"> 
                                    <div>
                                        {
                                            this.state.Data.map((item,idx)=>{
                                                return(
                                                    <div key={item['handle']}>
                                                        {item['handle']}
                                                    </div>
                                                    )
                                            })
                                        }
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