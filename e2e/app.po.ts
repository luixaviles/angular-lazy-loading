import { browser, by, element } from 'protractor';

export class AngularLazyLoadingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ald-root h1')).getText();
  }
}
