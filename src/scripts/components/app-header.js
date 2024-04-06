class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="container">
      <div>
        <svg class="logo" fill="#9f7aea" height="200px" width="200px" version="1.1" id="Layer_1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999"
          xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M497.314,426.496l-88.199-88.204c-15.367-15.376-38.255-18.454-56.853-9.631l-22.086-22.086 c21.422-32.394,17.887-76.551-10.614-105.058l-61.053-61.053c-15.596-15.596-39.238,7.99-23.608,23.608l42.334,42.334 l-23.614,23.613l-42.332-42.332c-15.596-15.596-39.238,7.99-23.608,23.608l42.331,42.331l-23.615,23.613l-42.33-42.33 c-15.596-15.596-39.238,7.99-23.608,23.608l61.053,61.053c28.492,28.502,72.651,32.054,105.059,10.616l22.084,22.085 c-8.825,18.6-5.742,41.483,9.63,56.852l88.199,88.21c19.53,19.519,51.31,19.526,70.83-0.006 C516.89,477.75,516.9,446.071,497.314,426.496z">
                </path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M255.994,66.788c-50.466,0-97.966,19.7-133.736,55.477C86.481,158.035,66.781,205.533,66.781,256 c0,104.334,84.879,189.213,189.213,189.213c20.949,0,41.468-3.551,60.959-10.202l-2.282-2.282 c-15.967-15.962-24.353-37.428-24.266-59.205c-9.673,2.543-19.695,3.848-29.869,3.848c-31.249,0-60.596-12.146-82.639-34.195 l-61.048-61.053c-30.441-30.389-10.624-83.059,32.625-85.422c1.389-25.431,21.745-45.83,47.222-47.222 c2.362-43.242,55.01-63.054,85.422-32.625l61.053,61.053c29.923,29.923,40.607,73.161,30.314,112.476 c0.164,0.001,0.326,0.001,0.49,0.001c22.222,0,43.092,8.63,58.754,24.298l2.276,2.276c6.652-19.492,10.202-40.01,10.202-60.959 C445.207,151.667,360.328,66.788,255.994,66.788z">
                </path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M255.994,0.006c-68.276,0-132.529,26.657-180.931,75.059C26.657,123.459,0,187.719,0,256 c0,141.154,114.84,255.994,255.994,255.994c39.533,0,77.701-9.009,112.12-25.816l-25.336-25.339 c-27.294,11.603-56.669,17.765-86.784,17.765c-122.741,0-222.603-99.862-222.603-222.603c0-59.389,23.173-115.274,65.26-157.349 c42.07-42.08,97.954-65.254,157.344-65.254c122.741,0,222.603,99.862,222.603,222.603c0,30.11-6.164,59.487-17.768,86.786 l25.079,25.08c16.884-34.707,26.08-72.999,26.08-111.866C511.988,114.846,397.148,0.006,255.994,0.006z">
                </path>
              </g>
            </g>
          </g>
        </svg>
        <h1>Pawon Tastic</h1>
      </div>
      <button class="drawer-icon" aria-label="Buka menu navigasi untuk perangkat mobile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <ul class="desktop-link">
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/favorite">Favorite</a></li>
        <li><a href="https://github.com/rickyaditb" target="_blank">About Us</a></li>
      </ul>
      <section class="drawer">
        <button class="close-drawer-icon" aria-label="Tutup menu navigasi untuk perangkat mobile" tabindex="-1">
        X
        </button>
        <ul>
          <li><a href="/" tabindex="-1" id="mobile-home">Home</a></li>
          <li><a href="#" tabindex="-1" id="mobile-favorite">Favorite</a></li>
          <li><a href="https://github.com/rickyaditb" target="_blank" tabindex="-1" id="mobile-about">About Us</a></li>
        </ul>
      </section>
      <div class="backdrop"></div>
    </nav>
    `;
  }
}

customElements.define('app-header', AppHeader);
