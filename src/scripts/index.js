/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './utils/shell-loader';

import App from './views/app';
import {
  drawerIcon, closeDrawerIcon, backdrop, drawer, content,
} from './utils/element-selector';
import skippedElements from './utils/element-to-skip-from-tab-index';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  drawerIcon,
  closeDrawerIcon,
  backdrop,
  drawer,
  skippedElements,
  content,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
