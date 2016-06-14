import React, { Component } from 'react';

export default class HeroDetailScale extends Component {
  render() {
    return (
      <div className="hero-info__scale">
        <div className="scale__row">
          <div className="scale--filled"></div>
          <div className="scale--filled"></div>
          <div className="scale--filled"></div>
          <div className="scale--filled"></div>
        </div>
        <div className="scale__row">
          <div className="scale--filled"></div>
          <div className="scale--filled"></div>
          <div className="scale--filled"></div>
          <div className="scale--empty"></div>
        </div>
        <div className="scale__row">
          <div className="scale--filled"></div>
          <div className="scale--filled"></div>
          <div className="scale--empty"></div>
          <div className="scale--empty"></div>
        </div>
        <div className="scale__row">
          <div className="scale--filled"></div>
          <div className="scale--empty"></div>
          <div className="scale--empty"></div>
          <div className="scale--empty"></div>
        </div>
      </div>
    );
  }
}
