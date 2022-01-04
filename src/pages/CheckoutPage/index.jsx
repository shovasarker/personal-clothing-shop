import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../component/CheckoutItem'
import StripeButton from '../../component/StripeButton'

import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  TestWarning,
  Total,
} from './checkout-page.styled'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        <span>TOTAL : ${totalPrice}</span>
      </Total>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 -EXP : 01/22 - CVC : 123
      </TestWarning>
      <StripeButton price={totalPrice} />
    </CheckoutPageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage)
