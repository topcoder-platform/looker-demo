import React from 'react';

const Select = (props) =>{
   // console.log('props: ', props.projectName[0])

   
    return(
        <div className="form-group">
            <label htmlFor={props.name}> {props.title}</label>
            <select
                id={props.name}
                onChange={props.handleChange}
                className="form-control"
            >
                <option>{props.placeholder}</option>
                {props.projectName.map(projName=>{
                    return(
                        <option
                        key={projName}
                        >{projName}</option>
                    )
                })}
               
            </select>
        
             
        </div>
    )
}
export default Select