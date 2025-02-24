import searchIcon from "./search.svg";
import "./Searchbar.css";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

interface SearchEvent {
  target: {
    value: string;
  };
}

export const Searchbar = ({ search, setSearch }: SearchBarProps) => {
  const onSearchChange = ({ target }: SearchEvent) => {
    // setCurrentPage(0);
    setSearch(target.value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="What Pokemon are you looking for?"
        value={search}
        onChange={onSearchChange}
      />
      <img className="search-icon" src={searchIcon} alt="search-icon"></img>
    </div>
  );
};
