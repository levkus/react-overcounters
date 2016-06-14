// State argument is not app state, but only state that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'HERO_SELECTED':
      return action.payload;
  }

  return state;
}
