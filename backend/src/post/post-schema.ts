import { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    card: {
      type: Schema.Types.ObjectId,
      ref: 'Card',
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      minlength: 5,
      required: true
    },
    likes: {
      likesUser: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
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
