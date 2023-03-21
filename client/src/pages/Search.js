import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_OPEN_SEARCH_PETS } from "../utils/queries";
import SearchBar from "../components/Search/searchBar";
// import SearchResults from '../components/Search/searchResults';

const Search = () => {
  const [searchData, setSearchData] = useState({
    location: "75218",
    animalType: "dog",
  });

  const { loading, data } = useQuery(QUERY_OPEN_SEARCH_PETS, {
    variables: {
      postalCode: searchData.location,
      animalType: searchData.animalType,
    },
  });

  console.log("searchData", searchData);
  console.log("DATA", data);

  return (
    <React.Fragment>
      <div class="blue-500">{/* <Navigation /> */}</div>
      <div class="col-12 col-md-10 mb-3 p-3">
        <SearchBar searchHandler={setSearchData} />
      </div>
      <div class="col-12 col-md-10 mb-3 p-3">
        {loading ? (
          <div>Loading data...</div>
        ) : (
          data?.searchPets?.map((pet) => {
            console.log(pet.photos)
            return (
                <div className="p-3 my-3">
                  <h3>{pet.name} {pet.type} {pet.breeds.primary}</h3>
                  <p>{pet.description}</p>
                  {pet?.photos?.[0] && <img src={pet.photos[0].medium} />}
                </div>
              )
          })
        )}
        {/* <SearchResults /> */}
      </div>
    </React.Fragment>
  );
};

export default Search;
