class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
      <div class="footer-about">
        <h2>Dicoding Submission</h2>
        <p>Front-End Web Developer Expert</p>
      </div>
      <div class="footer-copyright">
        <h2>Ricky Aditya Bagaskara</h2>
        <p>Copyright © 2024 - Pawon Tastic</p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-footer', AppFooter);