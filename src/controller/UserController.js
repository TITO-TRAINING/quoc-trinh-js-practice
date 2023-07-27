class UserController {
  constructor(userService, userView) {
    this.userService = userService;
    this.userView = userView;

    // Explicit this binding
    this.userService.bindUserListChanged(this.onUserListChanged);
    this.userView.bindAddUser(this.handleAddUser);
    this.userView.openModalAddBtn();
    this.userView.bindEditUser(this.handleEditUser);

    // Display initial users
    this.onUserListChanged(this.userService.users);
  }

  onUserListChanged = (users) => {
    this.userView.displayUsers(users);
  };

  handleAddUser = (user) => {
    this.userService.addUser(user);
  };

  handleEditUser = (id, user) => {
    this.userService.editUser(id, user);
  };
}

export default UserController;
