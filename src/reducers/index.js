import { combineReducers } from 'redux';
import HeroesReducer from './reducer_heroes';
import ActiveHeroReducer from './reducer_active_hero';

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  activeHero: ActiveHeroReducer
});

export default rootReducer;
