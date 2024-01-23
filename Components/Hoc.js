import React,{ Component } from 'react'

const Hoc = (WrapperComp) => {
    class Hoc extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }

        incrementCount=()=>{
            this.setState({count:this.state.count+1})
        }
        render() {
            return <WrapperComp count={this.state.count} incrementCount={this.incrementCount}></WrapperComp>
        }
        
    }
    return Hoc;
}

export default Hoc;
