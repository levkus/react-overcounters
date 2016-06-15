import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { selectHero } from '../actions/index';
import HeroCounterItem from '../components/hero_counter_item';
import HeroDetailScale from '../components/hero_detail_scale';

class HeroDetail extends Component {
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
        <div className="hero-card">
          <div className="hero-card__header">
            <img className="hero-card__image" src={activeHero.hex} alt={this.props.activeHero.name}/>
            <div className="hero-card__name">{activeHero.name}</div>
          </div>
          <div className="hero-card__info">
            <div className="hero-info__strong">{strongAgainst}</div>
            <HeroDetailScale />
            <div className="hero-info__weak">{weakAgainst}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);
