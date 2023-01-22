import React, {useState} from 'react';

interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

export const PokeCard = ({id, name, image, type}:IPokemon) => {
    return (
        <div>
            <div className="card">
            <img src={image} />
            <p className="id">#{id}</p>
            <p className="name">{name}</p>
            <p className='type'> {type} </p>
            </div>
        </div>
    )
}