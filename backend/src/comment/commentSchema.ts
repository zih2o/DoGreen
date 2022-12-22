import { Schema } from 'mongoose';

const CommentSchema = new Schema<CommentT>(
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

export { CommentSchema };
