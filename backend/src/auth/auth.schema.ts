import { Schema } from 'mongoose';

const AuthSchema = new Schema<AuthT>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      required: false,
      default: 'USER'
    }
  },
  {
    collection: 'auths',
    timestamps: true
  }
);

export { AuthSchema };
