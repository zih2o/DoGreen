import { Schema, Types } from 'mongoose';

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
    likeUserList: {
      type: Types.ObjectId
    },
    likesNum: {
      type: Number,
      default: 0
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
