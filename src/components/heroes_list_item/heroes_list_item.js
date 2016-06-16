import React from 'react';
import styles from './heroes_list_item.css';

const HeroesListItem = ({ hero, handleSelect }) => {
  let className = styles.normal;

  if (hero.selected === true) {
    className = styles.selected;
  }

  return (
    <div className={className} onClick={() => handleSelect(hero)}>
      <img className={styles.image} src={hero.icon} alt={hero.name}/>
    </div>
  );
}

export default HeroesListItem;
