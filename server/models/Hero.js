import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const HeroesSchema = new Schema({
  // TODO create your hero schema  here!
  name: { type: String, required: true, minlength: 3, maxlength: 25 },
  race: { type: String, required: true },
  level: { type: Number, required: true, min: 1, max: 20 },
  class: { type: String, required: true }
})
