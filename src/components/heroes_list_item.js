import React from 'react';

const HeroesListItem = ({ hero, handleSelect }) => {
  let active = '';

  if (hero.selected === true) {
    active = ' active';
  }

  return (
    <div className={'hero' + ' ' + hero.role + active} onClick={() => handleSelect(hero)}>
      <img className="hero__image" src={hero.img} alt={hero.name}/>
    </div>
  );
}

export default HeroesListItem;
