import styles from './category-card.component.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

export const CategoryCard = (props) => {
  const { category } = props;

  return (
    <Link to='/shop'>
      <div className={styles.category_container}>
        <img src={category.categoryImage} alt='category' />
        <div className={styles.card_overlay}></div>
        <div className={styles.card_text_overlay}>
          <span>4 ITMES</span>
          {category.categoryName}
        </div>
      </div>
    </Link>
  );
};
