/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/');
  I.click(locate('#restaurant-catalog .list_item_title a').first());
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
});

Scenario('unliking one resto', async ({ I }) => {
  I.seeElement('#restaurant-catalog .list_item');
  I.wait(1);
  I.click('#restaurant-catalog .list_item_title a');

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.wait(1);
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('#restaurant-catalog .list_item');
  const numberOfRestoLiked = await I.grabNumberOfVisibleElements('#restaurant-catalog .list_item');

  assert.strictEqual(numberOfRestoLiked, 0);
});
