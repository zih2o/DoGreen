import { Schema } from 'mongoose';

const PostSchema = new Schema<PostT>(
  {
    card: {
      type: Schema.Types.ObjectId,
      ref: 'Card'
    },
    author: {
      type: String,
      ref: 'User'
    },
    content: {
      type: String,
      minlength: 5
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
