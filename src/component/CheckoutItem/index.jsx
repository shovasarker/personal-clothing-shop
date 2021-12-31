import React from 'react'
import { connect } from 'react-redux'

import {
  addItem,
  removeItem,
  reduceQuantity,
} from '../../redux/cart/cart.action'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, removeItem, reduceQuantity, addItem }) => {
  const leftArrowClick = () =>
    cartItem.quantity > 1 ? reduceQuantity(cartItem) : removeItem(cartItem)

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={cartItem.imageUrl} alt='item' />
      </div>
      <span className='name'>{cartItem.name}</span>
      <div className='quantity'>
        <div className='arrow' onClick={leftArrowClick}>
          &#10094;
        </div>
        <div className='quantity__value'>{cartItem.quantity}</div>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>
      <span className='price'>${cartItem.price}</span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  reduceQuantity: (cartItem) => dispatch(reduceQuantity(cartItem)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
