import React from 'react'
import styles from './ParaTiles.module.css'
function ParaTiles({ heading , para , headingSize }) {   // headingSize - 15px || 24px
    return (
        <div className={styles.box} >  
            <h1 className={styles.heading} style={{ fontSize: `${headingSize}` }} >{heading}</h1>
            <h3 className={styles.para} >{para}</h3>
        </div>
    )
}

export default ParaTiles
