import React from 'react'
import Tile from './Tile'
import { lawData } from './lawData'
import Header from './Header'
import image from './Law00.avif';

function Law() {
    return (
        <div>
            <Header tittle={"Law Colleges"} subTittle={"Top Law College etc..."} BGimage={image} />
            { lawData.map((para, index) => (
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

export default Law
