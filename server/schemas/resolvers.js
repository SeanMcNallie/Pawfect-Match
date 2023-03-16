const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('pets');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('pets');
    },
    pets: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Pet.find(params).sort({ createdAt: -1 });
    },
    pet: async (parent, { petId }) => {
      return Thought.findOne({ _id: petId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('pets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
//     addComment: async (parent, { petId, commentText }, context) => {
//       if (context.user) {
//         return Pet.findOneAndUpdate(
//           { _id: petId },
//           {
//             $addToSet: {
//               comments: { commentText, commentAuthor: context.user.username },
//             },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
//     removeComment: async (parent, { petId, commentId }, context) => {
//       if (context.user) {
//         return Pet.findOneAndUpdate(
//           { _id: petId },
//           {
//             $pull: {
//               comments: {
//                 _id: commentId,
//                 commentAuthor: context.user.username,
//               },
//             },
//           },
//           { new: true }
//         );
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },
  },
};

module.exports = resolvers;
