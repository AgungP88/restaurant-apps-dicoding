/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
<div class="list_item">
<img class="list_thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" title="${resto.name}">
<div class="cities">Kota : ${resto.city}</div>
<div class="list_content">
    <p class="ratings">Rating : ${resto.rating}/5</p>
    <a href="#/detail/${resto.id}">
    <h3 class="list_item_title"><a href="#">${resto.name}</a></h3>
    <div class="list_item_desc">Description : ${resto.description.slice(0, 111)}...</div>
    </a>
</div>
</div>
`;

export {
  createRestoItemTemplate,
};
