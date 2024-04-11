/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Show empty liked restaurants', ({ I }) => {
  I.see('Belum ada restoran favorit yang ditambahkan :(', 'p');
});

Scenario('liking one movie', ({ I }) => {
  I.amOnPage('/');
  // ... kita akan mengisi uji coba berikutnya ...
});
