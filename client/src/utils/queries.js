import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
query GetProducts {
    products {
      _id
      name
      image
      description
      price
      services
    }
  }
  `;

export const QUERY_SINGLE_PRODUCT = gql`
query GetProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      image
      description
      price
      services
    }
  }
`;

// ❄️ MX ⚠️: not been used
export const QUERY_USERS = gql`
  query GetUsers {
    getUsers {
      _id
      username
      email
    }
  }
`;

// ❄️ MX ⚠️: not been used
export const QUERY_ORDERS = gql`
  query GetOrders {
    getOrders {
      _id
      user
      date
      price
    }
  }
`;

// ❄️ MX ⚠️: used in OrderHistory.jsx but not match order/user model-no username field
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
