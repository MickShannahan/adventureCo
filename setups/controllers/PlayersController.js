import BaseController from "../../server/utils/BaseController.js";
import { playersService } from "../services/PlayersService.js";



export class PlayersController extends BaseController {
  constructor() {
    super('setup/players')
    this.router
      .get('', this.getOrCreatePlayer)
      .post('', this.getOrCreatePlayer)
  }

  async getOrCreatePlayer(req, res, next) {
    try {
      let player
      if (req.body) {
        player = await playersService.getPlayer(req.body)
      } else {
        player = await playersService.getPlayer(req.userInfo)
      }
      return res.send(player)
    } catch (error) {
      next(error)
    }
  }
}
