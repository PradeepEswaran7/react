import React, { Component } from "react";

class PraedeepComp extends Component{
    render(){
        // destructing props
        const{name,post} = this.props;
        return(
            <div>
                <h2><strong>Details</strong></h2>
                <p>Name:<strong>{name}</strong><br/> Role:<strong>{post}</strong><br/>
                Salary:<strong>{this.props.salary}</strong><br/> contact:<strong>{this.props.contact}</strong><br/>
                gender:<strong>{this.props.gender}</strong><br/> address:<strong>{this.props.address}</strong>
                </p>
            </div>
        ) 
    }
}
export default PraedeepComp;