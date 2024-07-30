import React from 'react'
import { GlobalContext } from './GlobalContext'
import { useContext } from 'react'
import Card from './Components/Card/Card';
import { Link } from 'react-router-dom'
import Faq from './Components/FAQ/Faq'

function FetchData() {
    const {restaurants} = useContext(GlobalContext);
    if (!restaurants) {
        return <div>No data available</div>;
      }
    
  return (
    <>
    <div className='CardContainer'>
      {restaurants.length > 0 ? (
        restaurants.map((item) => (
        <Link key={item.id} to={'/restaurant/' + item.id }>  <Card  item={item} /></Link>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
      <Faq/>
    </>

  )
}

export default FetchData