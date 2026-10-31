const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');

// ──────────────────────────────────────────────
// Given
// ──────────────────────────────────────────────

Given('the base URL is {string}', function (url) {
  // baseURL is set on the world via cucumber.json worldParameters.
  // This step exists to make the feature file self-documenting.
  assert.equal(this.baseURL, url);
});

// ──────────────────────────────────────────────
// When — HTTP requests
// ──────────────────────────────────────────────

When('I send a GET request to {string}', async function (path) {
  this.response = await this.apiContext.get(path);
  this.responseBody = await this.response.json().catch(() => null);
});

When('I send a GET request to {string} with query param userId equal to {int}', async function (path, userId) {
  this.response = await this.apiContext.get(path, { params: { userId } });
  this.responseBody = await this.response.json().catch(() => null);
});

When('I send a POST request to {string} with body:', async function (path, docString) {
  this.requestBody = JSON.parse(docString);
  this.response = await this.apiContext.post(path, { data: this.requestBody });
  this.responseBody = await this.response.json().catch(() => null);
});

When('I send a PUT request to {string} with body:', async function (path, docString) {
  this.requestBody = JSON.parse(docString);
  this.response = await this.apiContext.put(path, { data: this.requestBody });
  this.responseBody = await this.response.json().catch(() => null);
});

When('I send a DELETE request to {string}', async function (path) {
  this.response = await this.apiContext.delete(path);
  this.responseBody = await this.response.json().catch(() => null);
});

// ──────────────────────────────────────────────
// Then — status & content-type
// ──────────────────────────────────────────────

Then('the response status should be {int}', function (expectedStatus) {
  assert.equal(this.response.status(), expectedStatus);
});

Then('the response content-type should contain {string}', function (expectedType) {
  const contentType = this.response.headers()['content-type'] || '';
  assert.ok(
    contentType.includes(expectedType),
    `Expected content-type to contain "${expectedType}" but got "${contentType}"`
  );
});

// ──────────────────────────────────────────────
// Then — GET /posts (list)
// ──────────────────────────────────────────────

Then('the response body should contain {int} posts', function (count) {
  assert.ok(Array.isArray(this.responseBody), 'Expected response body to be an array');
  assert.equal(this.responseBody.length, count);
});

Then('each post should have fields userId, id, title, and body', function () {
  for (const post of this.responseBody) {
    assert.equal(typeof post.userId, 'number');
    assert.equal(typeof post.id, 'number');
    assert.equal(typeof post.title, 'string');
    assert.equal(typeof post.body, 'string');
  }
});

// ──────────────────────────────────────────────
// Then — GET /posts/1 (single)
// ──────────────────────────────────────────────

Then('the returned post id should be {int}', function (expectedId) {
  assert.equal(this.responseBody.id, expectedId);
});

Then('the returned post userId should be {int}', function (expectedUserId) {
  assert.equal(this.responseBody.userId, expectedUserId);
});

Then('the returned post title should not be empty', function () {
  assert.ok(
    typeof this.responseBody.title === 'string' && this.responseBody.title.length > 0,
    'Expected post title to be a non-empty string'
  );
});

// ──────────────────────────────────────────────
// Then — filtered list
// ──────────────────────────────────────────────

Then('every post in the response should belong to userId {int}', function (userId) {
  for (const post of this.responseBody) {
    assert.equal(post.userId, userId, `Post id ${post.id} has userId ${post.userId}, expected ${userId}`);
  }
});

// ──────────────────────────────────────────────
// Then — comments
// ──────────────────────────────────────────────

Then('the response should contain at least {int} comment', function (min) {
  assert.ok(
    Array.isArray(this.responseBody) && this.responseBody.length >= min,
    `Expected at least ${min} comment(s) but got ${(this.responseBody || []).length}`
  );
});

Then('every comment should belong to postId {int}', function (postId) {
  for (const comment of this.responseBody) {
    assert.equal(comment.postId, postId);
  }
});

Then('every comment email should contain {string}', function (substring) {
  for (const comment of this.responseBody) {
    assert.ok(
      comment.email.includes(substring),
      `Comment email "${comment.email}" does not contain "${substring}"`
    );
  }
});

// ──────────────────────────────────────────────
// Then — POST (create)
// ──────────────────────────────────────────────

Then('the created post should match the request body', function () {
  for (const [key, value] of Object.entries(this.requestBody)) {
    assert.equal(
      this.responseBody[key],
      value,
      `Expected "${key}" to be ${value} but got ${this.responseBody[key]}`
    );
  }
});

Then('the created post id should be {int}', function (expectedId) {
  assert.equal(this.responseBody.id, expectedId);
});

// ──────────────────────────────────────────────
// Then — PUT (replace) & DELETE
// ──────────────────────────────────────────────

Then('the response body should exactly equal the request body', function () {
  assert.deepEqual(this.responseBody, this.requestBody);
});

Then('the response body should be an empty object', function () {
  assert.deepEqual(this.responseBody, {});
});
