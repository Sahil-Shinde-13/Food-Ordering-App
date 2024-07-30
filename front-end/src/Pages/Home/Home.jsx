import React from 'react'
import Header from '../../Components/Header/Header'
import FetchData from '../../FetchData'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { GlobalContext } from '../../GlobalContext'
import { useContext, useState} from 'react'

function Home() {

    const { restaurants, setSearchQuery } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (query) => {
      setSearchTerm(query);
      setSearchQuery(query);
    };

  return (
    <>
     <Header/>
     <SearchBar onSearch={handleSearch}/>
     {
        searchTerm ? (<FetchData/>) : (<div>
        <h1 style={{textAlign: 'center'}}>All Food Options</h1>
        <FetchData />
      </div>
    ) }
     
     
    </>
  )
}

export default Home