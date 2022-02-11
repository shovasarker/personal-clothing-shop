import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CartItem from '../CartItem'
import CustomButton from '../CustomButton'

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import {
  CartDropDownContainer,
  CartItemsContainer,
} from './cart-dropdown.styled'

const CartDropdown = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
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

export default CartDropdown
