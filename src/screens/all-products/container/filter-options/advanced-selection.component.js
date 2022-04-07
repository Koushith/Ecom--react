import { useState } from 'react';
import { Badge } from '../../../../components';
import { SubHeading } from '../../../../components/primitives/text/text.component';
import { useFilter } from '../../../../hooks/useFilter';
import advancedFilter from './advanced-selection.module.css';

export const AdvancedOption = () => {
  const [isActive, setIsActive] = useState(false);

  const {
    state: {
      sortBy,
      category: { womens, mens, shoes, jackets },
      price,
      isTrending,
      newArrival,
    },
    dispatch,
  } = useFilter();
  return (
    <section style={{ position: 'sticky', top: '12%' }}>
      <div className={advancedFilter.filter}>
        <SubHeading label='Products By Category' />
        <div className={advancedFilter.filter_container}>
          <label className='rating'>
            <input
              type='checkbox'
              name='womens'
              value='womens'
              checked={womens}
              onChange={() => dispatch({ type: 'WOMENS' })}
            />
            <span>Womens</span>
          </label>
          <label className='rating'>
            <input
              type='checkbox'
              name='mens'
              value='mens'
              checked={mens}
              onChange={() => dispatch({ type: 'MENS' })}
            />
            <span>Mens</span>
          </label>
          <label className='rating'>
            <input
              type='checkbox'
              name='shoes'
              value='shoes'
              checked={shoes}
              onChange={() => dispatch({ type: 'SHOES' })}
            />
            <span>Shoes</span>
          </label>
          <label className='rating'>
            <input
              type='checkbox'
              name='jackets'
              value='jackets'
              checked={jackets}
              onChange={() => dispatch({ type: 'JACKETS' })}
            />
            <span>Jackets</span>
          </label>
        </div>
      </div>

      {/* SORT BY PRICE */}
      <div className={advancedFilter.filter}>
        <SubHeading label='Sort By Price' />
        <div className={advancedFilter.filter_container}>
          <label className='rating'>
            <input type='radio' checked={sortBy === 'LOW_TO_HIGH'} onChange={() => dispatch({ type: 'LOW_TO_HIGH' })} />
            <span>Price- Low to High</span>
          </label>
          <label className=''>
            <input type='radio' checked={sortBy === 'HIGH_TO_LOW'} onChange={() => dispatch({ type: 'HIGH_TO_LOW' })} />
            <span>Price- High to Low</span>
          </label>
        </div>
      </div>

      <div className={advancedFilter.filter}>
        <SubHeading label=' Filter By Price' />
        <div className={advancedFilter.filter_container}>
          <div className={advancedFilter.filter_by_size}>
            <Badge
              badgeLabel='500 - 1000'
              onClick={() => {
                dispatch({ type: 'PRICE', priceValue: 500 });
              }}
            />
            <Badge badgeLabel='1000 - 5000' onClick={() => dispatch({ type: 'PRICE', priceValue: 1000 })} />
            <Badge badgeLabel='5k & above' onClick={() => dispatch({ type: 'PRICE', priceValue: 5000 })} />
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      {/* <div className={advancedFilter.filter}>
        <SubHeading label='New Arrivals' />
        <div className={advancedFilter.filter_container}>
          <div className={advancedFilter.filter_by_size}>
            <label className=''>
              <input type='radio' checked={newArrival} onChange={() => dispatch({ type: 'NEW_ARRIVAL' })} />
              <span>New Arrivals</span>
            </label>
          </div>
        </div>
      </div> */}

      {/* <div className={advancedFilter.filter}>
        <SubHeading label='   Filter By Rating' />
        <div className={advancedFilter.filter_container}>
          <label className='rating'>
            <input type='radio' name='sort' className='radio-input' value='' checked='' />
            <span className='check-desc'>4 Stars & above</span>
          </label>
          <label className='rating'>
            <input type='radio' name='sort' className='radio-input' value='' checked='' />
            <span className='check-desc'>3 Stars & above</span>
          </label>
          <label className='rating'>
            <input type='radio' name='sort' className='radio-input' value='' checked='' />
            <span className='check-desc'>2 Stars & above</span>
          </label>
          <label className='rating'>
            <input type='radio' name='sort' className='radio-input' value='' checked='' />
            <span className='check-desc'>1 Stars & above</span>
          </label>
        </div>
      </div> */}

      <div className={advancedFilter.filter}>
        <SubHeading label='Clear Filter' />
        <div className={advancedFilter.filter_container}>
          <Badge badgeLabel='RESET' onClick={() => dispatch({ type: 'CLEAR' })} />
        </div>
      </div>
    </section>
  );
};
