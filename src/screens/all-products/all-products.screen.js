import { Heading } from '../../components/primitives/text/text.component';
import { AdvancedOption } from './container/filter-options/advanced-selection.component';
import allProducts from './all-products.screen.module.css';
import { ProductLists } from './container/product-lists/product-lists.component';
export const AllProductsScreen = () => {
  return (
    <section>
      {/* breadcrum */}
      <Heading label='Shop' />
      <div className={allProducts.products_container}>
        <div className={allProducts.filter_options}>
          <AdvancedOption />
        </div>
        <div className={allProducts.products_list}>
          <ProductLists />
        </div>
      </div>
    </section>
  );
};
