import { gql } from "@apollo/client";

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

// query GetProducts {
//     getProducts {
//         _id
//         name
//         images {
//             original
//             thumbnail
//         }
//         description
//         notes
//         styles {
//             name
//             price
//             reducedPrice
//             weight {
//                 value
//                 unit
//             }
//             height {
//                 value
//                 unit
//             }
//         }
//     }
// }

//  ❄️ MX ⚠️: fields not match Product model. also check variables in SingleProduct.jsx file
export const QUERY_SINGLE_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(_id: $id) {
      _id
      name
      images {
        original
        thumbnail
      }
      description
      # notes
      styles {
        name
        price
        reducedPrice
        weight {
          value
          unit
        }
        # height {
        #   value
        #   unit
        # }
      }
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
