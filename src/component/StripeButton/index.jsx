import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51KCmDPJRLMbRrdCMxbVI1MxlYwGBKycxcxQPz4xsZwhhRrfc4ABxi6TjWmX9d9f6C0k0mSVQCQTtTIyzt8yNIzu400K7Nbs1o8'

  const onToken = (token) => {
    console.log(token)
  }
  return (
    <StripeCheckout
      className='checkout-btn'
      label='Pay Now'
      name='Personal Clothing ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
