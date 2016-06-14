// Action creator returns an Action (an object with type and payload)

export function selectHero(hero) {
  return {
    type: 'HERO_SELECTED',
    payload: hero
  }
}
