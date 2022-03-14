import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState();

    const onInputChange = (event) => {
        console.log(event.target.value)
    };
    
    return <input onChange={ onInputChange } />;
};

export default SearchBar;