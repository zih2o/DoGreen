import { Schema } from 'mongoose';

const PersonalCommentSchema = new Schema<perosnalCommentT>(
  {
    authId: {
      type: Schema.Types.ObjectId,
      require: true
    },

    commentId: {
      type: [Schema.Types.ObjectId]
    }
  },
  {
    timestamps: true
  }
);
export { PersonalCommentSchema };
