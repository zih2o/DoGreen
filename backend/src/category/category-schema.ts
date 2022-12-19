import { Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  index: {
    type: Number,
    require: true,
    unique: true
  },
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card'
  }]
});

export { CategorySchema };
