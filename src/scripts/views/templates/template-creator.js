/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
<div class="list_item">
  <img class="list_thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" title="${resto.name}">
  <div class="cities">Kota : ${resto.city}</div>
  <div class="list_content">
    <p class="ratings">Rating : ${resto.rating}/5</p>
    <h3 class="list_item_title"><a href="#/detail/${resto.id}">${resto.name}</a></h3>
    <div class="list_item_desc">Description : ${resto.description.slice(0, 111)}...</div>
  </div>
</div>
`;

const createRestoDetailTemplate = (resto) => `
<article class="detail">
     <center><img src=${CONFIG.BASE_IMAGE_URL + resto.pictureId} class="detail-img" alt="Gambar ${resto.name}"></center>
      <div class="detail-body">
          <h3 class="resto-name">${resto.name}</h3>
          <h4 class="rating-detail">Rating : <span>${resto.rating} / 5</span></h4>
          <h5 class="city-detail">Kota : ${resto.city}</h5>
          <div class="adress">
               <h6>Alamat Restaurant</h6>
               <p>${resto.address}</p>
          </div>
          <div class="categories">
               <h6>Kategori Restaurant</h6>
               <p>${resto.categories
    .map((item) => item.name)
    .join(' - ')}</p>
          </div>
          <div class="menu-foods">
                    <h6>Menu Makanan</h6>
                    <p>${resto.menus.foods
    .map((item) => item.name)
    .join(', ')}</p>
          </div>
          <div class="menu-drinks">
                    <h6>Menu Minuman</h6>
                    <p class="drinks">${resto.menus.drinks
    .map((item) => `<small>${item.name}</small>`)
    .join(', ')}</p>
          </div>
          <div class="description">
               <h6>Description</h6>
               <p>${resto.description}</p>
          </div>
          <div class="customer-reviews">
          <h6>Customer Reviews</h6>
               ${resto.customerReviews.map((customer) => `
                         <h6>${customer.name}</h6>
                         <p>${customer.review}</p>
                         <small>${customer.date}</small>
                    `)}
          </div>
      </div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
