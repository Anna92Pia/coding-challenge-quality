require('ts-node/register')
require('dotenv').config()
const { setHeadlessWhen } = require('@codeceptjs/configure');
const { bootstrap } = require('./../presettings/presettings.ts');
const HEADLESS = process.env.HEADLESS == 'true' ? true : false
exports.config = {
  multiple: {
    basic: {
      browsers: [{
        browser: 'chrome',
        name:'Chrome Run',
        desiredCapabilities: {
          chromeOptions: {
            args: [HEADLESS && "--headless",
              "--disable-gpu",
              "--window-size=1200,1000",
              "--no-sandbox"]
          }
        }

      },
      {
        name:'Firefox Run',
        browser: 'firefox',
        desiredCapabilities:{
          firefoxOptions: {
            args: [
              HEADLESS && "--headless"
            ]
          }
        }

      }],
    }
  },
  tests: './../tests/*_test.ts',
  output: '//output/first_test',
  helpers: {
    WebDriver: {
      url: process.env.BASE_URL,
      browser: '',
      desiredCapabilities:{}
      

    },
    UploadFile: {
      require: './../helpers/CustomHelper.ts'
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    },
  },
  bootstrap,
  include: {
    I: './../steps/steps_file.js'
  },
  name: 'CodingChallange',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: "output/allure-results",
      browser: ''
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
