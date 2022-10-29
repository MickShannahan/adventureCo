import { DbStatic } from './BaseStatic.js'


class Heroes extends DbStatic {


  illani = {
    _id: "635d492c049de2c1f9bc1982",
    name: "Illani Dreamcarver",
    race: "Human",
    level: 5,
    class: "Fighter"
  }

}

export const heroes = new Heroes()
