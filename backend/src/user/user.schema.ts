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
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    isDeleted: {
      type: Boolean
    },
    bio: {
      type: String,
      default: 'Hi there!'
    },
    imgUrl: {
      type: String,
      default: 'https://user-images.githubusercontent.com/91370858/208048148-47028f2f-d283-4ab1-a43e-3c073543161e.png'
    }
  },
  {
    collection: 'users',
    timestamps: true
  }
);

export { UserSchema };
