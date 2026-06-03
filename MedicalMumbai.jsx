import React from 'react'
import Tile from './Tile'
import image1 from './first-img.jpg';
import { medicalMumbaiData } from './medicalMumbaiData'
import Header from './Header'
import image from './hdr-bg.jpg';

function MedicalMumbai() {
    return (
        <div>
            <Header tittle={"Popular College"} subTittle={"Top Medical College in Mumbai"} BGimage={image} />
            {medicalMumbaiData.map((para, index) => (
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

export default MedicalMumbai
