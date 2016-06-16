import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHero } from '../../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import HeroesListItem from '../../components/heroes_list_item/heroes_list_item';
import HeroesListClass from '../../components/heroes_list_class/heroes_list_class';
import styles from './heroes_list.css';

import iconBullets from './svg/bullets.svg';
import iconCross from './svg/cross.svg';
import iconShield from './svg/shield.svg';
import iconTower from './svg/tower.svg';

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
      <div>
        <HeroesListClass role='Offense' icon={iconBullets} heroes={offense} />
        <HeroesListClass role='Defense' icon={iconTower} heroes={defense} />
        <HeroesListClass role='Tank' icon={iconShield} heroes={tank} />
        <HeroesListClass role='Support' icon={iconCross} heroes={support} />
      </div>
    );
  }

  render() {
    return (
      <div className={styles.heroesList}>
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
