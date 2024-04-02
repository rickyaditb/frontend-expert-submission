import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    drawerIcon, closeDrawerIcon, backdrop, drawer, skippedElements, content,
  }) {
    this._drawerIcon = drawerIcon;
    this._closeDrawerIcon = closeDrawerIcon;
    this._backdrop = backdrop;
    this._drawer = drawer;
    this._skippedElements = skippedElements;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    // eslint-disable-next-line no-unused-vars
    const drawerInitiator = new DrawerInitiator({
      drawerIcon: this._drawerIcon,
      closeDrawerIcon: this._closeDrawerIcon,
      backdrop: this._backdrop,
      drawer: this._drawer,
      skippedElements: this._skippedElements,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
