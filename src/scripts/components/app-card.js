import CONFIG from '../globals/config';

const cardTemplate = (restaurant) => `
  <a href="#/detail/${restaurant.id}" aria-label="Detail Restoran ${restaurant.name}">
    <article id="${restaurant.id}">
      <div class="thumbnail-container">
        <picture>
          <source media="(max-width: 600px)" srcset="${`${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}`}">
          <source media="(max-width: 1280px)" srcset="${`${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`}">
          <img class="lazyload" src="${`${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}`}" alt="Gambar Restoran ${restaurant.name}">
        </picture>
      </div>
      <div class="card-container">
        <h3>${restaurant.name}</h3>
        <p class="truncate">${restaurant.description}</p>
      </div>
      <div class="card-stats">
        <div class="star-container">
          <div class="star" style="width: ${(restaurant.rating / 5) * 100}%">★★★★★</div>
        </div>
        <div class="city">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="city-icon">
            <path fill-rule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clip-rule="evenodd" />
          </svg>
          <span>${restaurant.city}</span>
        </div>
      </div>
    </article>
  </a>
`;

export default cardTemplate;
