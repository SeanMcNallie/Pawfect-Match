import React from 'react';
import { Fragment } from 'react-router-dom';

import SearchBar from '../components/Search/SearchBar';
import SearchResults from '../components/Search/SearchResults';

const Search = () => {
    return (
        <Fragment>
        <div class ='blue-500'>
            <Navigation />
            </div>
            <div class ='col-12 col-md-10 mb-3 p-3'>
            <SearchBar />
            </div>
        <div class ='col-12 col-md-10 mb-3 p-3'>
            <SearchResults />
        </div>
        </Fragment>
    );
}

export default Search;