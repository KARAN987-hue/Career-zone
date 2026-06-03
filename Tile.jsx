import React from 'react'
import styles from './tiles.module.css'
import Button1 from './Button1'

function Tile({ tittle, college, courses, image, buttonLabel, buttonColor, width, heigth, border, paras, imageRounded , onclick }) { // width ---> "lg for Large" AND heigth ---> heigth={1} for Large , imageRounded={1} for Rounded Logo || Otherwise default are allready Set 
    return (
        <div className={styles.container} style={{
            ...(width ? { width: "830px" } : {}),
            ...(border ? { border: "2px solid gray" } : {})
        }}>
            <div><img style={(imageRounded ? { borderRadius: "50%" } : {})} src={image} alt="" /></div>
            <div>
                <div className={styles.tittles} >
                    <h1>{tittle}</h1>
                    {college && <h2>{college} College</h2>}
                </div>
                <div
                    className={styles.courses}
                    style={width ? { width: "690px" } : {}}
                >
                    {paras?.map((para, index) => (
                        <div key={index}>
                            <p className={styles.address} >{para.p1}</p>
                            <p className={styles.coursesP} >{para.p2}</p>
                            <p className={styles.subCourses} >{para.p3}</p>
                            <p className={styles.approvel} >{para.p4}</p>
                        </div>
                    ))}

                    <h4 style={(heigth ? { height: "80px" } : {})}
                    >{courses}</h4>
                </div>
                <Button1 color={buttonColor ? buttonColor : "red"} text={buttonLabel ? buttonLabel : "APPLY NOW"} />
                {/* <button onClick={onclick} className={styles.btn} >APPLY HERE</button> */}
            </div>
        </div>
    )
}

export default Tile
