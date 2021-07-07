/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteResto from '../src/scripts/data/database-resto';

describe('Liking Restaurant', () => {
  const resto = {
    id: 'abc',
    name: 'Resto a',
  };

  const addLikeButton = async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      favoriteResto: FavoriteResto,
      resto,
    });
  };

  const clickLikeButton = () => {
    const likeButton = document.querySelector('#likeButton');
    likeButton.dispatchEvent(new Event('click'));
  };

  beforeEach(async () => {
    await FavoriteResto.deleteResto(resto.id);
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    // eslint-disable-next-line no-unused-vars
    const likeButtonContainer = document.getElementById('likeButtonContainer');
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto(resto.id);
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await addLikeButton();

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await addLikeButton();

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await addLikeButton();

    clickLikeButton();

    expect(await FavoriteResto.getResto(resto.id))
      .toEqual(resto);
  });

  it('should not add the resto if it already exists', async () => {
    await addLikeButton();

    await FavoriteResto.putResto(resto);

    clickLikeButton();

    expect(await FavoriteResto.getAllResto())
      .toEqual([resto]);
  });

  it('should not add the resto if it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      favoriteResto: FavoriteResto,
      resto: {},
    });

    clickLikeButton();

    expect(await FavoriteResto.getAllResto())
      .toEqual([]);
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });
});
