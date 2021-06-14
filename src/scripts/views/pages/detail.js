/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <h2 class="title">Detail Page</h2>
        <section class="content"></section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    const restoranContainer = document.querySelector('.content');
    restoranContainer.classList.add('detail-page');
    restoranContainer.innerHTML += createRestoDetailTemplate(restaurant);
    // console.log(restaurant);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
