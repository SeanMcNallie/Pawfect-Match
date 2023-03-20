import { useEffect, useRef, useState } from "react";

function SearchBar({ setSearchResults }) {
    const [searchText, setSearchText] = useState('');

    const onInputChange = (e) => {
        setSearchText(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="searchText" value={searchText} onChange={onInputChange} />
            
        </form>
    );
}