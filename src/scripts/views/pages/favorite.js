/* eslint-disable linebreak-style */
import FavoriteResto from '../../data/database-resto';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
        <h2>Favorite Restaurant</h2>
        <div class="list" id="restaurant-catalog"></div>
    </div>
    </section>
        `;
  },

  async afterRender() {
    const restos = await FavoriteResto.getAllResto();
    const restoContainer = document.querySelector('#restaurant-catalog');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
