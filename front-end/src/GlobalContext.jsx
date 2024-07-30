// GlobalContext.jsx
import React, { useState, useEffect, createContext } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useLocation } from "react-router-dom";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
    const [restaurants, setRestaurants] = useState([]); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://back-end-ten-phi.vercel.app/api/home');
                const result = await response.json();
                const extractedRestaurants = result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info);
                setRestaurants(extractedRestaurants);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);


    useEffect(() => {
        if (location.pathname === '/') {
            setSearchQuery('');
        }
    }, [location]);
    

    useEffect(() => {
        if (searchQuery) {
            setFilteredRestaurants(
                restaurants.filter(restaurant =>
                    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredRestaurants(restaurants);
        }
    }, [searchQuery, restaurants]);


    const skeletonLoader = (
        <div className="skeleton-wrapper">
            {Array.from({ length: 10 }).map((_, index) => (
                <div className="skeleton-card" key={index}>
                    <Skeleton height={200} />
                    <Skeleton count={3} />
                </div>
            ))}
        </div>
    );

    return (
        <GlobalContext.Provider value={{ restaurants: filteredRestaurants, setSearchQuery }}>
            {loading ? skeletonLoader : children}
        </GlobalContext.Provider>
    )
}
