import React from 'react'
import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemImageContainer,
  NameContainer,
  PriceContainer,
} from './cart-item.styled'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ItemImageContainer src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>
          {quantity} x ${price}
        </PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItem
