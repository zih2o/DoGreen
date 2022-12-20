import { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
      required: true
    },
    content: {
      type: String,
      minlength: 5,
      required: true
    },
    image: {
      type: String
    },
    likes: {
      type: Schema.Types.ObjectId,
      ref: 'likes'
    },
    comments: {
      type: Schema.Types.ObjectId,
      ref: 'comeents'
    }
  },
  {
    timestamps: true
  }
);

export { PostSchema };
