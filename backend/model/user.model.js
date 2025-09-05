import mongoose, { Schema, version } from "mongoose";

const resumeSchema = new Schema(
  {
    version: {
      type: Number,
      required: true,
    },
    personalDetails: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    education: [String],
    experience: [String],
    skills: [String],
  },
  { timestamps: true }
);

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  resumes: [resumeSchema],
});

module.exports = mongoose.model("User", userSchema);
