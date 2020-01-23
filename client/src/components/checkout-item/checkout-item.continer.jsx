import React from 'react';

import { graphql } from 'react-apollo';

import { flowRight as compose } from 'lodash';

import { gql } from 'apollo-boost';

import CheckoutItem from './checkout-item.component';

const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

const ADD_ITEM_FROM_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = ({
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
  ...otherProps
}) => (
    <CheckoutItem
      {...otherProps}
      clearItem={item => clearItemFromCart({ variables: { item } })}
      removeItem={item => removeItemFromCart({ variables: { item } })}
      addItem={item => addItemToCart({ variables: { item } })}
    />
  );

export default compose(
  graphql(CLEAR_ITEM_FROM_CART, { name: 'clearItemFromCart' }),
  graphql(REMOVE_ITEM_FROM_CART, { name: 'removeItemFromCart' }),
  graphql(ADD_ITEM_FROM_CART, { name: 'addItemToCart' })
)(CollectionItemContainer);