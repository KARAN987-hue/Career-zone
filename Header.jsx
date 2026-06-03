import React from 'react'
import styles from './Header.module.css'


function Header({ tittle , subTittle , BGimage }) {
    return (
        <div className={styles.box} style={{ backgroundImage: `url(${BGimage})` }} >
            <h1 className={styles.tittle} >{tittle}</h1>
            <h2 className={styles.subTittle} >{subTittle}</h2>
        </div>
    )
}

export default Header
