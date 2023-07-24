import UserTable from "./modules/UserTable";
import Toast from "./components/Toast";
import UserItem from "./modules/UserItem";

class UserView {
  constructor() {
    this.app = document.querySelector("#root");

    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("wrapper");

    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.container.innerHTML += UserTable();

    this.app.appendChild(this.wrapper);
    this.wrapper.appendChild(this.container);

    this.table = document.querySelector(".users-list");
  }

  displayUsers(users) {
    // Show default message
    if (users.length === 0) {
      Toast("warning", "Page is empty");
    } else {
      // Create nodes
      users.forEach((user) => {
        this.table.innerHTML += UserItem(user);
      });
    }
  }

  // _initLocalListeners() {
  //   this.userList.addEventListener('input', (event) => {
  //     if (event.target.className === 'editable') {
  //       this._temporaryAgeText = event.target.innerText;
  //     }
  //   });
  // }

  bindAddUser(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._nameText) {
        handler({
          name: this._nameText,
          age: this._ageText,
        });
        this._resetInput();
      }
    });
  }

  // bindDeleteUser(handler) {
  //   this.userList.addEventListener('click', (event) => {
  //     if (event.target.className === 'delete') {
  //       const id = event.target.parentElement.id;

  //       handler(id);
  //     }
  //   });
  // }

  // bindEditUser(handler) {
  //   this.userList.addEventListener('focusout', (event) => {
  //     if (this._temporaryAgeText) {
  //       const id = event.target.parentElement.id;
  //       const key = 'age';

  //       handler(id, { [key]: this._temporaryAgeText });
  //       this._temporaryAgeText = '';
  //     }
  //   });
  // }

  // bindToggleUser(handler) {
  //   this.userList.addEventListener('change', (event) => {
  //     if (event.target.type === 'checkbox') {
  //       const id = event.target.parentElement.id;

  //       handler(id);
  //     }
  //   });
  // }
}

export default UserView;
