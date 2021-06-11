import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

// Get Data from json and using DOM manipulation
import('../DATA.json').then(({
  default: jsonData,
}) => {
  const dataRestos = jsonData.restaurants;
  let listResto = '';
  dataRestos.forEach((resto) => {
    listResto += `
        <div class="list_item">
        <img class="list_thumbnail" src="${resto.pictureId}" alt="${resto.name}" title="${resto.name}">
        <div class="cities">Kota : ${resto.city}</div>
        <div class="list_content">
            <p class="ratings">Rating : ${resto.rating}</p>
            <h3 class="list_item_title"><a href="#">${resto.name}</a></h3>
            <div class="list_item_desc">Description : ${resto.description.slice(0, 111)}...</div>
        </div>
    </div>
        `;
  });
  document.querySelector('#restaurant-catalog').innerHTML = listResto;
});

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav');
  const windowPosition = window.scrollY > 600;
  header.classList.toggle('scrolling-active', windowPosition);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.menu-mobile');
  const windowPosition = window.scrollY > 600;
  header.classList.toggle('scrolling-active', windowPosition);
});

/* let batasText = document.querySelector("#batasText");
let selengkapnyaText = document.querySelector("#selengkapnya");
let btnReadmore = document.querySelector("#btnReadmore");

btnReadmore.addEventListener('click', function() {
  selengkapnyaText.classList.toggle('open');
  event.stopPropagation();
}) */
