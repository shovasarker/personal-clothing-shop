import React from 'react'
import { connect } from 'react-redux'

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

const CheckoutItem = ({ cartItem, removeItem, reduceQuantity, addItem }) => {
  const leftArrowClick = () =>
    cartItem.quantity > 1 ? reduceQuantity(cartItem) : removeItem(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={cartItem.imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{cartItem.name}</TextContainer>
      <QuantityContainer>
        <ArrowContainer onClick={leftArrowClick}>&#10094;</ArrowContainer>
        <QuantityValueContainer>{cartItem.quantity}</QuantityValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <TextContainer className='price'>${cartItem.price}</TextContainer>
      <RemoveButtonContainer
        className='remove-button'
        onClick={() => removeItem(cartItem)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  reduceQuantity: (cartItem) => dispatch(reduceQuantity(cartItem)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
