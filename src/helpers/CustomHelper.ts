class CustomHelper extends Helper {

  constructor(config: any) {
    super(config)
    this.helpers
  }
  protected _beforeSuite(suite: Mocha.Suite): void {
    const { WebDriver } = this.helpers;
    suite.tests.forEach(i => {
      i.title = `[${WebDriver.config.browser}] ${i.title}`
    })
    WebDriver.options.remoteFileUpload = false
  }
  
}

export = CustomHelper
