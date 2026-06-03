import React from 'react'
import styles from './Courses.module.css'
import Header from './Header'
import image from './hdr-bg.jpg'
import ContainerBody from './ContainerBody'
import Tile from './Tile'
import { coursesTileData } from './coursesTileData'

function Courses() {
    return (
        <div>
            <Header BGimage={image} tittle={"Courses & Fees Structure"} subTittle={"Approved by : UGC, AICTE, BCI, PCI, NCTE, ICAR"} />
            <ContainerBody tittleWithWhite={"Select Your"} tittleWithColor={"Study Goal"} subheading={"Reset your research strategy by browsing through our lists of top colleges, exams,courses and careers based on your area of interest!"} >
                {coursesTileData.map((tile, index) => (
                    <Tile
                        key={index}
                        border={1}
                        image={tile.image}
                        tittle={tile.title}
                        college={tile.college}
                        courses={tile.courses}
                        heigth={1}
                    />
                ))}
            </ContainerBody>
        </div>
    )
}

export default Courses
