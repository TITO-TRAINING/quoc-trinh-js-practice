import Toast from "./Toast";

export const removeToast = (toast) => {
    toast.classList.add('hiden');
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
  };
  
  export const createToast = (
    type = 'error',
    msg = 'Error: Fail to implement!',
  ) => {
    const toastList = document.querySelector('.myToast');
  
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = Toast(type, msg);
    toastList.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), 5000);
  };
  