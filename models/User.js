const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
        // ret is the returned Mongoose document
        transform: (_doc, ret) => {
          delete ret.password;
          return ret;
        },
      },
    }
  );

  const User = mongoose.model('User', UserSchema)

  module.exports = User