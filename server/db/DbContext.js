import mongoose from "mongoose"
import { HeroesSchema } from "../models/Hero.js"
import { QuestSchema } from "../models/Quest.js"

class DbContext {
  Heroes = mongoose.model('Hero', HeroesSchema)

  Quests = mongoose.model('Quest', QuestSchema)
}

export const dbContext = new DbContext()
