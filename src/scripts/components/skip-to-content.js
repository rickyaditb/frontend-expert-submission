class SkipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#main-content" class="skip-link">Menuju ke konten</a>
    `;
  }
}

customElements.define('skip-to-content', SkipToContent);
