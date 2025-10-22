import { goRegBtn,gologBtn,regBackBtn,regBag,regForm,bndBox,bndImages,helloBox,loginForm,brand,inqPhone } from "./const.js";
import { display, translate } from "./utility.js";

const x = "X";
const y = "Y";

// //reg background animate on large screen
// const mvRgBackgrd =  () => regBag.style.transform = "translateX(50%)";
// const reRgBackgrd = () => regBag.style.transform = "translateX(-50%)";
// // go register Btn Click large screen
// const mvBndImages = () => bndImages.style.transform = "translateY(-400%)";
// const mvBndBox = () => bndBox.style.transform = "translateY(400%)";
// const mvRgForm = () => regForm.style.transform = "translateX(100%)";
// const reHelloBox = () => helloBox.style.transform = "translateY(0)";
// const reLogForm = () => loginForm.style.transform = "translateX(0)";
// // go login Btn Click large screen
// const mvHelloBox = () => helloBox.style.transform = "translateY(-400%)";
// const mvLogForm = () => loginForm.style.transform = "translateX(-400%)";
// const reBndImages = () => bndImages.style.transform = "translateY(-30%)";
// const reBndBox = () => bndBox.style.transform = "translateY(-35%)";
// const reRgForm = () => regForm.style.transform = "translateX(0%)";

// // go login Bttn click Phone scr
// // const mvBrand = () => brand.style.transform = "translateY(-400%)";
// // const reBrand = () => brand.style.transform = "translateY(0)";


export function animateLogin() {
    if(window.innerWidth >= 500){
        translate(bndBox,y,400);
        translate(bndImages,y,-400);
        translate(regForm,x,100);
        translate(regBag,x,50);
        translate(helloBox,y,0);
        translate(loginForm,x,0);
    }
    else if(window.innerWidth < 500){
        translate(regBag,y,-200);
        translate(brand,y,-400);
        translate(loginForm,x,0);
        display(regBackBtn,"block");
    }
    document.removeEventListener("click", animateLogin);
}

export function animateReg() {
    if(window.innerWidth >= 500){
        translate(helloBox,y,-400);
        translate(loginForm,x,-400);
        translate(regBag,x,-50);
        translate(regForm,x,0);
        translate(bndImages,y,-30);
        translate(bndBox,y,-35);
    }
    else if(window.innerWidth < 500){
        translate(regForm,x,-50);
        translate(loginForm,x,400);
    }
    document.removeEventListener("click", animateReg);
}
export function backToMain () {
    if(loginForm.style.transform === "translateX(0%)")
    {
        display(regBackBtn,"none");
        translate(loginForm,x,400);
        translate(regBag,y,0);
        translate(brand,y,0);
    }
    else if(loginForm.style.transform === "translateX(400%)")
    {
        translate(regForm,x,-200);
        translate(loginForm,x,0);
    }
    document.removeEventListener("click", backToMain);
} 