import mongoose from 'mongoose';


const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.models.Faq || mongoose.model('Faq', faqSchema);