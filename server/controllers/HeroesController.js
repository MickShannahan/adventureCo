import { AdventureCoProvider } from "../../setups/utils/AdventureCo.js";
import { heroesService } from "../services/HeroesService.js";
import BaseController from "../utils/BaseController.js";


export class HeroesController extends BaseController {
  constructor() {
    super('api/heroes')
    this.router
      .use(AdventureCoProvider.getAuthorizedUserInfo)
      .post('', this.create)
  }


  async create(req, res, next) {
    try {
      const hero = await heroesService.create(req.body)
      return res.send(hero)
    } catch (error) {
      next(error)
    }
  }
}
