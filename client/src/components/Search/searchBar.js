import { useEffect, useRef, useState } from "react";

export default function SearchBar({ searchHandler }) {
    const [postalCode, setPostalCode] = useState('');
    const [animalType, setAnimalType] = useState('dog');
    const onInputChange = (e) => {
        setPostalCode(e.target.value);
    }

    const onSelectChange = (e) => {
        console.log("SELECT VALUE", e.target.value);
        setAnimalType(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        searchHandler({location: postalCode, animalType});
    }

    console.log("postalCode", postalCode);
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="searchText" onChange={onInputChange} value={postalCode} />
            <select onChange={onSelectChange}>
                <option>Dog</option>
                <option>Cat</option>
                <option>Horse</option>
            </select>
            <button>Find My New Best Friend</button>
        </form>
    );
}