/// <reference types='codeceptjs' />

type CustomHelper = typeof import('../src/helpers/CustomHelper');
type chaiWrapper = typeof import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I }
  interface Methods extends WebDriver, CustomHelper, chaiWrapper { }
  interface I extends WithTranslation<Methods> { }
  namespace Translation {
    interface Actions { }
  }
}
