import { Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    refPost: {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export { commentSchema };
