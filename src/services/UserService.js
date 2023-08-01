import User from "../model/userModel";
import axios from "axios";
class UserService {
  constructor() {
    this.apiUrl = "http://localhost:3000/users";
    this.users = [];
    this.fetchUsers();
  }

  bindUserListChanged(callback) {
    this.onUserListChanged = callback;
  }

  async fetchUsers() {
    try {
      const response = await fetch(this.apiUrl);
      const users = await response.json();
      this.users = users.map((user) => new User(user));
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Fail to load user list:", error);
    }
  }

  async addUser(user) {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const newUser = await response.json();
      this.users.push(new User(newUser));
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Fail to add user:", error);
    }
  }

  async deleteUser(id) {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
      this.users = this.users.filter((user) => user.id !== id);
      this.onUserListChanged(this.users);
    } catch (error) {
      console.log("fail to delete this user", error);
    }
  }
}

export default UserService;
