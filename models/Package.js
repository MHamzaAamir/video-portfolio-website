import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  billing: { type: String, required: true },
  features: [{ type: String, required: true }]
});

export default mongoose.models.Package || mongoose.model("Package", packageSchema);
