import React from 'react'
import Tile from './Tile'
import image1 from './first-img.jpg';
import { medicalPuneData } from './medicalPuneData'
import Header from './Header'
import image from './hdr-bg.jpg';

function MedicalPune() {
    return (
        <div>
             <Header tittle={"Popular College"} subTittle={"Top Medical College in Tamil Nadu"} BGimage={image} />
            {medicalPuneData.map((para, index) => (
                console.log(para[0].title),
                < Tile
                    key={index}
                    width={"lg"}
                    paras={para}
                    border={1}
                    image={para[0].image}
                    tittle={para[0].title}
                    buttonLabel={"View Details"}
                    buttonColor={"green"} />
            ))
            }
        </div>
    )
}

export default MedicalPune
