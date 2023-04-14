import { gql } from "@apollo/client";


export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
// ❄️ MX: add fields to match User model
// mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
//   addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
//     token
//     user {
//       _id
//       firstName
//       lastName
//     }
//   }
// }


// ❄️ MX: added fields to match User model
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;
