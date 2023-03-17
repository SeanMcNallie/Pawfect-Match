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

// petsearch query
export const QUERY_SEARCH_PETS = gql`
  query searchPets (
      $location: String
      $animal: String
      ){
      searchPets (
        location: $location
        animal: $animal
      ){
        pets {
          name
          status
          age
          size
          media {
            photos {
              size
              url
            }
          }
          breeds {
            breed
          }
          sex
          description
          shelterId
        }
      }
    }
`;

export const QUERY_PET_DATA = gql`
  query getPetData($petId: ID!) {
    pet(id: $id) {
      name
      status
      age
      size
      sex
      description
      mix
      shelterId
      media {
        photos {
          size
          url
        }
      }
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
