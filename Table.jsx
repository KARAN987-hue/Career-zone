import React from 'react'
import styles from './Table.module.css'

function Table({ heading , LeftcellWidth , RightcellWidth , tableData }) {    // LeftcellWidth={'48%'} RightcellWidth={'48%'} || LeftcellWidth={'25%'} RightcellWidth={'70%'}

    return (
        <div className={styles.box} >
            <h1 className={styles.heading} >{heading}</h1>
            <div>
                <div className={styles.columns} >
                    { tableData && tableData.map((row, index) => (
                        <div key={index} className={styles.row}>
                            <div className={styles.cell} style={{ width: `${LeftcellWidth}` }} >{row[0]}</div>
                            <div className={styles.cell} style={{ width: `${RightcellWidth}` }} >{row[1]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Table
