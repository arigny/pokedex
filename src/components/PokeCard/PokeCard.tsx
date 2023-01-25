import React, {useState} from 'react';
// import './PokeCard.css'

interface Pokemon {
    id: number;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
}

export const PokeCard = ({id, name, image, firstType, secondType}: Pokemon) => {
    const capitalizedName = () => {
        return name.slice(0,1).toUpperCase() + name.slice(1)
    }

    return (
        <div>
            <div className="card">
            <img src={image} />
            <p className="id">#{id}</p>
            <p className="name">{capitalizedName()}</p>
            <p className='type'> {firstType} {secondType} </p>
            </div>
        </div>
    )
}