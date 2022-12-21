import { Schema } from 'mongoose';

const SubscribeSchema = new Schema<SubscribeT>(
  {
    authId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    categoryId: {
      type: [Schema.Types.ObjectId],
      required: true
    }
  },
  {
    collection: 'subscribes',
    timestamps: true
  }
);

export { SubscribeSchema };
