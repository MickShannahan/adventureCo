import Cache from "node-cache";
import { logger } from "../../server/utils/Logger.js";
import { dbCtx } from "../db/DbContext.js";
import { BadRequest, UnAuthorized } from "./Errors.js";

let userInfoCache = new Cache({ stdTTL: 60 * 5 });


export class AdventureCoProvider {


  /**
   * Express Middleware:
   *
   * Will validate a user token and extend req to include
   *
   * req.user : { Identity },
   * req.userInfo : { UserInfo }
   *
   * onerror : next(e)
   *
   * onsuccess : calls next()
   *
   * @param {any} req
   * @param {any} res
   * @param {Function} next
   */
  static async getAuthorizedUserInfo(req, res, next) {
    logger.log('getting info')
    const getUserInfo = async (err) => {
      try {
        logger.log('using middleware', req)
        if (err instanceof Error) {
          throw err;
        }
        if (userInfoCache.has(req.userId)) {
          req.userInfo = userInfoCache.get(req.userId);
          req.userInfo.fromCache = true;
          return next();
        }
        req.userInfo = await AdventureCoProvider.getUserInfoFromBearerToken(
          req.headers.authorization
        );
        req.userId = req.userInfo._id.toString()
        userInfoCache.set(req.userId, req.userInfo);
        next();
      } catch (e) {
        next(e);
      }
    };
    getUserInfo()
    // AdventureCoProvider.isAuthorized(req, res, getUserInfo);
  }



  /**
   * Validates and returns userInfo from a BearerToken
   * @param {string} bearerToken
   */
  static async getUserInfoFromBearerToken(bearerToken = "") {

    return new Promise(async (resolve, reject) => {

      if (typeof bearerToken != "string") {
        return reject(new BadRequest("Bad Input"))
      }
      logger.log('checking token', bearerToken)
      if (!bearerToken.includes("Bearer")) {
        bearerToken = "Bearer " + bearerToken;
      }
      // const claims = jsonwebtoken.decode(bearerToken.slice(7), { complete: true }) || { payload: {} }
      // used to fake a jwt token
      const userId = bearerToken.slice(bearerToken.lastIndexOf('_') + 1).trim()
      logger.log('Id from bearer token:', userId)

      try {
        // @ts-ignore
        if (userInfoCache.has(userId)) {
          // @ts-ignore
          return resolve(userInfoCache.get(userId))
        }
        logger.log('not in cache getting from db')
        let userInfo = await dbCtx.Players.findOne({ _id: userId })
        console.log('player found', userInfo)
        if (!userInfo) {
          userInfo = await dbCtx.Persons.findOne({ _id: userId })
          console.log('person found')
        }
        if (!userInfo) {
          throw new Error('no player/person by that id')
        }
        // @ts-ignore
        userInfoCache.set(userId, userInfo);
        return resolve(userInfo);
      } catch (e) {
        reject(new UnAuthorized("[unable to validate owl-bearer token] " + e.message));
      }
    })
  }

}
