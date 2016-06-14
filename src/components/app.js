import React from 'react';
import { Component } from 'react';
import HeroesList from '../containers/heroes_list';
import HeroDetail from '../containers/hero_detail';
import Trianglify from 'trianglify';

export default class App extends Component {
  render() {
    return (
      <div className="overwatch">
        <HeroesList />
        <HeroDetail />
      </div>
    );
  }
}
