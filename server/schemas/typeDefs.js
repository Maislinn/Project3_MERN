const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    # ❄️ MX: added product type: ⤵️
    _id: ID!
    name: String!
    description: String
    price: Float!
    services: [String!]
    # ❄️ MX: added product type: ⤴️
  }

  # ❄️ MX-TODO ⏰: check order&user type ⤵️
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  # ❄️ MX-TODO ⏰: check order&user type ⤴️

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]

    # ❄️ MX: added products query: ⤵️
    products: [Product!]!
    product(_id: ID!): Product
    # ❄️ MX: added product query: ⤴️

    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    # ❄️ MX-TODO ⏰: check order&user mutation type ⤵️
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    
    # ❄️ MX: added product mutation: ⤵️
    addProduct(name: String!, description: String, price: Float!, services: [String!]!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float, services: [String]): Product
    deleteProduct(id: ID!): Product
    # ❄️ MX: added product mutation: ⤴️

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
