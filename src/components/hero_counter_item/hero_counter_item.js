import React from 'react';
import styles from './hero_counter_item.css';

const HeroCounterItem = ({ hero, handleSelect, side }) => {
  let left;
  let right;
  let wrapperClass = styles.wrapper;
  const name = <span className={styles.name}>{hero.name}</span>;

  if (side === 'left') {
    left = name;
    right = undefined;
    wrapperClass = styles.wrapperLeft;
  } else if (side === 'right') {
    left = undefined;
    right = name;
  }

  return (
    <div className={wrapperClass} onClick={() => handleSelect(hero)}>
      {left}
      <div className={styles.avatar}>
        <img className={styles.image} src={hero.icon} alt={hero.name}/>
      </div>
      {right}
    </div>
  );
}

export default HeroCounterItem;
