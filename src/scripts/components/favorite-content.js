class favoriteContent extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="main-content" class="container">
      <div class="favorit-bar">
        <span>⭐ Restoran Favorit</span>
        <svg viewBox="0 0 24 24" class="sort-icon" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke="#5b6779" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
    </section>
    `;
  }
}

customElements.define('favorite-content', favoriteContent);
