import React from 'react'
import "./external.css"
import module from "./mycss.module.css"
const MyCssComp = () => {

    const mydata={
        color:"green",
        backgroundColor:"blue"
    }

    return (
        <div>
            <h2 style={{color:"blue",backgroundColor:""}}>Inline Css</h2>

            <h3 style={mydata}>This is internal css</h3>

            <h4 className='textdanger'>External css</h4>


            <h1 className={module.shadow}>Module css</h1>
        </div>
    )
}

export default MyCssComp