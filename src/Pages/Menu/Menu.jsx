import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { useParams } from 'react-router-dom';
import './Menu.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Accordion from '../../Components/MenuAccordion/MenuAccordion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from 'react-redux';
import { additem } from '../../utils/CartSlice';

function Menu() {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(false);
  const { resId } = useParams();
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(additem({
      id: item.card.info.id,
      name: item.card.info.name,
      price: item.card.info.defaultPrice / 100,
      rating: item.card.info.ratings.aggregatedRating.rating,
      description: item.card.info.description,
      imageId: item.card.info.imageId
    }));
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const API = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
      if (!API.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await API.json();
      setResInfo(data);
      setError(false);
    } catch (error) {
      console.error('Fetch error:', error);
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="error-message">
        <p>Error fetching data. Please check another option.</p>
      </div>
    );
  }

  if (resInfo === null) {
    return (
      <div className="skeleton-wrapper">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="skeleton-card" key={index}>
            <Skeleton height={200} />
            <Skeleton count={3} />
          </div>
        ))}
      </div>
    );
  }

  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const itemCards = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  return (
    <>
      <div className='Menu-Card'>
        <Header />
        <br /><br /><br /><br />
        {restaurantInfo && (
          <div className="restaurant-card">
            <div className="restaurant-content">
              <div className="restaurant-name"><h1>{restaurantInfo.name}</h1></div>
              <p className="restaurant-city">{restaurantInfo.city}</p>
              <p className="restaurant-address"><b>Location: {restaurantInfo.slugs.restaurant}</b></p>
              <div className="restaurant-info">
                <span className="restaurant-cost">{restaurantInfo.costForTwoMessage} |</span>
                <span className="restaurant-delivery">Delivery Time: {restaurantInfo.sla.slaString} |</span>
                <span className="restaurant-charges">Delivery Charges: <span dangerouslySetInnerHTML={{ __html: restaurantInfo.feeDetails.message }} /></span>
              </div>
              <div className="restaurant-additional-info">
                <span className="restaurant-rating">{restaurantInfo.avgRating}</span>
                <p>{restaurantInfo.aggregatedDiscountInfo.descriptionList[0].meta}</p>
                <div className='cart'><ShoppingCartIcon />Cart</div>
              </div>
            </div>
          </div>
        )}

        <div className="MenuOptions">
          <Accordion title="Menu">
            {itemCards ? (
              itemCards.map(item => (
                <div key={item.card.info.id} className="menu-item">
                  <div className="menu-item-text">
                    <h3>{item.card.info.name}</h3>
                    <p>Price: {item.card.info.defaultPrice / 100}</p>
                    <p>Rating: {item.card.info.ratings.aggregatedRating.rating}</p>
                    <p>{item.card.info.description}</p>
                  </div>
                  <div className='rightSide'>
                    <img 
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} 
                      alt={item.card.info.name} 
                      className="menu-item-image"
                    />
                    <button className="add-button" onClick={() => handleAddItem(item)}>ADD +</button>
                  </div>
                </div>
              ))
            ) : (
           'No data Available. Please check other food options' 
            )}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Menu;
