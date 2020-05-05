import React from 'react'

import classes from '../styles/components/scrn.module.scss'

const ScrnBox = (props) => {
    return (
        <div className={classes.scrbox}>
            <div className={classes.imgBox}>
            
                <img alt={props.imgAlt} src={props.imgSrc} />

            </div>
            <div className={classes.textBoxes}>
                {props.desc.split(props.splitFlag).map(section => {
                        return <p>{section}</p>
                    })}
            </div>
        </div>

    )
}

export default ScrnBox
