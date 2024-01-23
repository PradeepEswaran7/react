import React, { Component } from 'react'
import Hoc from './Hoc';

export class ClickCounter extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         count:0,
    //     }
    // }
    // incrementCount=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render() {
        return (
            <div>
                 <p>Counter Value : <strong>{this.props.count}</strong></p>
                 <button type="button" className= "btn btn-outline-primary"onClick={this.props.incrementCount}>Count++</button>
                 <hr/>
            </div>
        )
    }
}

export default Hoc(ClickCounter)
