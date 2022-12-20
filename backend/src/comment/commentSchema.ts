import { Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    author: {
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
