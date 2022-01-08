import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from "../index.js";
import Register from "./Register.js";
import app from "../index.js";
import InputGroup from "./InputGroup.js";
import Main from "./Main.js";


export default class Login {
  $mainContainer;
  $emailEl;
  $pwEl;
  $formEl;
  $btnEl;
  $goToRegister;

  constructor() {
    this.$mainContainer = document.createElement("div");
    this.$mainContainer.style.backgroundImage = "url('https://nt11.mediawz.com/wp-content/uploads/2017/10/master03.jpg')";
    this.$mainContainer.setAttribute("class", "w-screen h-screen pt-24");

    this.$formEl = document.createElement("form");
    this.$formEl.addEventListener("submit", this.handleLogin);
    this.$formEl.setAttribute(
        "class",
        "w-1/3 bg-gray-400 py-12 px-4 mx-auto mt-24 rounded-xl bg-opacity-50"
    );


    this.$emailEl = new InputGroup("email", "Email", "Enter your email");
    this.$pwEl = new InputGroup("password", "Password", "Enter your password");

    this.$btnEl = document.createElement("button");
    this.$btnEl.textContent = "Login";
    this.$btnEl.type = "submit";
    this.$btnEl.setAttribute(
        "class",
        "bg-white py-2 px-4 rounded-md font-bold"
    );

    this.$goToRegister = document.createElement("p");
    this.$goToRegister.textContent = "Go to Register page"; 
    this.$goToRegister.setAttribute("class", "text-white font-bold mt-2 cursor-pointer");

    this.$goToRegister.addEventListener("click", this.goToRegisterPage);
  }

  handleLogin = (e) => {
    e.preventDefault();

    const email = this.$emailEl.getInputValue();
    const password = this.$pwEl.getInputValue();
    // console.log({email,password})

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // console.log(user)
        const mainScreen = new Main();
        mainScreen.$head.$userEl.classList.remove("hidden");
        mainScreen.$head.$registerBtn.classList.add("hidden");
        mainScreen.$head.$loginBtn.classList.add("hidden");
        mainScreen.$head.$divideEl.classList.add("hidden");
        mainScreen.$cartModal.$cartContainer.classList.remove("hidden");
        app.setActiveScreen(mainScreen);
      })
      .catch((error) => {
        console.log(error)
        alert(error.message);
      });
  };
    
  goToRegisterPage = () => {
      const registerScreen = new Register();
      app.setActiveScreen(registerScreen);
  };
    
  render(container) {
    this.$formEl.appendChild(this.$emailEl.render());
    this.$formEl.appendChild(this.$pwEl.render());

    const formBottom = document.createElement("div");
    formBottom.classList.add("flex", "justify-between");
    formBottom.appendChild(this.$btnEl);
    formBottom.appendChild(this.$goToRegister);

    this.$formEl.appendChild(formBottom);

    this.$mainContainer.appendChild(this.$formEl);

    container.appendChild(this.$mainContainer);
  }
}