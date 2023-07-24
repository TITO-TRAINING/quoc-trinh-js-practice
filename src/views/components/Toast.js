function Toast(type, mes) {
  const colors = {
    success: "bg-success", // Màu nền cho thông báo thành công
    warning: "bg-warning", // Màu nền cho thông báo cảnh báo
    error: "bg-danger", // Màu nền cho thông báo lỗi
  };

  const color = colors[type]; // Lấy màu nền tương ứng với kiểu (type) được truyền vào

  return `
      <div class="toast align-items-center text-white ${color} border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
              <div class="toast-body">
                  ${mes} <!-- Hiển thị nội dung thông báo được truyền vào (message) -->
              </div>
          </div>
      </div>
    `;
}

export default Toast;
