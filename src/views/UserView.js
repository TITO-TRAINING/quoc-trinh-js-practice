import UserTable from "./modules/UserTable";
import Header from "./components/Header";
import Toast from "./components/Toast";
import Modal from "./components/Modal";
import UserService from "../services/UserService";

class UserView {
  constructor() {
    this.app = document.querySelector("#root");
    this.app.innerHTML += Modal();
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("wrapper");

    this.myToast = document.createElement("div");
    this.myToast.classList.add("myToast");

    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.container.innerHTML = Header() + UserTable();

    // this.modal = Modal()
    this.header = document.createElement("div");

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

  get idUser() {
    return document.querySelector("#id").value;
  }

  clearForm() {
    this.inputName.value = "";
    this.inputAge.value = "";
    this.inputLocation.value = "";
    this.inputPhone.value = "";
    this.inputGpa.value = "";
  }

  hideModal() {
    const modal = document.querySelector(".modalCustom");
    modal.classList.remove("show");
    modal.classList.add("hide");
  }

  openModal() {
    const modal = document.querySelector(".modalCustom");
    modal.classList.remove("hide");
    modal.classList.add("show");
  }

  openModalAddBtn() {
    const inserBtn = document.querySelector(".btn-add");
    const modal = document.querySelector(".modalCustom");
    const modalContent = document.querySelector(".modalcontent");
    inserBtn.addEventListener("click", () => {
      if (modal.classList.contains("hide")) {
        modal.classList.remove("hide");
        modal.classList.add("show");
      }
      this.toggleFormBtn(false);
      this.clearForm();
    });

    modal.addEventListener("click", function () {
      modal.classList.remove("show");
      modal.classList.add("hide");
    });

    modalContent.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  toggleFormBtn(save = true) {
    const btnSave = document.querySelector(".btn-save");
    const btnUpdate = document.querySelector(".btn-update");
    if (save) {
      btnSave.classList.add("hide");
      btnUpdate.classList.remove("hide");
    } else {
      btnSave.classList.remove("hide");
      btnUpdate.classList.add("hide");
    }
  }

  async getUserById(id) {
    try {
      const userService = new UserService();
      const user = await userService.fetchUserById(id);
      if (user) {
        return user;
      } else {
        console.log("Không tìm thấy người dùng với id:", id);
        return null;
      }
    } catch (error) {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
      return null;
    }
  }

  displayUsers(users) {
    this.users = users;
    let temp = "";
    users.map(({ id, name, age, location, phone, gpa }) => {
      temp += `<tr key=${id}>
      <td>#${id}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${location}</td>
      <td>${phone}</td>
      <td>${gpa}</td>
      <td>
        <button class="btn btn-edit position-relative z-index-3" data-id="${id}">
        Edit
        </button>
        <button class="action-btn btn-delete delete-icon" data-id="${id}" >
        Delete
        </button>
      </td>
    </tr>`;
    });
    this.table.innerHTML = temp;
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
      this.clearForm();
      this.hideModal();
    });
  }

  bindEditUser(handler) {
    let getIdRow;
    let editedUser;
    this.table.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-edit")) {
        const currentRow = e.target.parentElement.closest("tr");
        getIdRow = parseInt(currentRow.getAttribute("key"));
        const user = this.users.find((item) => item.id == getIdRow);
        this.populateModal(user);
        this.toggleFormBtn(true);
        const saveChangesBtn = document.querySelector(".btn-update");
        saveChangesBtn.addEventListener("click", () => {
          editedUser = {
            name: this._nameText,
            age: this._ageText,
            location: this._locationText,
            phone: this._phoneText,
            gpa: this._gpaText,
          };
          handler(getIdRow, editedUser);
          this.hideModal();
        });
      }
    });
  }

  populateModal(user) {
    this.inputName.value = user.name;
    this.inputAge.value = user.age;
    this.inputLocation.value = user.location;
    this.inputPhone.value = user.phone;
    this.inputGpa.value = user.gpa;

    this.openModal();
  }
}

export default UserView;
