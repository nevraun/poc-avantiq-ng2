import { PocAvantiqNg2Page } from './app.po';

describe('poc-avantiq-ng2 App', function() {
  let page: PocAvantiqNg2Page;

  beforeEach(() => {
    page = new PocAvantiqNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
