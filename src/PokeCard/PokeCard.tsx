import React, {useState} from 'react';

interface IPokemon {
    id: number;
    name: string;
    image: string;
    firstType: string;
    secondType: string;
}

export const PokeCard = ({id, name, image, firstType, secondType}:IPokemon) => {
    return (
        <div>
            <div className="card">
            <img src={image} />
            <p className="id">#{id}</p>
            <p className="name">{name}</p>
            <p className='type'> {firstType} {secondType} </p>
            </div>
        </div>
    )
}