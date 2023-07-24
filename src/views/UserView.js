import UserTable from "./modules/UserTable";
import Header from "./components/Header";
import Toast from "./components/Toast";
import UserItem from "./modules/UserItem";
import Modal from "./components/Modal";

class UserView {
  constructor() {
    this.app = document.querySelector("#root");

    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("wrapper");

    this.myToast = document.createElement("div");
    this.myToast.classList.add("myToast");

    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.container.innerHTML = Header() + UserTable();

    this.header = document.createElement("div");
    this.header.innerHTML = Modal();

    this.container.appendChild(this.header);
    this.app.append(this.myToast);
    this.app.appendChild(this.wrapper);
    this.wrapper.appendChild(this.container);

    this.table = document.querySelector(".users-list");
    this.form = document.querySelector("form");

    this.inputName = document.querySelector("#name");
    this.inputAge = document.querySelector("#age");
    this.inputPhone = document.querySelector("#phone");
    this.inputLocation = document.querySelector("#location");
    this.inputGpa = document.querySelector("#gpa");
  }

  createToast = (mes) => {
    const myToast = Toast(mes);
    document.querySelector(".myToast").innerHTML = myToast;

    const closeBtn = document.querySelector(".remove");
    closeBtn.onclick = function () {
      document.querySelector(".myToast").style.display = "none";
    };
  };

  get _nameText() {
    return this.inputName.value;
  }

  get _ageText() {
    return this.inputAge.value;
  }

  get _locationText() {
    return this.inputLocation.value;
  }

  get _phoneText() {
    return this.inputPhone.value;
  }

  get _gpaText() {
    return this.inputGpa.value;
  }

  hideModal() {
    const modalHide = document.querySelector("#exampleModal");
    modalHide.style.display = "none";

    // Tìm tất cả các phần tử .modal-backdrop.fade.show
    const modalBackdrops = document.querySelectorAll(
      ".modal-backdrop.fade.show",
    );

    // Ẩn phần tử .modal-backdrop.fade.show của modal hiện tại
    if (modalBackdrops.length > 0) {
      modalBackdrops[modalBackdrops.length - 1].style.display = "none";
      modalBackdrops[modalBackdrops.length - 2].style.display = "none";
    }

    document.body.classList.remove("modal-open");
  }

  displayUsers(users) {
    this.table.innerHTML = "";
    users.forEach((user) => {
      this.table.innerHTML += UserItem(user);
    });
    this.hideModal();
  }

  bindAddUser(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      handler({
        name: this._nameText,
        age: this._ageText,
        location: this._locationText,
        phone: this._phoneText,
        gpa: this._gpaText,
      });
    });
    this.hideModal();
  }
}

export default UserView;
