import { Schema } from 'mongoose';

const PostSchema = new Schema<PostT>(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: 'categories'
    },
    content: {
      type: String,
      minlength: 5,
      required: true
    },
    imageList: [{
      type: String
    }],
    likes: {
      type: Schema.Types.ObjectId,
      ref: 'likes'
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'comments'
    }]
  },
  {
    timestamps: true
  }
);

export { PostSchema };
