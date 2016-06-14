import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHero } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import HeroesListItem from '../components/heroes_list_item';

class HeroesList extends Component {
  renderList() {
    const offense = _.map(_.filter(this.props.heroes, {role: 'offense'}), hero => {
      return <HeroesListItem hero={hero} handleSelect={() => this.props.selectHero(hero)} key={hero.id}/>
    });
    const defense = _.map(_.filter(this.props.heroes, {role: 'defense'}), hero => {
      return <HeroesListItem hero={hero} handleSelect={() => this.props.selectHero(hero)} key={hero.id}/>
    });
    const tank = _.map(_.filter(this.props.heroes, {role: 'tank'}), hero => {
      return <HeroesListItem hero={hero} handleSelect={() => this.props.selectHero(hero)} key={hero.id}/>
    });
    const support = _.map(_.filter(this.props.heroes, {role: 'support'}), hero => {
      return <HeroesListItem hero={hero} handleSelect={() => this.props.selectHero(hero)} key={hero.id}/>
    });

    return (
      <div className="heroes-list__class">
        <h3 className="heroes-class__header">Offense</h3>
        <div className="heroes-class__heroes">{offense}</div>
        <h3 className="heroes-class__header">Defense</h3>
        <div className="heroes-class__heroes">{defense}</div>
        <h3 className="heroes-class__header">Tank</h3>
        <div className="heroes-class__heroes">{tank}</div>
        <h3 className="heroes-class__header">Support</h3>
        <div className="heroes-class__heroes">{support}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="heroes-list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectHero: selectHero }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
