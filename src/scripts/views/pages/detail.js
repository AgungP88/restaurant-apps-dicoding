/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteResto from '../../data/database-resto';

const Detail = {
  async render() {
    return `
        <h2 class="title">Detail Page</h2>
        <section class="content"></section>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    const restoranContainer = document.querySelector('.content');
    restoranContainer.classList.add('detail-page');
    restoranContainer.innerHTML += createRestoDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteResto,
      resto: restaurant,
    });
    // console.log(restaurant);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
