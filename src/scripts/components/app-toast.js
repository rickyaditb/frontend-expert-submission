class Toast {
  constructor(message, duration = 4000) {
    this.message = message;
    this.duration = duration;
  }

  show() {
    const toastElement = document.createElement('div');
    toastElement.classList.add('toast');
    toastElement.textContent = this.message;

    document.body.appendChild(toastElement);

    setTimeout(() => {
      toastElement.remove();
    }, this.duration);
  }
}

export default Toast;
