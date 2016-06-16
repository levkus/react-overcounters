import React from 'react';
import styles from './hero_card_header.css';

const HeroCardHeader = ({ image, name }) => {
  return(
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt={name}/>
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default HeroCardHeader;
