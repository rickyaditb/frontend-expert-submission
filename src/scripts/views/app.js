import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    drawerIcon, closeDrawerIcon, backdrop, drawer, skippedElements,
  }) {
    this._drawerIcon = drawerIcon;
    this._closeDrawerIcon = closeDrawerIcon;
    this._backdrop = backdrop;
    this._drawer = drawer;
    this._skippedElements = skippedElements;
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
}

export default App;
