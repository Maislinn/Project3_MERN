const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    image: String
    description: String
    price: Float
    services: [String]
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

    products: [Product]
    product(productId: ID!): Product

    # 🦄 rbk: added just to check users in apollo sandbox
    users: [User]!

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
