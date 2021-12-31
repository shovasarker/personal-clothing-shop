import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import CartItem from '../CartItem'
import CustomButton from '../CustomButton'

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/checkout')
    dispatch(toggleCartHidden())
  }

  return (
    <div className={`${cartItems.length === 0 ? 'hidden' : ''} cart-dropdown`}>
      <div className={`cart-items`}>
        {cartItems.length === 0 ? (
          <span>No item added to cart yet</span>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        )}
      </div>
      <CustomButton onClick={handleClick}>Go to Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// })

export default connect(mapStateToProps)(CartDropdown)
