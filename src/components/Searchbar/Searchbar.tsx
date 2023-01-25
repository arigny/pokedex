import './Searchbar.css';

export const Searchbar = ({search, setSearch}: any) => {
    const onSearchChange = ({ target }: any) => {
        // setCurrentPage(0);
        setSearch(target.value);
      };

    return (
        <div className="searchbar">
            <input type='text' placeholder='What Pokemon are you looking for?' value={search} onChange={onSearchChange}></input>
            {/* <img src="./assets/backgrounds/search.png" alt="search"></img> */}
        </div>
    )
}
