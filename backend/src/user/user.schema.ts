import { Schema } from 'mongoose';

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    role: { // TODO default와 enum 충돌 안나는지 확인하기
      type: String,
      enum: ['USER', 'ADMIN'],
      required: false,
      default: 'USER'
    }
  },
  {
    collection: 'users',
    timestamps: true
  }
);

export { UserSchema };
