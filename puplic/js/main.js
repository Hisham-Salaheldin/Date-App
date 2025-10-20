import { gologBtn,goRegBtn } from "./const.js";
import { animateLogin,animateReg } from "./animations.js";

window.addEventListener("load", ()=>{
    // loging and register animation
    gologBtn.addEventListener("click", animateLogin);
    goRegBtn.forEach((btn) => {btn.addEventListener("click", animateReg)});
});
