import { Schema } from 'mongoose';

const PostSchema = new Schema<PostT>(
  {
    card: {
      type: Schema.Types.ObjectId,
      ref: 'Card',
      required: true
    },
    author: {
      type: String,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      minlength: 5,
      required: true
    },
    likes: {
      likedUserList: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
      }],
      likesNum: {
        type: Number,
        default: 0
      }
    },
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ]
    }
  },
  {
    timestamps: true
  }
);

export { PostSchema };
