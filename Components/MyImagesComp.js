import React, { Component } from 'react'
import nature from '../Shared/Images/Nature.jpg'
import nature1 from '../Shared/Images/Nature1.jpg'
import nature2 from '../Shared/Images/Nature2.jpg'
import animal from '../Shared/Images/Animals.mp4'
import sampleAud from '../Shared/Images/sample.mp3'
import { Multimedia } from '../Shared/Constant/ConstantData'



class MyImagesComp extends Component {
    render() {
        return (
            <div>
                <h2>MyImagesComp</h2>
                <img src={nature} alt='Nuture Image' width="300px" height="200px"/><br/>
                <img src={nature1}width="400px" height="200px"/><br/>
                <img src={nature2}width="600px" height="200px"/><br/>
                <video controls src={animal}width="300px" height="200px"></video>
                <audio controls src={sampleAud}></audio>
                <img src={Multimedia.clock}/>
            </div>
        )
    }
}

export default MyImagesComp
