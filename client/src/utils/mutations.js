import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

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

export const ADD_PET = gql`
  mutation addPet($petText: String!) {
    addPet(petText: $petText) {
      _id
      petText
      petAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($petId: ID!, $commentText: String!) {
    addComment(petId: $petId, commentText: $commentText) {
      _id
      petText
      petAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
