import UrlParser from '../routes/url-parser';
import DicodingSource from '../data/dicoding-source';
import CONFIG from '../globals/config';
import LikeButtonPresenter from '../utils/like-button-presenter';
import Toast from './app-toast';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

class DetailContent extends HTMLElement {
  async connectedCallback() {
    await this._fetchData();
    this.render();
    this._afterRender();
  }

  async _fetchData() {
    new Toast('Memuat Data...', 1000).show();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    this._restaurant = await DicodingSource.detilRestaurant(url.id);
    if (!this._restaurant) {
      new Toast('Data Gagal Dimuat').show();
      return;
    }
    setTimeout(() => {
      new Toast('Data Berhasil Dimuat', 500).show();
    }, 1000);
  }

  _createRestaurantObject() {
    return {
      id: this._restaurant.id,
      name: this._restaurant.name,
      description: this._restaurant.description,
      city: this._restaurant.city,
      address: this._restaurant.address,
      pictureId: this._restaurant.pictureId,
      categories: this._restaurant.categories,
      menus: this._restaurant.menus,
      rating: this._restaurant.rating,
      customerReviews: this._restaurant.customerReviews,
    };
  }

  async _submitButtonClickHandler() {
    const name = document.querySelector('.add-comment-name').value;
    const desc = document.querySelector('.add-comment-desc').value;
    const data = {
      id: this._restaurant.id,
      name,
      review: desc,
    };
    const reviewResponse = await DicodingSource.addReview(data);
    if (!reviewResponse) {
      new Toast('Review Gagal Dikirim').show();
      return;
    }
    await this._fetchData();
    this.render();
    this._afterRender();
    new Toast('Review Berhasil Dikirim').show();
  }

  // eslint-disable-next-line class-methods-use-this
  _toggleCommentForm() {
    const addComment = document.querySelector('.add-comment');
    addComment.classList.toggle('show');
  }

  _afterRender() {
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: this._createRestaurantObject(),
    });

    const showCommentButton = document.querySelector('.show-comment');
    showCommentButton.addEventListener('click', () => this._toggleCommentForm());
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => this._submitButtonClickHandler());
  }

  render() {
    this.innerHTML = `
    <section id="main-content" class="container detail-content" tabindex="0">
      <div class="detail-thumb-container">
        <div class="detail-thumb">
          <source media="(max-width: 600px)" srcset="${`${CONFIG.BASE_IMAGE_URL}small/${this._restaurant.pictureId}`}">
          <source media="(max-width: 1280px)" srcset="${`${CONFIG.BASE_IMAGE_URL}medium/${this._restaurant.pictureId}`}">
          <img class="detail-thumb-img" src="${`${CONFIG.BASE_IMAGE_URL}large/${this._restaurant.pictureId}`}" alt="Gambar Restoran ${this._restaurant.name}">
        </div>
        <div id="likeButtonContainer"></div>
      </div>
      <div class="detail-container">
        <div class="detail">
          <div class="titles">
            <h1>${this._restaurant.name}</h1>
            <p>${this._restaurant.city}</p>
          </div>
          <div class="city">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="city-icon">
              <path fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd" />
            </svg>
            <span>${this._restaurant.address}</span>
          </div>
          <p>${this._restaurant.description}</p>
          <div class="detail-stats">
            <div class="detail-category">
              <ul>
              ${this._restaurant.categories.map((item) => `
                <li>${item.name}</span>
              `).join('')}
              </ul>
            </div>
            <div class="star-container">
            <div class="star" style="width: ${(this._restaurant.rating / 5) * 100}%">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-menu-container">
        <div class="detail-menu">
          <h2>🍖 Menu Makanan</h2>
          <ul>
            ${this._restaurant.menus.foods.map((item) => `
              <li>${item.name}</li>
            `).join('')}
          </ul>
        </div>
      </div>
      <div class="detail-menu-container"> 
        <div class="detail-menu">
          <h2>🍵 Menu Minuman</h2>
          <ul>
            ${this._restaurant.menus.drinks.map((item) => `
              <li>${item.name}</li>
            `).join('')}
          </ul>
        </div>
      </div>
      <div class="detail-comment-info-container">
        <h2>📝 Ulasan</h2>
        <button class="show-comment" aria-label="Tampilkan Form Komentar">Tulis Komentar</button>
      </div>
      <div class="add-comment">
        <label for="add-comment-name" class="add-comment-label">Nama</label>
        <input type="text" class="add-comment-name" placeholder="Ketik Nama Kamu Disini">
        <label for="add-comment-desc" class="add-comment-label">Ulasan</label>
        <textarea class="add-comment-desc" placeholder="Ketik Ulasan Kamu Disini"></textarea>
        <button class="add-comment-submit" id="submit" aria-label="Kirim Komentar">Kirim</button>
      </div>
      <div class="detail-comment-container">
      ${this._restaurant.customerReviews.map((item) => `
        <div class="detail-comment">
          <div class="detail-comment-head">
            <span class="initial">${item.name.charAt(0).toUpperCase()}</span>
            <div class="detail-comment-detail">
              <p class="name">${item.name}</p>
            </div>
            <p class="date">${item.date}</p>
          </div>
          <p class="detail-comment-desc">${item.review}</p>
        </div>
      `).join('')}
      </div>
    </section>
    `;
  }
}

customElements.define('detail-content', DetailContent);
