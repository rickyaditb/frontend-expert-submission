import './components/app-header';
import './components/home-hero';
import './components/home-content';
import './components/app-footer';
import '../public/data/DATA.json';

const main = async () => {
  const [drawerIcon, closeDrawerIcon, drawer, backdrop, homeStart] = ['.drawer-icon', '.close-drawer-icon', '.drawer', '.backdrop', '#home-start'].map((s) => document.querySelector(s));
  const linksToHide = ['#mobile-home', '#mobile-favorite', '#mobile-about', '.close-drawer-icon'].map((s) => document.querySelector(s));

  function toggleDrawer(open) {
    drawer.classList.toggle('open', open);
    backdrop.classList.toggle('show', open);
    linksToHide.forEach((link) => link.setAttribute('tabindex', open ? '0' : '-1'));
  }

  drawerIcon.addEventListener('click', (e) => {
    if (!drawer.classList.contains('open')) {
      toggleDrawer(true);
      e.stopPropagation();
    }
  });

  closeDrawerIcon.addEventListener('click', () => toggleDrawer(false));
  backdrop.addEventListener('click', () => toggleDrawer(false));
  homeStart.addEventListener('focus', () => toggleDrawer(false));
};

export default main;
