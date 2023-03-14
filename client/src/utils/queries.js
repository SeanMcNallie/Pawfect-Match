import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      pets {
        _id
        petText
        createdAt
      }
    }
  }
`;

export const QUERY_PETS = gql`
  query getPets {
    thoughts {
      _id
      petText
      petAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PET = gql`
  query getSinglePet($pettId: ID!) {
    thought(petId: $petId) {
      _id
      petText
      petAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      pets {
        _id
        petText
        petAuthor
        createdAt
      }
    }
  }
`;
