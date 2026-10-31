const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  await this.initApiContext(this.baseURL);
});

After(async function () {
  await this.disposeApiContext();
});
