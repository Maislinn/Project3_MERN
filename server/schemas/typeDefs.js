const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    services: [String]
  }

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

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]

    products: [Product]
    product(productId: ID!): Product

    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    
    # ❄️ MX: added product mutation: ⤵️
    createProduct(name: String!, description: String, price: Float!, services: [String!]!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float, services: [String]): Product
    deleteProduct(id: ID!): Product
    # ❄️ MX: added product mutation: ⤴️

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
