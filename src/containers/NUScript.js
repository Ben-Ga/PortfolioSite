import React from 'react'

import classes from '../styles/containers/nuscript.module.scss'

import prscripSnap from '../res/scripSnap.JPG'
import metricsSnap from '../res/fullMetrics.JPG'
import ScrnBox from '../components/ScrnBox'

const NUScript = () => {
    return (
        <div className={classes.container}>
            <h3>NUScript</h3>

            <ScrnBox
                imgSrc={prscripSnap}
                imgAlt={"image of a generated prescription"}
                desc="The image (left) shows an example prescription that NUScript has generated for a user to observe
                for any errors that may be present.|The prescription you see is achieved by dividing up each of the 
                sections into their own (mostly) functional component| During a quiz, a user will see may of these,
                therefore, pagination of these prescriptions was included in this project
                "
                splitFlag="|"
            />

            <ScrnBox
                imgSrc={metricsSnap}
                imgAlt={"image of various metrics for a NUScript user profile"}
                desc="Pictured left are some of the user stats are metrics that are part of any
                user's profile page | Using the public library Victory, I was able to create these sleek and responsive graphs and charts "
                splitFlag="|"
                linkName="Victory"
                linkloc="https://github.com/FormidableLabs/victory"
            />

        </div>
    )
}

export default NUScript
