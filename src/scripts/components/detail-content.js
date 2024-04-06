class DetailContent extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="main-content" class="container detail-content">
      <div class="detail-thumb-container">
        <div class="detail-thumb">
          <img src="https://restaurant-api.dicoding.dev/images/medium/07" alt="" class="detail-thumb-img">
        </div>
        <button class="detail-like">Bookmark Restoran</button>
      </div>
      <div class="detail-container">
        <div class="detail">
          <div class="titles">
            <h1>Melting Pot</h1>
            <p>( Medan )</p>
          </div>
          <div class="city">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="city-icon">
              <path fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd" />
            </svg>
            <span>Jln. Pustakawan no 9</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet</p>
          <div class="detail-stats">
            <div class="detail-category">
              <ul>
                <li>Lorem</span>
                <li>Ipsum</span>
              </ul>
            </div>
            <div class="star-container">
              <div class="star">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-menu-container">
        <div class="detail-menu">
          <h2>🍖 Menu Makanan</h2>
          <ul>
            <li>Daging Sapi</li>
            <li>Bebek crepes</li>
            <li>Daging Sapi</li>
            <li>Bebek crepes</li>
          </ul>
        </div>
      </div>
      <div class="detail-menu-container"> 
        <div class="detail-menu">
          <h2>🍵 Menu Minuman</h2>
          <ul>
            <li>Daging Sapi</li>
            <li>Bebek crepes</li>
            <li>Daging Sapi</li>
            <li>Bebek crepes</li>
          </ul>
        </div>
      </div>
      <div class="detail-comment-info-container">
        <h2>📝 Ulasan - Ulasan</h2>
        <button>Tulis Komentar</button>
      </div>
      <div class="detail-comment-container">
        <div class="detail-comment">
          <div class="detail-comment-head">
            <span class="initial">R</span>
            <div class="detail-comment-detail">
              <p class="name">Ricky Aditya</p>
            </div>
            <p class="date">12 Agustus 2021</p>
          </div>
          <p class="detail-comment-desc">Enakkkk</p>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('detail-content', DetailContent);
