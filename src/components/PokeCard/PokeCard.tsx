import React, {useState} from 'react';
import './PokeCard.css'

interface Pokemon {
    id: number | string;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
}

export const PokeCard = ({id, name, image, firstType, secondType}: Pokemon) => {
    const capitalizedName = () => {
        return name.slice(0,1).toUpperCase() + name.slice(1)
    }

    const padId = () => {
        const idLength = id.toString().length;
        if (idLength === 1) {
            id = "00" + id.toString();
        }
        else if (idLength === 2) {
            id = "0" + id.toString();
        }
        return id;
    }

    return (
        <div>
            <div className="card">
            <img src={image} />
            <p className="id">#{padId()}</p>
            <p className="name">{capitalizedName()}</p>
            <p className='type'> {firstType} {secondType} </p>
            </div>
        </div>
    )
}
