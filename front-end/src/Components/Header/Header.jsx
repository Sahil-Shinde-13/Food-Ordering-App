import React, { useState } from 'react';
import styles from './Header.module.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMenu } from 'react-icons/io5';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <img className={styles.logoImg} src="https://gitlab.com/uploads/-/system/project/avatar/5133220/order.png" alt="Logo" />
        </Link>
        <h4 className={styles.logoText}>FoodHunt</h4>
      </div>
      <div className={`${styles.mobileMenu} ${mobileMenu ? styles.show : ''}`}>
        <ul className={styles.menuList}>
          <Link to={'/'}><li><HomeIcon />Home</li></Link>
          <li><InfoIcon />About Us</li>
          <Link to={'/contact'}><li><PhoneIcon />Contact Us</li></Link>
          <Link to={'/cart'}><li><ShoppingCartIcon />Cart - ({cartItems.length})</li></Link>
        </ul>
      </div>
      <IoMenu className={styles.menuIcon} onClick={toggleMenu} />
    </div>
  );
}

export default Header;
