import User from "../model/userModel";
import axios from "axios";

class UserService {
  constructor() {
    this.apiUrl = "http://localhost:3000/users";
    this.users = [];
    this.onUserListChanged = null;
    this.fetchUsers();
  }

  bindUserListChanged(callback) {
    this.onUserListChanged = callback;
  }

  async fetchUsers() {
    try {
      let { data } = await axios.get(this.apiUrl);
      if (data) {
        this.users = data.map((user) => new User(user));
      }
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Fail to load user list:", error);
    }
  }

  async fetchUserById(id) {
    try {
      const { data } = await axios.get(`${this.apiUrl}/${id}`);
      return new User(data);
    } catch (error) {
      console.error("Fail to fetch user by id:", error);
      return null;
    }
  }

  async addUser(user) {
    try {
      const { data } = await axios.post(this.apiUrl, user);
      if (data) {
        this.users.push(new User(data));
        console.log(data);
      }
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Fail to add user:", error);
    }
  }

  async editUser(id, user) {
    try {
      const { data } = await axios.patch(`${this.apiUrl}/${id}`, user);
      if (data) {
        const userToEdit = this.users.find((item) => item.id == id);
        if (!userToEdit) {
          console.error("User not found");
          return;
        }

        userToEdit.name = data.name;
        userToEdit.age = data.age;
        userToEdit.location = data.location;
        userToEdit.phone = data.phone;
        userToEdit.gpa = data.gpa;

        this.onUserListChanged(this.users);
      }
    } catch (error) {
      console.error("Fail to edit user:", error);
    }
  }
}

export default UserService;
