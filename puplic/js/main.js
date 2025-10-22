import { gologBtn,goRegBtn,regBackBtn } from "./const.js";
import { animateLogin,animateReg,backToMain } from "./animations.js";

window.addEventListener("load", ()=>{
    // loging and register animation
    regBackBtn.addEventListener("click", backToMain);
    gologBtn.addEventListener("click", animateLogin);
    goRegBtn.forEach((btn) => {btn.addEventListener("click", animateReg)});
});
