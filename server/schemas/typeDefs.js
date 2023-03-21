const { gql } = require("apollo-server-express");

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  password: String
  name: String
  address: String
  phone: String
  pets: [Pet]!
}

  type Pet {
    _id: ID
    petText: String
    petAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type PetBreedData {
    primary: String
    secondary: String
    mixed: Boolean
  }

  type PetPhoto {
    small: String
    medium: String
    large: String
    full: String
  }

  type PetData {
    name: String
    status: Boolean
    age: String
    size: Int
    gender: String
    type: String
    breeds: PetBreedData
    house_trained: Boolean
    organization: String
    location: String
    photos: [PetPhoto]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    pets(username: String): [Pet]
    pet(petId: ID!): Pet
    me: User
    searchPets(postalCode: String!, animalType: String!): [PetData]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(petText: String!): Pet
    addComment(petId: ID!, commentText: String!): Pet
    removePet(petId: ID!): Pet
    removeComment(petId: ID!, commentId: ID!): Pet
  }
`;

module.exports = typeDefs;
