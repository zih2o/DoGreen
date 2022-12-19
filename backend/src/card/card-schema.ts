import { Schema } from 'mongoose';

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

export { cardSchema };
