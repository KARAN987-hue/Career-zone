import React from 'react'
import styles from './TittleContainer.module.css'

function TittleContainer({ tittle , subTittle , discription }) {
    return (
        <div>
            <div className={ styles.container } >
                <h1 className={styles.tittle} >{tittle}</h1>
                <h2 className={styles.subTittle} >{subTittle}</h2>
                <h3 className={styles.discription} >{discription}</h3>
            </div>
        </div>
    )
}

export default TittleContainer
