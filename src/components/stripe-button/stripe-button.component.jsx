import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HqTXlGBj3iwSEVZgkWVgwYJMldfNmM8URSOLYGRKyhdvZ0ePezXWmBviKNPesgUSP73mmHFRcL1HnEG3rD9B5V600MztWoFSS';


 const tokenSuccess=(token)=>{
     alert('Payment Successful')
 }   
    return(
        <StripeCheckout
        label='Pay Now'
        name='Sparsh furniture'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={tokenSuccess}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
