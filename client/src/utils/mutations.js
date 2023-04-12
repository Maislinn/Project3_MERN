import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
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
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $location: String!
    $avatar: String!
    $oldPassword: String!
    $password: String!
  ) {
    editUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      location: $location
      avatar: $avatar
      oldPassword: $oldPassword
      password: $password
    ) {
      firstName
      lastName
      email
      location
      avatar
      password
    }
  }
`;


export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId) {
      firstName
      lastName
      email
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet(
    $name: String!, $type: String!, $breed: String!, $age: Int!) {
    addPet(name: $name, type: $type, breed: $breed, age: $age) {
      _id
      name
      type
      breed
      age
    }
  }
`;

export const EDIT_PET = gql`
  mutation editPet(
    $petId: ID!
    $name: String!
    $type: String!
    $breed: String!
    $age: Int!
  ) {
    editPet(petId: $petId, name: $name, type: $type, breed: $breed, age: $age) {
      _id
      name
      type
      breed
      age
    }
  }
`;

export const REMOVE_PET = gql`
  mutation removePet($petId: ID!) {
    removePet(petId: $petId) {
      _id
      name
      type
      breed
      age
    }
  }
`;

