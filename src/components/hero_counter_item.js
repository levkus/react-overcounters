import React from 'react';

const HeroCounterItem = ({ hero, handleSelect, side }) => {
  let left;
  let right;
  let active = '';
  const name = <span className="hero__name">{hero.name}</span>;

  if (side === 'left') {
    left = name;
    right = undefined;
  } else if (side === 'right') {
    left = undefined;
    right = name;
  }

  if (hero.selected === true) {
    active = ' active';
  }

  return (
    <div className={'hero--small__wrapper' + ' ' + side + active} onClick={() => handleSelect(hero)}>
      {left}
      <div className={'hero hero--small' + ' ' + hero.role}>
        <img className="hero__image" src={hero.icon} alt={hero.name}/>
      </div>
      {right}
    </div>
  );
}

export default HeroCounterItem;
