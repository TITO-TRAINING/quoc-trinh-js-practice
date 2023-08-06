import UserService from "./services/UserService";
import UserView from "./views/UserView";
import UserController from "./controller/UserController";

new UserController(new UserService(), new UserView());
