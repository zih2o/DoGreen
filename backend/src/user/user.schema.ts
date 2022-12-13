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
    },
    role: {
      // TODO default와 enum 충돌 안나는지 확인하기
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
