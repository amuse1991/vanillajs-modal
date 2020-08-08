import Login from "./Login.js";
import Modal from "./Modal.js";

export default class App {
  $target = null;
  loginForm = null;
  modal = null;

  constructor($target) {
    this.$target = $target;
    this.loginForm = new Login({ $target });
    this.modal = new Modal({ $target, state: { isOpen: false } });
  }

  render() {
    this.$target.innerHTML = `
      <section class="auth"></section>
    `;
  }
}
