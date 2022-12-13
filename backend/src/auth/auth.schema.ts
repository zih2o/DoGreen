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
    }
  },
  {
    collection: 'auths',
    timestamps: true
  }
);

export { AuthSchema };
