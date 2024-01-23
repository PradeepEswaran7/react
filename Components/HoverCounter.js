import React, { Component } from 'react'

export class HoverCounter extends Component {
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    incrementCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                 <h2 onMouseOver={this.incrementCount}>Counter Value : <strong>{this.state.count}</strong></h2>
            </div>
        )
    }
}

export default HoverCounter
