import LoginForm from "./LoginForm.js";

export default class App {
  $target = null;
  loginForm = null;

  constructor($target) {
    this.$target = $target;
    this.loginForm = new LoginForm($target);
  }
}
