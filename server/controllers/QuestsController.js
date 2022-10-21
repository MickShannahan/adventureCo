import { questsService } from "../services/QuestsService.js";
import BaseController from "../utils/BaseController.js";



export class QuestsController extends BaseController {
  constructor() {
    super('api/quests')
    this.router
      .get('', this.findAll)

  }

  async findAll(req, res, next) {
    try {
      let quests = await questsService.findAll(req.query)
      return res.send(quests)
    } catch (error) {
      next(error)
    }
  }
}
