const list = document.querySelector('.list');
const btnmean = document.querySelector('.mean');
const btnmedian = document.querySelector('.median');
const btnmode = document.querySelector('.mode');
const result = document.querySelector('.result');
const actu = document.querySelector('.actu');
let lista = [];
function filllist(lista){
    for (let i=0;i<10;i++){
        lista.push((Math.random()*10).toFixed(0));
    }
}
filllist(lista);
console.log(lista);
btnmean.addEventListener('click',meanlist);
actu.addEventListener('click',refresharray);
// btnmedian.addEventListener('click',medianlist);
// btnmode.addEventListener('click',modelist);
function meanlist(){
    let meanreturn = 0;
    for (i of lista){
        meanreturn = meanreturn + Number(i);
    }
    result.innerText='Answer:'+meanreturn/lista.length;
}
function refresharray(){
    lista = [];
    filllist(lista);
    list.innerText=lista;
}
list.innerText=lista;