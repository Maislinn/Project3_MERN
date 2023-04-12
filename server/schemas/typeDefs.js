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

  # 🦄 rbk: added orderItemSchema
  type orderItemSchema {
    _id: ID
    product: ID
    startDate: String
    endDate: String 
  }

  # ❄️ MX-TODO ⏰: check order type ⤵️
  # 🦄 rbk: modified Order type to reflect change made (orderItems instead of products)
  type Order {
    _id: ID
    purchaseDate: String
    orderItems: [orderItemSchema]
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

    # 🦄 rbk: added users just to check users in apollo sandbox
    users: [User]!

    user: User

    # 🦄 rbk: adding query all orders
    orders: [Order]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    # ❄️ MX: addUser 🧪✅
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth

    # ❄️ MX: addOrder - ⏰: 🧪
    #addOrder(products: [ID]!): Order
    # 🦄 rbk: commented out original addOrder mutation, adding new mutation based on recent changes
    addOrder(product: [ID!], startDate: [String!], endDate: [String]): Order 


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
