import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId


export const PersonSchema = new Schema({
  name: String,
  title: String,
  alias: String,
  role: String,
  areaId: { type: ObjectId },
  alive: { type: Boolean, required: true, default: true },
  bio: { type: String },
  imgUrl: { type: String },
  // NOTE hide these
  age: Number,
  race: String,
  lastBathed: Date,
  weakness: String
}, { toJSON: { virtuals: true } })
