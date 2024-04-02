const HomePage = {
  async render() {
    return `
      <home-hero></home-hero>
      <home-content></home-content>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
