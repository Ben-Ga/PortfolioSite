import React from 'react'

const Auxiliary = (props) => {
    return (
        <div style={{zIndex: '1'}}>
            {props.children}
        </div>
    )
}

export default Auxiliary
