import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import Login from "./component/Login.js"

export const auth = getAuth();
export const db = getFirestore();

import Main from "./component/main.js"

class App {
    activeScreen;
    container;
  
    constructor(container) {
      this.container = container;
      this.setupAuthenticationListener();
    }
  
    setupAuthenticationListener() {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          const mainScreen = new Main();
          mainScreen.$head.$userEl.classList.remove("hidden");

          mainScreen.$head.$logOutEle.classList.remove("hidden");
          mainScreen.$head.$registerBtn.classList.add("hidden");
          mainScreen.$head.$loginBtn.classList.add("hidden");
          mainScreen.$head.$divideEl.classList.add("hidden");
          mainScreen.$cartModal.$cartContainer.classList.remove("hidden");
          this.setActiveScreen(mainScreen);
        } else {
          this.setActiveScreen(new Login ());
        }
      });
    }
  
    setActiveScreen(screen) {
      if (this.activeScreen !== undefined) {
        this.container.innerHTML = "";
      }
      this.activeScreen = screen;
      this.activeScreen.render(this.container);
    }
  }
  
  const appContainer = document.getElementById("root");
  
  const app = new App(appContainer);
  
  export default app;