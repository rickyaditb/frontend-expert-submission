import restaurantData from '../../public/data/DATA.json';

class HomeContent extends HTMLElement {
  async connectedCallback() {
    await this._fetchData();
    this.render();
  }

  async _fetchData() {
    this._restaurant = JSON.parse(localStorage.getItem('restaurant-list'));
    if (!this._restaurant) {
      this._restaurant = JSON.parse(JSON.stringify(restaurantData.restaurants));
      localStorage.setItem('restaurant-list', JSON.stringify(this._restaurant));
    }
  }

  render() {
    this.innerHTML = `
    <section id="main-content" class="container home-content">
      <h2 class="caption">Katalog Restoran Kami</h2>
      <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, earum!</p>
      <section id="catalog">
        ${this._restaurant.map((item) => `
        <a href="#main-content" onclick="alert('Fitur belum diterapkan !');" aria-label="Detail Restoran ${item.name}">
          <article id="${item.id}">
            <div class="thumbnail-container">
              <img src="${item.pictureId}" alt="Gambar Restoran ${item.name}">
            </div>
            <div class="card-container">
              <h3>${item.name}</h3>
              <p class="truncate">${item.description}</p>
            </div>
            <div class="card-stats">
              <div class="star-container">
                <div class="star" style="width: ${(item.rating / 5) * 100}%">★★★★★</div>
              </div>
              <div class="city">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="city-icon">
                  <path fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd" />
                </svg>
                <span>${item.city}</span>
              </div>
            </div>
          </article>
        </a>
        `).join('')}
      </section>
    </section>
    `;
  }
}

customElements.define('home-content', HomeContent);
