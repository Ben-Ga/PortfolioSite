import React from 'react'

import classes from '../styles/components/footer.module.scss'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.phantom}></div>
            <footer>
                <p>Ben N Gallagher 2020</p>
            </footer>
        </div>
    )
}

export default Footer
