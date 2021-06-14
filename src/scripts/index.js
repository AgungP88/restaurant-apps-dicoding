import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

// Get Data from json and using DOM manipulation

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
  hero: document.querySelector('.hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
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
