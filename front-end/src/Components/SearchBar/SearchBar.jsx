import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'

import { useState } from 'react';


function SearchBar({onSearch}) {

    
    const [input, setInput] = useState('');

    const handleSearch = () => {
        onSearch(input);
        setInput("");
    };

  return (
    <div className='searchBar'>
        <div className="inputContainer">
        <input 
            type="text" 
            placeholder= 'Search For Food'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}><SearchIcon/>Search</button>
        </div>
    </div>
  )
}

export default SearchBar