import React, { FunctionComponent, useState } from 'react';
import './SearchBar.css';

interface SearchProps {
    setSearch: (searchKey:string, searchValue?:string) => void
}

export const SearchBar: FunctionComponent<SearchProps> = ({setSearch}) => {

    const [ searchValue, setSearchValue ] = useState("");

    const handleSearchInputChanges = (e: any) => {
        setSearchValue(e.target.value);
    };

    const callSearchFunction = (e:any) => {
        e.preventDefault();
        const searchTerm:string | undefined = searchValue ? searchValue : undefined;
        setSearch('lastName', searchTerm);
    };

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input
                onClick={callSearchFunction}
                type="submit"
                value="Zoek"
                className="search-button"
            />
        </form>
    );
};
