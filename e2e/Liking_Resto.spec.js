/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('checking that the list is empty', ({ I }) => {
  I.dontSeeElement('#restaurant-catalog .list_item');
});

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.list_item');

  const firstResto = locate('.list_item_title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.wait(1);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  const likedRestoName = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('liking multiple restos', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.list_item');

  const resto = [];
  for (let i = 1; i <= 3; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    resto.push(await I.grabTextFrom(locate('.list_item_title a').at(i)));
    I.click(locate('.list_item_title a').at(i));
    I.seeElement('#likeButton');
    I.wait(1);
    I.click('#likeButton');
    I.amOnPage('/');
  }

  const numberOfLikedResto = await I.grabNumberOfVisibleElements('.list_item');

  assert.strictEqual(numberOfLikedResto, resto.length);
});
