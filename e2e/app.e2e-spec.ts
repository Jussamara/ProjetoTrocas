import { ProjetoTrocasPage } from './app.po';

describe('projeto-trocas App', function() {
  let page: ProjetoTrocasPage;

  beforeEach(() => {
    page = new ProjetoTrocasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
