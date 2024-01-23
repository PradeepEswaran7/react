import React,{Component} from "react";

class MyEventComp extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    incrementCount=()=>{
        this.setState({count:this.state.count+1})
    }
    decrementCount=()=>{
        this.setState({count:this.state.count-1})
    }
    greeting(){
        window.alert("How Are You All")
    }

    welcome(myName){
        window.alert(`Hi EveryOne I am ${myName}`)
    }

    render(){
        return(
            <div>
                <h2>This is MyEventComp Components</h2>
                <button type="button" onClick={this.greeting}>
                Greet
                </button>{" "}
                <button type="button" onClick={()=>this.welcome("Pradeep")}>
                welcome
                </button>
                {/* <h2 onMouseOver={()=>this.welcome("Pradeep")}>Hi EveryOne I Welcome you All</h2> */}
                <hr/>
                <p>Counter Value : <strong>{this.state.count}</strong></p>
                <button type="button" onClick={this.incrementCount}>Count++</button>{" "}
                <button type="button" onClick={this.decrementCount}>Count--</button>
            </div>
        ) 
    }
}

export default MyEventComp;