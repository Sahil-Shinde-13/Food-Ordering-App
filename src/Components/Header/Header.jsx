import React from 'react'
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {

  const cartItems = useSelector((store) => store.cart.items)
  

  return (
    <div className='header'>
        <div className="logo">
        <Link to={'/'}> <img className='logo-img' src="https://gitlab.com/uploads/-/system/project/avatar/5133220/order.png" /></Link>
        </div>
        <div className="nav">
            <ul>
                <Link to={'/'}><li><HomeIcon/>Home</li></Link>
                <li><InfoIcon/>About Us</li>
                 <li><PhoneIcon/>Contact Us</li>
                 <Link to={'/cart'}><li><ShoppingCartIcon/>Cart - ({cartItems.length})</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header