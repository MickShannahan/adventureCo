import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId


export const QuestSchema = new Schema({
  title: String,
  description: String,
  type: String,
  goldReward: Number,
  questGiverId: { type: ObjectId, required: true, ref: 'Person' },
  areaId: { type: ObjectId, required: true, ref: 'Area' },
  completed: { type: Boolean, required: true, default: false }

}, { toJSON: { virtuals: true } })
