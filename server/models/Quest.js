import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId


export const QuestSchema = new Schema({
  title: String,
  description: String,
  type: String,
  goldReward: Number,
  questGiverId: { type: ObjectId, required: true, ref: 'Person' },
  areaId: { type: ObjectId, required: true, ref: 'Area' },
  completed: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: new Date() }

}, { toJSON: { virtuals: true } })

QuestSchema.virtual('area', {
  localField: 'areaId',
  foreignField: '_id',
  ref: 'Area',
  justOne: true
})

QuestSchema.virtual('questGiver', {
  localField: 'questGiverId',
  foreignField: '_id',
  ref: 'Person',
  justOne: true
})
