import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { TypeBadge } from '../TypeBadge';
import './PokeCard.css'

interface Pokemon {
    id: number | string;
    name: string;
    japaneseName: string;
    image: string;
    firstType: string;
    secondType: string;
    pokeStats: Record<string, number>;
    evolutionChain: Array<{id: number; name: string}>;
}

export const PokeCard = ({id, name, japaneseName, image, firstType, secondType, pokeStats}: Pokemon) => {
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
        <Link to={{ pathname: `./details`}} state={{id, name, japaneseName, image, firstType, secondType, pokeStats}} className='card'>
            <img src={image} />
            <p className="id">#{padId()}</p>
            <p className="name">{capitalizedName}</p>
            <TypeBadges firstType={firstType} secondType={secondType} />
        </Link>
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
