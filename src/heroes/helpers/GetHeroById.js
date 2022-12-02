import { heroes } from "../data/heroes"

export const GetHeroById = (id) => {
    //find devuelve el objeto que coincida o undefined
  return heroes.find(hero => hero.id === id);
}
