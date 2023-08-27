const money = document.querySelector('#money');
const percentage = document.querySelector('#percentage');
const coupon = document.querySelector('#coupon');
const btncalculate = document.querySelector('.calculate');
const result = document.querySelector('.result');
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
    if (!cou){
        result.innerHTML = 'Final cost:' + mon*(1-per/100);
    }else{
        switch(cou){
            case 'Causatron':
                if (per+10>100){
                    result.innerHTML = 'The discount is greater than 100%'
                }else{
                    result.innerHTML = 'Final cost:' + mon*(1-(per+10)/100);
                }
                break;
            case 'Chaufon':
                if (per+20>100){
                    result.innerHTML = 'The discount is greater than 100%'
                }else{
                    result.innerHTML = 'Final cost:' + mon*(1-(per+20)/100);
                }
        }

    }
}