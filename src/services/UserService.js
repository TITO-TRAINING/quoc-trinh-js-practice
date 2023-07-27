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

  async fetchUserById(id) {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);
      const user = await response.json();
      return new User(user);
    } catch (error) {
      console.error("Fail to fetch user by id:", error);
      return null;
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

  async editUser(id, userToEdit) {
    const user = this.users.find((item) => item.id == id);
    user.name = userToEdit.name;
    this.onUserListChanged(this.users);

    // try {
    //   const user = this.users.find((item => item.id == id))
    //   console.log(user)
    //   user.name = userToEdit.name
    //   const response = await fetch(`${this.apiUrl}/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(this.users),

    //   });
    //   const updatedUser = await response.json();
    //   // this.users = this.users.map((user) =>
    //   //   user.id === id ? new User(updatedUser) : user,
    //   // );

    //   this.onUserListChanged(updatedUser);
    // } catch (error) {
    //   console.error("Fail to edit user:", error);
    // }
  }
}

export default UserService;
