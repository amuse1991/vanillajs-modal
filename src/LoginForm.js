export default class LoginForm {
  $target = null;

  constructor($target) {
    this.$target = $target;

    const $loginBtn = document.createElement("button");
    const $signupBtn = document.createElement("button");
    $loginBtn.innerHTML = "로그인";
    $signupBtn.innerHTML = "회원가입";

    $target.appendChild($loginBtn);
    $target.appendChild($signupBtn);
  }
}
