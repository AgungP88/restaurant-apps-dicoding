/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    console.log(restaurant);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
