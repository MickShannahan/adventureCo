import { dbContext } from "../db/DbContext.js"



class QuestsService {
  async findAll(query = {}) {
    const quests = await dbContext.Quests.find(query)
      .populate('area')
      .populate('questGiver', 'name role title age alive race bio')
      .sort('-createdAt')
      .limit(20)
    return quests
  }

}

export const questsService = new QuestsService()
