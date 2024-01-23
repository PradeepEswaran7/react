import React, { Component } from 'react'
import ChildComp from './ChildComp';

export class ParentComp extends Component {
    constructor(){
        super();
        this.state={
            count:0,
            company:"Changepond"
        }
    }

    incrementCount=()=>{
        this.setState({count:this.state.count+1})
    }

    render() {
        const {count,company}=this.state
        return (
            <div>
                <p>Counter Value : <strong>{this.state.count}</strong></p>
                <button type="button" className= "btn btn-outline-primary"onClick={this.incrementCount}>Count++</button>{" "}
                <hr/>
                <ChildComp count={count} company={company}></ChildComp>
            </div>
        )
    }
}

export default ParentComp
