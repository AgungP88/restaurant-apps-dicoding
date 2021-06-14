/* eslint-disable linebreak-style */
import ListResto from '../views/pages/list-resto';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '': ListResto, // Default Pages
  '/list': ListResto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
