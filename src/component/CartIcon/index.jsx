import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.action'

import { selectCartItemsTotalQuantity } from '../../redux/cart/cart.selectors'

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from './cart-icon.styled'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsTotalQuantity,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
