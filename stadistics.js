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
};
filllist(lista);
btnmean.addEventListener('click',meanlist);
actu.addEventListener('click',refresharray);
btnmedian.addEventListener('click',medianlist);
btnmode.addEventListener('click',modelist);

function modelist(){
    let returnlist = {};
    let max=0;
    let j;
    for (i of lista){
        if (i in returnlist){
            returnlist[i]+=1;
        }else{
            returnlist[i]=1;
        }
    }
    for (var i in returnlist){
        if (returnlist[i]>max){
            max=returnlist[i];
            j=i;
        }
    }
    result.innerText = 'Answer:'+j;
};
function medianlist(){
    const sortedlist = lista.sort(function(a,b){return a-b});
    if (sortedlist.length%2!=0){
        result.innerText = 'Answer:' + Number(sortedlist[(sortedlist.length-1)/2]);
    }else{
        result.innerText = 'Answer:' + (Number(sortedlist[(sortedlist.length)/2])+Number(sortedlist[(sortedlist.length)/2-1]))/2;
    }
};
function meanlist(){
    // let meanreturn = 0;
    // for (i of lista){
    //     meanreturn = meanreturn + Number(i);
    // }
    // result.innerText='Answer:'+meanreturn/lista.length;
    const sumlist = lista.reduce(function(acumulatevalue,newvalue){
        return Number(acumulatevalue)+Number(newvalue);
    });
    result.innerText='Answer:'+sumlist/lista.length;
};
function refresharray(){
    lista = [];
    filllist(lista);
    list.innerText=lista;
};
list.innerText=lista;