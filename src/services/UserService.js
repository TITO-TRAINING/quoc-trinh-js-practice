import User from "../model/userModel";

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
      console.log(1);
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Fail to add user:", error);
    }
  }

  async editUser(id, userToEdit) {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userToEdit),
      });
      const updatedUser = await response.json();
      this.users = this.users.map((user) =>
        user.id === id ? new User(updatedUser) : user,
      );
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Fail to edit user:", error);
    }
  }

  async deleteUser(id) {
    try {
      await fetch(`${this.apiUrl}/${id}`, {
        method: "DELETE",
      });
      this.users = this.users.filter((user) => user.id !== id);
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Fail to delete user:", error);
    }
  }

  async toggleUserComplete(id) {
    try {
      const user = this.users.find((user) => user.id === id);
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ check: !user.check }),
      });
      const updatedUser = await response.json();
      this.users = this.users.map((user) =>
        user.id === id ? new User(updatedUser) : user,
      );
      this.onUserListChanged(this.users);
    } catch (error) {
      console.error("Error when changing user authentication status:", error);
    }
  }
}

export default UserService;
