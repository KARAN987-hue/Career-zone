import React from 'react';
import styles from './TableWithMultiRow.module.css';

function TableWithMultiRow({ data, col1, col2, col3, col4 }) {  // Pass coloumn width according to required in "%" throug col1, col2, col3, col4
    return (
        <div>
            { data && data.map((row, index) => (
                <div key={index} className={styles.table}>
                    <p style={{ width: col1 }} className={styles.p1}>{row[0]}</p>
                    <p style={{ width: col2 }} className={styles.p2}>{row[1]}</p>
                    <p style={{ width: col3 }} className={styles.p3}>{row[2]}</p>
                    {col4 && <p style={{ width: col4 }} className={styles.p4}>{row[3]}</p>}
                </div>
            ))}
        </div>
    );
}

export default TableWithMultiRow;
