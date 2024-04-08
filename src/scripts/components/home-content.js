import DicodingSource from '../data/dicoding-source';
import appCard from './app-card';

class HomeContent extends HTMLElement {
  async connectedCallback() {
    await this._fetchData();
    this.render();
    this._afterRender();
  }

  async _fetchData() {
    this._restaurant = await DicodingSource.allRestaurant();
  }

  render() {
    this.innerHTML = `
    <section id="main-content" class="container home-content">
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
