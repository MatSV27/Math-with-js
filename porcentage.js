const money = document.querySelector('#money');
const percentage = document.querySelector('#percentage');
const coupon = document.querySelector('#coupon');
const btncalculate = document.querySelector('.calculate');
const result = document.querySelector('.result');
// const couponobj = {
//     'Buenazo':20,
//     'Causatron':15,
//     'Mostrazo':10
// } En la practica se usa lista y no objetos
const couponlist = [];
couponlist.push({
    name:'Mostrazo', discount:20
});
couponlist.push({
    name:'Buenazo', discount:10
});
couponlist.push({
    name:'Chaufon', discount:15
});
couponlist.push({
    name:'Taypa', discount:15
});
btncalculate.addEventListener('click',porcentageresult);
function porcentageresult(){
    const mon = Number(money.value);
    const per = Number(percentage.value);
    const cou = coupon.value;
    if (!mon || (!per && per!=0)){
        result.innerHTML = 'Enter the missing data'
        return;
    }
    if (mon<0 || per<0 || per>100){
        result.innerHTML = 'Enter valid values'
        return;
    }
    function IscouponinArray(couponelement){
        return couponelement.name == cou;
    }
    // const couponinArray = couponlist.filter(couponelement => couponelement.name === cou);
        const couponinArray = couponlist.filter(IscouponinArray);
        // const couponinArray = couponlist.find(IscouponinArray);
    // if (couponinArray) Podemos utilizar el find para hallar al primer elemento que cumpla con la condición, bajo este caso si podemos validar directamente si esta o no en el array
    // asi como tambien ya no seria necesario ponerle couponinArray[0].discount sino solamentemente couponinArray.discount
    if (couponinArray.length>0){
        result.innerHTML = 'Final cost:' + (mon*(1-(per+couponinArray[0].discount)/100)).toFixed(2);
    }else{
        result.innerHTML = 'Final cost:' + (mon*(1-per/100)).toFixed(2);
        // switch(cou){
        //     case 'Causatron':
        //         if (per+10>100){
        //             result.innerHTML = 'The discount is greater than 100%'
        //         }else{
        //             result.innerHTML = 'Final cost:' + mon*(1-(per+10)/100);
        //         }
        //         break;
        //     case 'Chaufon':
        //         if (per+20>100){
        //             result.innerHTML = 'The discount is greater than 100%'
        //         }else{
        //             result.innerHTML = 'Final cost:' + mon*(1-(per+20)/100);
        //         }
        //         break;
        // }
    }
}