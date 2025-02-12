import { Link, useLocation } from 'react-router-dom';
import { StatRow } from '../components/StatRow/StatRow';

import './DetailsPage.css';

export const DetailsPage = () => {
  const state = useLocation().state;
  const capitalizedName = state.name.slice(0,1).toUpperCase() + state.name.slice(1);

  let id: string;
  const padId = () => {
    const idLength = state.id.toString().length;
    if (idLength === 1) {
        id = "00" + state.id.toString();
    }
    else if (idLength === 2) {
        id = "0" + state.id.toString();
    }
    else {
      id = state.id.toString();
    }
    return id;
  }

  document.body.style.backgroundColor = typecolors[state.firstType];

  return (
    <div className='details-container' style={{backgroundColor: typecolors[state.firstType]}}>
      <div style={{margin: "50px 5%"}}>
        <div className='header'>
          <p style={{fontSize: '2rem', margin: '0'}}>#{padId()}</p>
          <p style={{fontSize: '3.5rem', margin: '0'}}>{capitalizedName}</p>
        </div>

        <div className='content'>
          <div style={{textAlign: 'right'}}>
            <div className='japanese-name'>{state.japaneseName}</div>
            <img src={state.image} alt={capitalizedName} />
          </div>
          
          <div className='stats-table'>
            {Object.entries(state.pokeStats).map(([key, value]) => (
              <StatRow name={key} value={value} key={key} />
            ))}
          </div>
        </div>
      </div>

      <Link to={{pathname: '/'}} style={{textDecoration: 'none'}}>Back to search</Link>
    </div>
  )
}

interface TypeColors {
  [key: string]: string;
}

const typecolors: TypeColors = {
  'fire': '#FEA755',
  'water': '#58ABF6',
  'grass': '#96BC8F',
  'normal': '#B6B9C3',
  'flying': '#88A2DE',
  'fighting': '#D95672',
  'poison': '#987195',
  'electric': '#ECCB69',
  'ground': '#E88A5C',
  'rock': '#D1C299',
  'psychic': '#ED6F6D',
  'ice': '#A0D6DD',
  'bug': '#9CD37F',
  'ghost': '#8173B9',
  'steel': '#5C8FAF',
  'dragon': '#7583B5',
  'dark': '#6F6E77',
  'fairy': '#E1ABC2',
}
