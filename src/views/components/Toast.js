function Toast(type, msg) {
  const icons = {
    error: 'fas fa-solid fa-xmark',
    success: 'fas fa-solid fa-check',
  };

  const icon = icons[type];

  return `
      <div class="column">
        <i class="${icon}"></i>
        <span>${msg}</span>
      </div>
      <i class="fas fa-solid fa-circle-xmark"></i>
  `;
}

export default Toast;
