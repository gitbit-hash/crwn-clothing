import React from 'react';
<<<<<<< HEAD:client/src/components/stripe-button/stripe-button.component.jsx
import axios from 'axios';

=======
>>>>>>> 0fe376eec456a9f589451be2efbd0f9adb41c25c:src/components/stripe-button/stripe-button.component.jsx
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
<<<<<<< HEAD:client/src/components/stripe-button/stripe-button.component.jsx
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment error:', JSON.parse(error));
      alert(
        'There was an issue with your payment, please be sure you use the provided credit cart.'
      );
    })
=======
    console.log(token);
    alert('Payment Succesful!');
>>>>>>> 0fe376eec456a9f589451be2efbd0f9adb41c25c:src/components/stripe-button/stripe-button.component.jsx
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
