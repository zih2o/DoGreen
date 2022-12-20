import { Schema, Types } from 'mongoose';

const likeSchema = new Schema({
  likeUserList: [{
    types: Types.ObjectId
  }],
  likesNum: {
    type: Number,
    default: 0
  }
});

export { likeSchema };
