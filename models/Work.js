import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['short', 'long', 'vsl'],
    required: true,
    unique: true 
  },
  videos: {
    type: [String],
    validate: [arr => arr.length <= 4, 'Max 4 videos allowed'],
    default: []
  }
});

export default mongoose.models.Video || mongoose.model('Video', videoSchema);
