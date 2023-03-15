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
        pets{
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
          _id
          shelterPetId
          breeds {
            breed
          }
          sex
          description
          mix
          shelterId
          lastUpdate
          animal
        }
      }
    }
`;

export const QUERY_SINGLE_PET = gql`
  query getSinglePet($petId: ID!) {
    pett(id: $id) {
      _id
      name
      status
      age
      size
      shelterPetId
      sex
      description
      mix
      shelterId
      lastUpdate
      animal
      media {
        photos {
          size
          url
        }
      }
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       pets {
//         _id
//         petText
//         petAuthor
//         createdAt
//       }
//     }
//   }
// `;
