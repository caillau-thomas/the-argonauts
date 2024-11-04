import React from 'react';
import ShortCards from "@/app/components/cards/shortCards/shortCards";
import styles from './shortCards.module.css';

const ShortCardsGroup = ({ title, description, numCards = 0, cardStyle = {} }) => {
  return (
    <div className={styles.cardsGroup}>
      {Array.from({ length: numCards }).map((_, index) => (
        <ShortCards
          key={index}
          title={title}
          description={description}
          style={cardStyle}
        />
      ))}
    </div>
  );
};

export default ShortCardsGroup;