import { Schema } from 'mongoose';

const CommentSchema = new Schema<CommentT>(
  {
    refPost: {
      type: Schema.Types.ObjectId,
      ref: 'posts'
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    comment: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export { CommentSchema };
