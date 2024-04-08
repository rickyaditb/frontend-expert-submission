import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import appCard from './app-card';
import Toast from './app-toast';

class favoriteContent extends HTMLElement {
  async connectedCallback() {
    await this._fetchData();
    this.render();
    this._afterRender();
  }

  async _fetchData() {
    new Toast('Memuat Data...', 1000).show();
    this._restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    if (!this._restaurant) {
      new Toast('Data Gagal Dimuat').show();
      return;
    }
    setTimeout(() => {
      new Toast('Data Berhasil Dimuat', 500).show();
    }, 1000);
  }

  render() {
    this.innerHTML = `
    <section id="main-content" class="container">
      <div class="favorit-bar">
        <span>⭐ Restoran Favorit</span>
        <svg viewBox="0 0 24 24" class="sort-icon" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke="#5b6779" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
      <section id="catalog">
      </section>
    </section>
    `;
  }

  _afterRender() {
    const catalog = document.getElementById('catalog');
    this._restaurant.forEach((restaurant) => {
      catalog.innerHTML += appCard(restaurant);
    });
    const cards = document.querySelectorAll('article');
    cards.forEach((card) => {
      card.classList.add('card-shadow');
    });
  }
}

customElements.define('favorite-content', favoriteContent);
