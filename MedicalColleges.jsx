import React from 'react'
import Tile from './Tile'
import image1 from './first-img.jpg';
import { medicalCollegesData } from './medicalCollegesData'
import Header from './Header'
import image from './hdr-bg.jpg';

function MedicalColleges() {
    return (
         <div>
            <Header tittle={"Management Colleges"} subTittle={"Top Management College etc..."} BGimage={image} />
            { medicalCollegesData.map((para, index) => (
                console.log(para[0].title),
                < Tile
                    key={index}
                    width={"lg"}
                    paras={para}
                    border={1}
                    imageRounded={1}
                    image={para[0].image}
                    tittle={para[0].title}
                    buttonLabel={"View Details"}
                    buttonColor={"green"} />
                    
            ))
            }
        </div>
    )
}

export default MedicalColleges
