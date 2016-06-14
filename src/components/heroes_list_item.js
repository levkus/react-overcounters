import React from 'react';

const HeroesListItem = ({ hero, handleSelect }) => {
  const style = {
    backgroundImage: 'url(' + hero.img + ')'
  }

  let active = '';

  if (hero.selected === true) {
    active = ' active';
  }

  return (
    <div className={'hero' + ' ' + hero.role + active} onClick={() => handleSelect(hero)}>
      <div className="hero__icon" style={style}></div>
    </div>
  );
}

export default HeroesListItem;
