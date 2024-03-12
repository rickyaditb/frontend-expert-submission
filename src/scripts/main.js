import './components/app-header';
import './components/home-hero';
import './components/home-content';
import './components/app-footer';
import '../public/data/DATA.json';

const main = async () => {
  const drawerIcon = document.querySelector('.drawer-icon');
  const drawer = document.querySelector('.drawer');
  const backdrop = document.querySelector('.backdrop');
  drawerIcon.addEventListener('click', (e) => {
    drawer.classList.toggle('open');
    backdrop.classList.toggle('show');
    e.stopPropagation();
  });
  backdrop.addEventListener('click', () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('show');
  });
};

export default main;