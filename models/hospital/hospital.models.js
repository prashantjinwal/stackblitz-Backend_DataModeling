import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specializationIn: [
      {
        type: String,
      },
    ],
  },

  { timestamps: true }
);

export const hospital = mongoose.model('Hospital', hospitalSchema);
