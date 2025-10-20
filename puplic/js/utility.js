export function translate(el,cord,value){
        return el.style.transform = `translate${cord}(${value}%)`; 
}
export function display(el,prp){
        return el.style.display = prp;
}