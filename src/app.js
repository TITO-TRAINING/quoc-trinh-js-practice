import UserService from "./services/UserService";
import UserView from "./views/UserView";
import UserController from "./controller/userController";

new UserController(new UserService(), new UserView());
