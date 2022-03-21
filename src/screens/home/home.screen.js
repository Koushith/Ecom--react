import { HeaderComponent, Shipping } from '../../components';
import { TrendingSection } from './containers/trending-section/trending-section.component';
import { NewArrival } from './containers/new-arrivals/new-arrival.component';
export const HomeScreen = () => {
  return (
    <>
      <HeaderComponent />
      <Shipping />
      <TrendingSection />
      <NewArrival />
      {/* subscribe */}
      {/* Footer */}
    </>
  );
};
