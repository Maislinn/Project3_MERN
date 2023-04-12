import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
{
  products {
    _id
    image
    name
    description
    price
    services
    # 🦄 add category here if needed
  }
}
`;

// query getProducts($category: ID) {
//   products(category: $category) {
//     _id
//     name
//     description
//     price
//     quantity
//     image
//     category {
//       _id
//     }
//   }
// }


export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const GET_USER_BY_ID = gql`
query getUserById($userId: ID!) {
  user(id: $userId) {
    _id
    firstName
    lastName
    avatar
    email
    location
    pets {
      _id
      name
      type
      breed
      age
      image
    }
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
      }
    }
  }
}`
