import { DbStatic } from "./BaseStatic.js"

/**
 * Areas contain
 *
 * name
 * primaryBiome
 * secondaryBiome
 * description
 * leaderId
 * population
 * majorExport
 */
class Areas extends DbStatic {
  shire = {
    _id: '635022f904d0ea6de5c69c6b',
    name: 'Shire',
    primaryBiome: 'Grassland',
    secondaryBiome: 'village',
    description: 'low rolling grassy knolls and hills for as long as the eye can see.',
    leaderId: null,
    population: 'small',
    majorExport: 'Potatoes'
  }
}


export const areas = new Areas()
