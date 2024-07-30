import React from 'react'
import Header from '../../Components/Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { removeitem, clearCart } from '../../utils/CartSlice'
import './Cart.css'

function Cart() {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <div className='cart-container'>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='cart-items'>
            {cartItems.map((item, index) => (
              <div key={index} className='cart-item'>
                <div className='cart-item-info'>
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <p>Rating: {item.rating}</p>
                  <p>{item.description}</p>
                </div>
                <div className='cart-item-image'>
                  <img 
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`} 
                    alt={item.name} 
                    className="cart-item-image"
                  />
                  <button 
                    className="remove-button" 
                    onClick={() => dispatch(removeitem(item.id))}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <button 
            className="clear-button" 
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  )
}

export default Cart
