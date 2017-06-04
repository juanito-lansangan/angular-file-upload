import { NgAppUploadPage } from './app.po';

describe('ng-app-upload App', () => {
  let page: NgAppUploadPage;

  beforeEach(() => {
    page = new NgAppUploadPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
