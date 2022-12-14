import { Schema } from 'mongoose';

// timestamp => createdAt, updatedAt
// Auth => 비밀번호 변경
// User => 사용자 정보 변경

const UserSchema = new Schema<UserT>(
  {
    auth: {
      type: Schema.Types.ObjectId,
      ref: 'auths'
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    collection: 'users',
    timestamps: true
  }
);

export { UserSchema };
