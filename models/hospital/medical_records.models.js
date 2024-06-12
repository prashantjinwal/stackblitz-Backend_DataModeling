import mongoose from "mongoose"

const medical_Schema = new mongoose.Schema({

},{timestamp:true})

export const medicalRecords = mongoose.model("MedicalRecords", medical_Schema)