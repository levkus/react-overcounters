import React from 'react';
import { Component } from 'react';
import HeroesList from '../containers/heroes_list/heroes_list';
import HeroCard from '../containers/hero_card/hero_card';

export default class App extends Component {
  render() {
    return (
      <div className="overwatch">
        <HeroesList />
        <HeroCard />
      </div>
    );
  }
}
