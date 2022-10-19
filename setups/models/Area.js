import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId


export const AreaSchema = new Schema({
  name: String,
  primaryBiome: String,
  secondaryBiome: String,
  description: String,
  rulerId: { type: ObjectId, ref: 'Person' },
  population: String,
  majorExport: String
}, { toJSON: { virtuals: true } })
