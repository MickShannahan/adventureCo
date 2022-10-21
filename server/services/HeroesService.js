import { dbContext } from "../db/DbContext.js"



class HeroesService {
  async create(heroData) {
    const hero = dbContext.Heroes.create(heroData)
    return hero
  }
}

export const heroesService = new HeroesService()
