class Toast {
  static lastToast = null;

  constructor(message, duration = 4000) {
    this.message = message;
    this.duration = duration;
    this.toastElement = null;
  }

  show() {
    // Clear the last toast if it exists
    if (Toast.lastToast) {
      Toast.lastToast.hide();
    }

    this.toastElement = document.createElement('div');
    this.toastElement.classList.add('toast');
    this.toastElement.textContent = this.message;
    document.body.appendChild(this.toastElement);

    // Set this toast as the last toast
    Toast.lastToast = this;

    setTimeout(() => this.hide(), this.duration);
  }

  hide() {
    if (this.toastElement) {
      this.toastElement.remove();
      this.toastElement = null;
    }
  }
}

export default Toast;
