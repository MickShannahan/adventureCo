import { areas } from "./Areas.js"
import { DbStatic } from "./BaseStatic.js"
/**
 * persons contain
 * name
 * title
 * alias
 * role
 * age
 * race
 * bio
 * imgUrl
 * alive
 * lastBathed
 * weakness
 * areaId
 */

class Persons extends DbStatic {
  bilbo = {
    _id: '635021f123ac768cc78b5aa7',
    name: 'Bilbo',
    title: 'Ring Bearer',
    alias: null,
    role: 'mercenary',
    age: 35,
    race: 'Halfling',
    bio: 'Short Brown curly hair, hairy feet',
    imgUrl: '//thiscatdoesnotexist.com', // halfling
    alive: true,
    lastBathed: 350,
    weakness: 'Gullible',
    areaId: areas.shire._id // shire
  }
  mrPigpen = {
    _id: '6351708d0c2cb106b07b109e',
    name: 'Mr. Pigpen',
    title: 'Pig keeper',
    alias: null,
    role: 'farm worker',
    age: 45,
    race: 'Human',
    bio: "short bald man, quite round and not too pretty to look at",
    imgUrl: '//thiscatdoesnotexist.com', // human
    alive: true,
    lastBathed: 16425,
    weakness: 'Vanity',
    areaId: areas.shire._id
  }
}
export const persons = new Persons()
