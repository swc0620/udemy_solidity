import React from 'react';

const SearchBar = () => {
    const onInputChange = (event) => {
        console.log(event.target.value)
    }
    return <input onChange={ onInputChange } />;
};

export default SearchBar;