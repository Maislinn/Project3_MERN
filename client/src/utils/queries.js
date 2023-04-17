import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
query GetProducts {
    getProducts {
        _id
        name
        images {
            original
            thumbnail
        }
        description
        notes
        styles {
            name
            price
            reducedPrice
            weight {
                value
                unit
            }
            height {
                value
                unit
            }
        }
    }
}
`;

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
        notes
        styles {
            name
            price
            reducedPrice
            weight {
                value
                unit
            }
            height {
                value
                unit
            }
        }
    }
}
`;

export const QUERY_USERS = gql`
    query GetUsers {
        getUsers {
            _id
            username
            email
        }
    }
`;

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

