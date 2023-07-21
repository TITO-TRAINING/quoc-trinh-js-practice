function Toast(mes) {
  return `
<div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      ${mes}
    </div>
    <div class="remove"><i class="fa-solid fa-xmark"></i></div>
  </div>
</div>
`;
}

export default Toast;
