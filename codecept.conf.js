const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'bs://444bd0308813ae0dc236f8cd461c02d3afa7901d',
      host: 'hub-cloud.browserstack.com',
      port: 4444,
      user: 'julianvillabona1',
      key: 'cpoJhFrnHepY3q5NNGzo',
      platform: 'iOS',
      device: 'iPhone 11 Pro',
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-appium',
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
