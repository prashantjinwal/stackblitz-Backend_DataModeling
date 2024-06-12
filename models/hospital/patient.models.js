import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    diagonsedWith: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    Age: {
      type: Number,
      required: true,
    },

    bloodGroup: {
      type: String,
      enum:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      required: true,
    },

    gender: { 
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    addmittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }

  },{ timestamps: true }
);

export const patient = mongoose.model('patient', patientSchema);
