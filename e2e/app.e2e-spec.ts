import { TecholutionNg2ChallengePage } from './app.po';

describe('techolution-ng2-challenge App', function() {
  let page: TecholutionNg2ChallengePage;

  beforeEach(() => {
    page = new TecholutionNg2ChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
