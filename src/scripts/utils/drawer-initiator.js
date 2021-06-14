/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const DrawerInitiator = {
  // eslint-disable-next-line object-curly-newline
  init({ button, drawer, content, hero }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closedDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _closedDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
