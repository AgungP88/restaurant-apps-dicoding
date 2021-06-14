/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h2>Explore Restaurant</h2>
        <div class="list" id="restaurant-catalog"></div>
    </div>
    </section>
          `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listResto();
    const restoContainer = document.querySelector('#restaurant-catalog');
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    // eslint-disable-next-line no-console
    // console.log(restaurants);

    // TODO: tampilkan movies di dalam DOM
  },
};

export default ListResto;
