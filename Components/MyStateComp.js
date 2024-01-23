import React, { Component } from "react";

class MyStateComp extends Component{
    constructor(){
        super();
        this.state={
            empId:101,
            empName:"Pradeep"
        }
        setTimeout(()=>{
            this.setState({empId:this.state.empId+1,empName:"Pradeep Eswaran"})
        },2000)
    }

    render(){
        const{empId,empname} = this.state;
        return(
            <div>
                <h2>This is State Component</h2>
                <p>Id:<strong>{empId}</strong></p>
                <p>Name:<strong>{this.state.empName}</strong></p>
            </div>
        )
    }
}
export default MyStateComp;