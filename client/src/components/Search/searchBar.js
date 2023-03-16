import { useEffect, useRef, useState } from "react";
// const pefFinderAPI = e9MqwcrDevTJra2QLw8Pia4TNJxqZSYHlh6SiMpxl066vLoAtu
// const petFinderKey = wto5AgU2rgGmTUWIRLuHQdQ4XgjnKnAmMbYT95HU
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