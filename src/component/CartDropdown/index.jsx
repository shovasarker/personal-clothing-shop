import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import CartItem from '../CartItem'
import CustomButton from '../CustomButton'

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import {
  CartDropDownContainer,
  CartItemsContainer,
} from './cart-dropdown.styled'

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/checkout')
    dispatch(toggleCartHidden())
  }

  return (
    <CartDropDownContainer length={cartItems.length}>
      <CartItemsContainer length={cartItems.length}>
        {cartItems.length === 0 ? (
          <span>No item added to cart yet</span>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        )}
      </CartItemsContainer>
      <CustomButton onClick={handleClick}>Go to Checkout</CustomButton>
    </CartDropDownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// })

export default connect(mapStateToProps)(CartDropdown)
