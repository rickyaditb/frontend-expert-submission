class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div>
    Awwoooga
    </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);