import React from 'react'

const ChildComp = ({count,company}) => {
    return (
        <div>
            <h2>This is child Component</h2>
            <p>Count : <strong>{count}</strong></p>
            <p>company : <strong>{company}</strong></p>
        </div>
    )
}

export default ChildComp
