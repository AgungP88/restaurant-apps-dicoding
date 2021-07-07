/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteResto from '../src/scripts/data/database-resto';

describe('Unliking Restaurant', () => {
  const resto = {
    id: 'abc',
    name: 'Resto a',
  };

  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    // eslint-disable-next-line no-unused-vars
    const likeButtonContainer = document.getElementById('likeButtonContainer');
  };

  const addLikeButton = async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      favoriteResto: FavoriteResto,
      resto,
    });
  };

  const clickUnlikeButton = () => {
    const likeButton = document.querySelector('#likeButton');
    likeButton.dispatchEvent(new Event('click'));
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteResto.putResto(resto);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await addLikeButton();

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await addLikeButton();

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove resto from favorite', async () => {
    await addLikeButton();

    clickUnlikeButton();

    expect(await FavoriteResto.getAllResto())
      .toEqual([]);
  });

  it('it should not throw an error if the unliked movie is not on the list', async () => {
    await addLikeButton();

    await FavoriteResto.deleteResto(resto.id);

    clickUnlikeButton();

    expect(await FavoriteResto.getAllResto())
      .toEqual([]);
  });
});
