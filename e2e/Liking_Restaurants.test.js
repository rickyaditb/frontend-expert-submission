const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurants');

Scenario('Show empty liked restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Ooppsss, belum ada restoran yang ditambahkan ke favorit.', '.empty-message > p:nth-child(2)');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.amOnPage('/#/');
  I.waitForElement('article', 30);
  I.seeElement('article');
  const firstRestaurant = locate('article h3').first();
  const firstRestaurantText = await I.grabTextFrom(firstRestaurant);
  I.click(locate('article').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('article', 30);
  I.seeElement('article');
  const likedRestaurantText = await I.grabTextFrom('article h3');
  assert.strictEqual(firstRestaurantText, likedRestaurantText);
});

Scenario('unliking one restaurants', async ({ I }) => {
  I.amOnPage('/#/');
  I.waitForElement('article', 30);
  I.seeElement('article');
  const firstRestaurant = locate('article').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('article', 30);
  I.seeElement('article'); // check if restaurant is already added to favorite

  const likedRestaurant = locate('article');
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Ooppsss, belum ada restoran yang ditambahkan ke favorit.', '.empty-message > p:nth-child(2)');
});
