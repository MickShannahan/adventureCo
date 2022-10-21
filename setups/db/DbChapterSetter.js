import mongoose from "mongoose";
import { logger } from "../../server/utils/Logger.js";
import { areas } from "./statics/Areas.js";
import { persons } from "./statics/Persons.js";
import { quests } from "./statics/Quests.js";

const statics = {
  Person: persons.Data,
  Area: areas.Data,
  Quest: quests.Data
}

export class DbChapters {
  static async handleChapter(req, res, next) {
    try {
      let chap = req.headers.chapter
      if (chap) {
        await DbChapters.setChapter(chap)
      }
      next()
    } catch (error) {
      next(error)
    }
  }

  static async setChapter(chapter) {
    logger.log('chapter', chapter)
    switch (parseInt(chapter)) {
      case 1: // easy posting
      case 2: // medium posting
      case 3: // hard posting
        await clearCollection('Hero')
        await resetCollection('Person')
        await resetCollection('Area')
        break
      case 4: // easy getting
      case 5: // medium getting
      case 6: // hard getting
        resetCollection('Person')
        resetCollection('Area')
        resetCollection('Quest')
        break
    }
  }
}

async function initCollection(collection) {
  if (!mongoose[collection]) {
    mongoose.model(collection)
  }
  await mongoose.model(collection).insertMany(statics[collection])
  // await dbCtx[collection].insertMany(statics[collection])
}

async function clearCollection(collection) {
  if (mongoose.model(collection) && await mongoose.model(collection).exists({})) {
    await mongoose.model(collection).deleteMany()
  }
}

async function resetCollection(collection) {
  await clearCollection(collection)
  await initCollection(collection)
}
