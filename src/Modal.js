export default class Modal {
  $target = null;
  state = null;
  $modalContainer = null;

  constructor({ $target, state = { isOpen: false } }) {
    this.$target = $target;
    this.state = state;
    this.$modalContainer = document.createElement("section");
    this.$modalContainer.setAttribute("class", "modal");
    this.$target.appendChild(this.$modalContainer);

    this.$modalContent = document.createElement("section");
    this.$modalContent.setAttribute("class", "modal__content");
    this.$modalContainer.appendChild(this.$modalContent);

    this.render();

    document
      .querySelector(".modal__btn--close")
      .addEventListener("click", () => this.close());
    this.$modalContainer.addEventListener("click", event => {
      if (event.target.classList.contains("modal__content")) {
        this.close();
      }
    });
    window.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      const $modal = document.querySelector("[class*=modal--open]");
      console.log($modal);
      if (!$modal) return;
      $modal.classList.remove("modal--open");
    });
  }

  open() {
    this.$modalContainer.classList.add("modal--open");
  }

  close() {
    this.$modalContainer.classList.remove("modal--open");
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$modalContent.innerHTML = `
    <form action="/" method="POST" class="modal__form">
      <i class="fas fa-times modal__btn--close"></i>
      <fieldset class="modal__fieldset--no-style">
        <legend>auth info</legend>
        <label for="userid">id</label>
        <input type="text" name="userid" />
        <label for="userid">password</label>
        <input type="password" name="userpwd" />
      </fieldset>
      <fieldset class="modal__fieldset--no-style">
        <legend>gender</legend>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Female</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label for="male">Other</label>
        <input type="radio" id="other" name="gender" value="other" />
      </fieldset>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus
        dolorum autem officiis voluptatem beatae illum id, cupiditate odit eius amet
        molestiae inventore, aspernatur, placeat ipsa quaerat ipsum nihil fugiat.
      </p>
      <fieldset class="modal__fieldset--no-style">
        <input type="radio" name="agree-on-terms" value="agree" />
        <label for="agree-on-terms">agree</label>
        <input type="radio" name="agree-on-terms" value="disagree" />
        <label for="agree-on-terms">disagree</label>
      </fieldset>
      <button class="modal__btn--submit" type="submit">가입</button>
    </form>
    `;
  }
}
