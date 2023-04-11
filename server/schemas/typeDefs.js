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

  # ❄️ MX-TODO ⏰: check order type ⤵️
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  # ❄️ MX-TODO ⏰: check order type ⤴️

  # ❄️ MX: updated user type based on user model ⤵️
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    location: String
    avatar: String
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
    # ❄️ MX: addUser 🧪✅
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth

    # ❄️ MX: addOrder - ⏰: 🧪
    addOrder(products: [ID]!): Order

    # ❄️ MX: updateUser - ⏰: 🧪
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    
    # ❄️ MX: add/update/delete 🧪✅
    addProduct(name: String!, description: String, price: Float!, services: [String!]!): Product!
    updateProduct(id: ID!, name: String, description: String, price: Float, services: [String]): Product
    deleteProduct(id: ID!): Product
    # ❄️ MX: added product mutation: ⤴️

    # ❄️ MX: login 🧪✅
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
