import { AdvancedOption } from './container/filter-options/advanced-selection.component';
import allProducts from './all-products.screen.module.css';
import { ProductLists } from './container/product-lists/product-lists.component';

export const AllProductsScreen = () => {
  return (
    <section>
      {/* breadcrum */}

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
