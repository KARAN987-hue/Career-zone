import React from 'react'
import styles from './ContainerBody.module.css'
function ContainerBody({ children , tittleWithWhite , tittleWithColor , subheading , background }) {
    return (
        <div className={` ${styles.container} ${ background ? styles.BGgray : "" } `} >
            <h1 className={styles.heading} >{tittleWithWhite}<span className={styles.headWithColor} >{tittleWithColor}</span></h1>
            <h3 className={styles.subheading} >{subheading}</h3>
            <div className={styles.tilesBox} >
                {children}
            </div>
        </div>
    )
}

export default ContainerBody
