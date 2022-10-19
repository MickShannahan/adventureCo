import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../../server/utils/BaseController.js";
import { playersService } from "../services/PlayersService.js";



export class PlayersController extends BaseController {
  constructor() {
    super('setup/players')
    this.router
      // use require auth?
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.getOrCreatePlayer)
  }

  async getOrCreatePlayer(req, res, next) {
    try {
      req.userInfo.name = req.body.playerName
      const player = await playersService.getPlayer(req.userInfo)
      return res.send(player)
    } catch (error) {
      next(error)
    }
  }
}
