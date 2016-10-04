import { MyFirstGn2AppPage } from './app.po';

describe('my-first-gn2-app App', function() {
  let page: MyFirstGn2AppPage;

  beforeEach(() => {
    page = new MyFirstGn2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
