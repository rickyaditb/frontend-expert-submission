import DicodingSource from '../data/dicoding-source';
import appCard from './app-card';
import Toast from './app-toast';

class HomeContent extends HTMLElement {
  async connectedCallback() {
    await this._fetchData();
    this.render();
    this._afterRender();
  }

  async _fetchData() {
    new Toast('Memuat Data...', 1000).show();
    this._restaurant = await DicodingSource.allRestaurant();
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
    <section id="main-content" class="container home-content" tabindex="0">
      <h2 class="caption">Katalog Restoran Kami</h2>
      <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, earum!</p>
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
  }
}

customElements.define('home-content', HomeContent);
