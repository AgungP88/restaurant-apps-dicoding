/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';

const ListResto = {
  async render() {
    return `
            <h2>List Resto Page</h2>
          `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listResto();
    // eslint-disable-next-line no-console
    console.log(restaurants);

    // TODO: tampilkan movies di dalam DOM
  },
};

export default ListResto;
