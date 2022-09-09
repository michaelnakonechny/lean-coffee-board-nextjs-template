import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: { type: String, required: true },
  name: { type: String, required: true },
});

const Schema = mongoose.models.Schema || mongoose.model("Schema", schemaSchema);

export default Schema;
