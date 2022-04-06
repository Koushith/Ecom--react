import { Badge } from '../../../../components';
import { SubHeading } from '../../../../components/primitives/text/text.component';
import advancedFilter from './advanced-selection.module.css';

export const AdvancedOption = () => {
  return (
    <section style={{ position: 'sticky', top: '12%' }}>
      <div className={advancedFilter.filter}>
        <SubHeading label='Products By Category' />
        <div className={advancedFilter.filter_container}>
          <label className='rating'>
            <input type='checkbox' name='sort' />
            <span>Mens</span>
          </label>
          <label className='rating'>
            <input type='checkbox' name='sort' />
            <span>Womens</span>
          </label>
          <label className='rating'>
            <input type='checkbox' name='sort' />
            <span>Shoes</span>
          </label>
          <label className='rating'>
            <input type='checkbox' name='sort' />
            <span>Jackets</span>
          </label>
        </div>
      </div>

      <div className={advancedFilter.filter}>
        <SubHeading label='Sort By Price' />
        <div className={advancedFilter.filter_container}>
          <label className='rating'>
            <input type='radio' />
            <span>Price- Low to High</span>
          </label>
          <label className=''>
            <input type='radio' />
            <span>Price- High to Low</span>
          </label>
        </div>
      </div>

      <div className={advancedFilter.filter}>
        <SubHeading label=' Filter By Price' />
        <div className={advancedFilter.filter_container}>
          <div className={advancedFilter.filter_by_size}>
            <Badge badgeLabel='500 - 1000' />
            <Badge badgeLabel='1000 - 5000' />
            <Badge badgeLabel='5k & above' />
          </div>
        </div>
      </div>

      <div className={advancedFilter.filter}>
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
      </div>

      <div className={advancedFilter.filter}>
        <Badge badgeLabel='RESET' />
      </div>
    </section>
  );
};
