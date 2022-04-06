import styles from './category-card.component.module.css';
import Tilt from 'react-vanilla-tilt';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const CategoryCard = (props) => {
  const [animate, setAnimate] = useState('border-show');

  const { category } = props;

  return (
    <Link to='/shop'>
      <Tilt
        className={styles.tilt_move}
        options={{
          scale: 2,
          perspective: 1000,
          max: 35,
          speed: 600,
          easing: 'cubic-bezier(.03,.98,.52,.99)',
          glare: false,
        }}
      >
        <div className={styles.category_container}>
          <img src={category.categoryImage} alt='category' />
          <div className={styles.card_overlay}></div>
          <div
            className={styles.card_text_overlay}
            onMouseOver={() => setAnimate('none')}
            onMouseOut={() => setAnimate('border-show')}
            style={{ animation: `${animate} 3s infinite 3s` }}
          >
            <span>4 ITMES</span>
            {category.categoryName}
          </div>
        </div>
      </Tilt>
    </Link>
  );
};
