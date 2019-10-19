import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_qY6qKJRoM90txwmRa1Bov34X00eNuJCYE6';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  //4242 4242 4242 4242 Exp: 01/20 CVV 123
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is €${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
