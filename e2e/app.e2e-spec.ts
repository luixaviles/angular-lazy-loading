import { AngularLazyLoadingPage } from './app.po';

describe('angular-lazy-loading App', () => {
  let page: AngularLazyLoadingPage;

  beforeEach(() => {
    page = new AngularLazyLoadingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ald!!');
  });
});
