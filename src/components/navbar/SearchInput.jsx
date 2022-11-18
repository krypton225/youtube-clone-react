import { SearchIcon } from "../generals/importer";

const SearchInput = () => (
    <div className="navbar__search__container">
        <input type="text" name="search" className="navbar__search__container__input" placeholder='search..' />
        <button type="submit" className="navbar__search__container__btn" title="Search" data-name-icon="Search">
            <SearchIcon />
        </button>
    </div>
);

export default SearchInput;