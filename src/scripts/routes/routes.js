import HomePage from '../views/pages/home-page';
import DetailPage from '../views/pages/detail-page';
import FavoritePage from '../views/pages/favorite-page';

const routes = {
  '/': HomePage, // default page
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

export default routes;
