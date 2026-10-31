const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');

/**
 * ApiWorld — Cucumber World that provides a Playwright APIRequestContext
 * for making HTTP calls inside step definitions.
 *
 * Usage inside step defs:
 *   this.response = await this.apiContext.get('/posts');
 */
class ApiWorld extends World {
  constructor(options) {
    super(options);
    /** @type {import('@playwright/test').APIRequestContext} */
    this.apiContext = null;
    /** @type {import('@playwright/test').APIResponse} */
    this.response = null;
    /** Base URL read from worldParameters (cucumber.json) */
    this.baseURL = (options.parameters && options.parameters.baseURL)
      ? options.parameters.baseURL
      : 'https://jsonplaceholder.typicode.com';
    /** Holds parsed JSON body of the last response */
    this.responseBody = null;
    /** Holds the raw request body sent in POST / PUT calls */
    this.requestBody = null;
  }

  async initApiContext(baseURL) {
    this.apiContext = await request.newContext({ baseURL });
  }

  async disposeApiContext() {
    if (this.apiContext) {
      await this.apiContext.dispose();
      this.apiContext = null;
    }
  }
}

setWorldConstructor(ApiWorld);
