import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { selectHero } from '../../actions/index';
import HeroCardHeader from '../../components/hero_card_header/hero_card_header';
import HeroCardScale from '../../components/hero_card_scale/hero_card_scale';
import HeroCounterItem from '../../components/hero_counter_item/hero_counter_item';
import styles from './hero_card.css';

class HeroCard extends Component {
  render() {
    const heroes = this.props.heroes;
    const activeHero = this.props.activeHero;

    if (!activeHero) {
      return <div className="hero-detail">No hero selected</div>
    }

    const strongAgainst = _.map(activeHero.strongAgainst, id => {
      const counter = _.find(heroes, { id });
      return(
        <HeroCounterItem
          side="right"
          hero={counter}
          handleSelect={() => this.props.selectHero(counter)}
          key={counter.id}
        />
      );
    });

    const weakAgainst = _.map(activeHero.weakAgainst, id => {
      const counter = _.find(heroes, { id });
      return(
        <HeroCounterItem
          side="left"
          hero={counter}
          handleSelect={() => this.props.selectHero(counter)}
          key={counter.id}
        />
      );
    });

    return(
      <div className="hero-detail">
        <div className={styles.card}>
          <HeroCardHeader image={activeHero.hex} name={activeHero.name} />
          <div className={styles.info}>
            <div className={styles.strong}>{strongAgainst}</div>
            <HeroCardScale />
            <div className={styles.weak}>{weakAgainst}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes,
    activeHero: state.activeHero
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectHero: selectHero }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroCard);
