import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.action'

import { selectCartItemsTotalQuantity } from '../../redux/cart/cart.selectors'

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from './cart-icon.styled'

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsTotalQuantity)
  const dispatch = useDispatch()
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

export default CartIcon
