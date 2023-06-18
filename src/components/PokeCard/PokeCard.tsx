import React, {useState} from 'react';
import { TypeBadge } from '../TypeBadge';
import './PokeCard.css'

interface Pokemon {
    id: number | string;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
}

export const PokeCard = ({id, name, image, firstType, secondType}: Pokemon) => {
    const capitalizedName = name.slice(0,1).toUpperCase() + name.slice(1)

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
            <p className="name">{capitalizedName}</p>
            <TypeBadges firstType={firstType} secondType={secondType} />
            </div>
        </div>
    )
}

const TypeBadges = ({firstType, secondType}: {firstType: string; secondType: string}) => {
    return (
        <div className='type'>
            <TypeBadge type={firstType} />
            {secondType && <TypeBadge type={secondType} />}
        </div>
    )
}
