/* eslint-disable no-undef */
const assert = require('assert');

Feature('Posting Review');

Scenario('Posting Review', async ({ I }) => {
  I.amOnPage('/#/');
  I.waitForElement('article', 30);
  I.seeElement('article');
  I.click(locate('article').first());

  I.seeElement('.show-comment');
  I.click('.show-comment');

  const name = 'E2E Bot';
  const description = 'bip bip bip';

  I.fillField('.add-comment-name', name);
  I.fillField('.add-comment-desc', description);
  I.click('#submit');

  I.wait(5); // wait for the review to be added

  const locateLastReviewName = locate('.detail-comment-detail .name').last();
  const locateLastReviewDescription = locate('.detail-comment-desc').last();

  const lastReviewName = await I.grabTextFrom(locateLastReviewName);
  const lastReviewDescription = await I.grabTextFrom(locateLastReviewDescription);

  assert.strictEqual(name, lastReviewName);
  assert.strictEqual(description, lastReviewDescription);
});
