import React from 'react';
import styles from './shortCards.module.css';

const ShortCards = ({ title, description, style }) => {
  return (
    <div className={styles.card} style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ShortCards;
