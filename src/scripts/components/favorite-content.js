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
    <section id="main-content" class="container" tabindex="0">
      <div class="favorit-bar">
        <span>⭐ Restoran Favorit</span>
        <svg viewBox="0 0 24 24" class="sort-icon" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke="#5b6779" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
      <section id="catalog">
        <div class="empty-message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="empty-logo">
            <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
          </svg>
          <p>Ooppsss, belum ada restoran yang ditambahkan ke favorit.</p>
          <a href="/#/" class="add-comment-submit">Kembali ke Beranda</a>
        </div>
      </section>
    </section>
    `;
  }

  _afterRender() {
    const catalog = document.getElementById('catalog');
    if (this._restaurant.length === 0) {
      const emptyMessage = document.querySelector('.empty-message');
      emptyMessage.style.display = 'flex';
    } else {
      this._restaurant.forEach((restaurant) => {
        catalog.innerHTML += appCard(restaurant);
      });
      const cards = document.querySelectorAll('article');
      cards.forEach((card) => {
        card.classList.add('card-shadow');
      });
    }
  }
}

customElements.define('favorite-content', favoriteContent);
