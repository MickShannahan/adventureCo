import { dbContext } from "../db/DbContext.js"


class PlayersService {

  /**
   * Returns a user player from the Auth0 user object
   *
   * Creates user if none exists
   *
   * Adds sub of Auth0 player to player if not currently on player
   * @param {any} user
   */
  async getPlayer(user) {
    let player = await dbContext.Player.findOne({
      _id: user.id
    })
    player = await createPlayerIfNeeded(player, user)
    await mergeSubsIfNeeded(player, user)
    return player
  }

  /**
   * Updates player with the request body, will only allow changes to editable fields
   *  @param {any} user Auth0 user object
   *  @param {any} body Updates to apply to user object
   */
  async updatePlayer(user, body) {
    const update = sanitizeBody(body)
    const player = await dbContext.Player.findOneAndUpdate(
      { _id: user.id },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    )
    return player
  }

}

export const playersService = new PlayersService()

// Private Methods

/**
 * Creates player if one does not exist
 * @param {any} player
 * @param {any} user
 */
async function createPlayerIfNeeded(player, user) {
  if (!player) {
    user._id = user.id
    player = await dbContext.Player.create({
      ...user,
      subs: [user.sub]
    })
  }
  return player
}

/**
 * Adds sub to player if not already on player
 * @param {any} player
 * @param {any} user
 */
async function mergeSubsIfNeeded(player, user) {
  if (!player.subs.includes(user.sub)) {
    // @ts-ignore
    player.subs.push(user.sub)
    await player.save()
  }
}
/**
 * Restricts changes to the body of the player object
 * @param {any} body
 */
function sanitizeBody(body) {
  const writable = {
    name: body.name,
    picture: body.picture
  }
  return writable
}

