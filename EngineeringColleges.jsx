import React from 'react'
import Tile from './Tile'
import image1 from './first-img.jpg';
import { engineeringCollegesData } from './engineeringCollegesData'
import Header from './Header'
import image from './hdr-bg.jpg';

function EngineeringColleges() {

    return (
        <div>
            <Header tittle={"Management Colleges"} subTittle={"Top Management College etc..."} BGimage={image} />
            { engineeringCollegesData.map((para, index) => (
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

export default EngineeringColleges
