const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    pets: [Pet]!
  }

  type Pet {
    _id: ID
    petText: String
    petAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type PetData {
    name: String
    status: Boolean
    age: String
    size: Int
    gender: String
    type: String
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
    searchPets(searchText: String!): [PetData]
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
