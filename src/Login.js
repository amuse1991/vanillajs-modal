export default class Login {
  $target = null;
  $loginForm = null;
  state = null;

  constructor({ $target, state = {} }) {
    this.$target = $target;
    this.state = state;

    this.$loginForm = document.createElement("section");
    this.$loginForm.setAttribute("class", "login");
    this.$target.appendChild(this.$loginForm);

    this.render();

    const $loginBtn = document.querySelector(".login__signup");
    $loginBtn.addEventListener("click", () => {
      document.querySelector(".modal").classList.toggle("modal--open"); // TODO: refac
    });
  }

  setState(nextState) {
    this.state = JSON.parse(JSON.stringify(nextState));
    this.render();
  }

  render() {
    this.$loginForm.innerHTML = `
      <form class="login__form" action="/" method="POST">
        <p>
          <label for="userid">id</label>
          <input type="text" name="userid" />
        </p>
        <p>
          <label for="userpwd">password</label>
          <input tpye="password" name="userpwd" />
        </p>
        <button type="submit" class="login__submit">로그인</button>
        <button type="button" class="login__signup">회원가입</button>
      </form>
    `;
  }
}
