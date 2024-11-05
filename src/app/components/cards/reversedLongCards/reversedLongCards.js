import React from 'react';
import styles from './reversedLongCards.module.css';

const ReversedLongCards = ({ title, description, style }) => {
  return (
    <div className={styles.card} style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ReversedLongCards;
