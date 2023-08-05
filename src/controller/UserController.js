class UserController {
  constructor(userService, userView) {
    this.userService = userService;
    this.userView = userView;

    // Explicit this binding
    this.userService.bindUserListChanged(this.onUserListChanged);
    this.userView.bindAddUser(this.handleAddUser);
    this.userView.bindEditUser(this.handleEditUser);
    this.userView.bindDeleteUser(this.handleDelteUser);
    this.userView.bindSearch(this.handleSearch);
    this.userView.openModalAddBtn();
    // Display initial users
    this.onUserListChanged(this.userService.users);
  }

  onUserListChanged = (users) => {
    this.userView.displayUsers(users);
  };

  handleAddUser = (user) => {
    if(this.userView.validate(user.name,user.age,user.location,user.phone,user.gpa)){
      this.userService.addUser(user);
    }
  };

  handleEditUser = (id, user) => {
    if(this.userView.validate(user.name,user.age,user.location,user.phone,user.gpa)){
      this.userService.editUser(id, user);
    }
  };

  handleDelteUser = (id) => {
    this.userService.deleteUser(id);
  };

  handleSearch = (name) => {
    this.userService.search(name);
  }
}

export default UserController;
