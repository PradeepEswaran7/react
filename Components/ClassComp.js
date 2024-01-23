import React,{Component} from "react";

class ClassComp extends Component{
    render(){
        return(
            <div>
                <h2>This is Class Components</h2>
                <p>Name:<strong>{this.props.myName}</strong> Role:<strong>{this.props.post}</strong></p>
            </div>
        ) 
    }
}

export default ClassComp;