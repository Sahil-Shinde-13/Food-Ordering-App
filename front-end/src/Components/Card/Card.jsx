import React from 'react'
import './Card.css'

function Card({item}) {
  
  return (
        <>
        <div className="card">
                <img className='card-image'  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.cloudinaryImageId}`}  />
            <div className="card-content">
                    <h3>{item.name}</h3>
                    <p>{item.areaName}</p>
                <div className="card-footer">
                        <span>{item.costForTwo}</span>
                        <span>{item.sla.slaString}</span>
                        <span className='rating'>{item.avgRating}</span>
                </div>
            </div>
        </div>        
        </>  

    
  )
}

export default Card