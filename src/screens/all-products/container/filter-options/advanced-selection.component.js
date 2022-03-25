import { Badge } from '../../../../components';

export const AdvancedOption = () => {
  return (
    <section>
      <div>Filter By Category</div>
      <div>
        Filter By Size
        <Badge badgeLabel='s' />
        <Badge badgeLabel='M' />
        <Badge badgeLabel='L' />
        <Badge badgeLabel='XL' />
        <Badge badgeLabel='XM' />
        <Badge badgeLabel='XXL' />
      </div>
      <div>
        Filter By Price
        <Badge badgeLabel='Low To High' />
        <Badge badgeLabel='High To High' />
      </div>
      <div>
        Filter By Rating
        {/* <Badge badgeLabel='4 stars & Above' />
        <Badge badgeLabel='3 star & Above' />
        <Badge badgeLabel='2 star & Above' />
        <Badge badgeLabel='1 star & Above' /> */}
      </div>
    </section>
  );
};
