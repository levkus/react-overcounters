import React from 'react';

const HeroCounterItem = ({ hero, handleSelect, side }) => {
  let left;
  let right;
  const name = <span className="hero__name">{hero.name}</span>;

  if (side === 'left') {
    left = name;
    right = undefined;
  } else if (side === 'right') {
    left = undefined;
    right = name;
  }

  return (
    <div className={'hero--small__wrapper' + ' ' + side} onClick={() => handleSelect(hero)}>
      {left}
      <div className={'hero hero--small' + ' ' + hero.role}>
        <img className="hero__image" src={hero.img} alt={hero.name}/>
      </div>
      {right}
    </div>
  );
}

export default HeroCounterItem;
