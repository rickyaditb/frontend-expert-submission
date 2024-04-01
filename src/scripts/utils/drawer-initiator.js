class DrawerInitiator {
  constructor({
    drawerIcon, closeDrawerIcon, backdrop, drawer, skippedElements,
  }) {
    this._drawerIcon = drawerIcon;
    this._closeDrawerIcon = closeDrawerIcon;
    this._backdrop = backdrop;
    this._drawer = drawer;
    this._skippedElements = skippedElements;
    this._init();
  }

  _init() {
    this._drawerIcon.addEventListener('click', (e) => this._switchDrawer(e));
    this._closeDrawerIcon.addEventListener('click', () => this._toggleDrawer(false));
    this._backdrop.addEventListener('click', () => this._toggleDrawer(false));
  }

  _toggleDrawer(open) {
    this._drawer.classList.toggle('open', open);
    this._backdrop.classList.toggle('show', open);
    this._skippedElements.forEach((link) => link.setAttribute('tabindex', open ? '0' : '-1'));
  }

  _switchDrawer(e) {
    if (!this._drawer.classList.contains('open')) {
      this._toggleDrawer(true);
      e.stopPropagation();
    }
  }
}

export default DrawerInitiator;
