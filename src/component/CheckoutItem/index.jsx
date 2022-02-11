import React from 'react'
import { useDispatch } from 'react-redux'

import {
  addItem,
  removeItem,
  reduceQuantity,
} from '../../redux/cart/cart.action'
import {
  ArrowContainer,
  CheckoutItemContainer,
  Image,
  ImageContainer,
  QuantityContainer,
  QuantityValueContainer,
  RemoveButtonContainer,
  TextContainer,
} from './checkout-item.styled'

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const leftArrowClick = () => {
    cartItem.quantity > 1
      ? dispatch(reduceQuantity(cartItem))
      : dispatch(removeItem(cartItem))
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={cartItem.imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{cartItem.name}</TextContainer>
      <QuantityContainer>
        <ArrowContainer onClick={leftArrowClick}>&#10094;</ArrowContainer>
        <QuantityValueContainer>{cartItem.quantity}</QuantityValueContainer>
        <ArrowContainer onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <TextContainer className='price'>${cartItem.price}</TextContainer>
      <RemoveButtonContainer
        className='remove-button'
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
