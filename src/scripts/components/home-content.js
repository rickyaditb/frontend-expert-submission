class HomeContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="main-content" class="container">
      <h2>Katalog Restoran Kami</h2>
      <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, earum!</p>
      <section id="catalog">
        <a href="#">
          <article>
            <div class="thumbnail-container">
              <img src="https://restaurant-api.dicoding.dev/images/medium/41" alt="food1">
            </div>
            <div class="card-container">
              <h3>Bring Your Phone Cafe</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, earum!</p>
            </div>
            <div class="card-stats">
              <div class="star">★★★★★</div>
              <div class="city">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="city-icon">
                  <path fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd" />
                </svg>
                <span>Medan</span>
              </div>
            </div>
          </article>
        </a>
        <a href="#">
          <article>
            <div class="thumbnail-container">
              <img src="https://restaurant-api.dicoding.dev/images/medium/41" alt="food1">
            </div>
            <div class="card-container">
              <h3>Bring Your Phone Cafe</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, earum!</p>
            </div>
            <div class="card-stats">
              <div class="star">★★★★★</div>
              <div class="city">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="city-icon">
                  <path fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd" />
                </svg>
                <span>Medan</span>
              </div>
            </div>
          </article>
        </a>
        <a href="#">
          <article>
            <div class="thumbnail-container">
              <img src="https://restaurant-api.dicoding.dev/images/medium/41" alt="food1">
            </div>
            <div class="card-container">
              <h3>Bring Your Phone Cafe</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, earum!</p>
            </div>
            <div class="card-stats">
              <div class="star">★★★★★</div>
              <div class="city">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="city-icon">
                  <path fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd" />
                </svg>
                <span>Medan</span>
              </div>
            </div>
          </article>
        </a>
      </section>
    </section>
    `;
  }
}

customElements.define('home-content', HomeContent);