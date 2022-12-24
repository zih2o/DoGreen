import { Schema } from 'mongoose';

const ImageSchema = new Schema<ImageT>(
  {
    link: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }

);

export { ImageSchema };
