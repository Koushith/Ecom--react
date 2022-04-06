import { HeaderComponent, Shipping } from '../../components';
import { TrendingSection } from './containers/trending-section/trending-section.component';
import { NewArrival } from './containers/new-arrivals/new-arrival.component';
import { Footer } from '../../components/common/footer';
import { NavBar } from '../../components/common/navbar.component';
import { Category } from './containers/category/category-section.component';
export const HomeScreen = () => {
  return (
    <>
      <HeaderComponent />
      <Shipping />
      <Category />
      <TrendingSection />
      <NewArrival />
      {/* subscribe */}
      {/* <Footer /> */}
    </>
  );
};
