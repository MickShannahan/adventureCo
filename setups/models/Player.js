import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Hint = new Schema({
  name: { type: String, required: true },
  goldCost: { type: Number, required: true, default: 1 },
  body: { type: String, required: true }
})
export const PlayerSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },

    checkpoint: { type: Number, required: true, default: 0 },
    chapter: { type: Number, requierd: true, default: 1 },
    gold: { type: Number, required: true, default: 0 },
    totalGold: { type: Number, required: true, default: 0 },
    medalsArr: [{ type: String }],
    unlockedHints: [{ type: Hint }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)


