function scalenetriangle(sideA,sideB,sideC){
    const semiperimeter=(sideA+sideB+sideC)/2;
    const area=Math.floor(Math.pow(semiperimeter*(semiperimeter-sideA)*(semiperimeter-sideB)*(semiperimeter-sideC),0.5));
    return {area:area,height:area*2/sideA};
}
function scalenetriangleheight(sideA,sideB,sideC){
    if (sideA!=sideB && sideA!=sideC && sideB!=sideC){
        return scalenetriangle(sideA,sideB,sideC).height;
    }else{
        return false;
    }
}
function square(side){
    return {perimeter:side*4,area:side*side};
}
function circle(radius){
    return {perimeter:radius*2*Math.PI,area:Math.pow(radius,2)*Math.PI};
}
// console.group('Triangle');
// console.log(triangle(4,5));
// console.log(triangle(5,6).area);
// console.log(scalenetriangle(8,8,8));
// console.log(scalenetriangleheight(16,8,10));
// console.groupEnd('Triangle');
const btnperimetertriangle=document.querySelector('.perimetertriangle');
const btnareatriangle=document.querySelector('.areatriangle');
const side1=document.querySelector('#side1');
const side2=document.querySelector('#side2');
const side3=document.querySelector('#side3');
const result=document.querySelector('.resulttriangle');
btnperimetertriangle.addEventListener('click',triangleperimeter);
btnareatriangle.addEventListener('click',trianglearea);
function trianglearea(){
    const sideA = parseFloat(side1.value);
    const sideB = parseFloat(side2.value);
    const sideC = parseFloat(side3.value);
    const semiperimeter=(sideA+sideB+sideC)/2;
    const area=Math.sqrt(semiperimeter*(semiperimeter-sideA)*(semiperimeter-sideB)*(semiperimeter-sideC));
    if (!sideA || !sideB || !sideC){
        result.innerHTML = 'Complete the sides of the boxes'
        return;
    }
    if (sideA<0 || sideB<0 || sideC<0){
        result.innerHTML = 'Enter valid data';
        return;
    }
    if (isNaN(area) || area==0){
        result.innerHTML = "This kind of triangle doesn't exist";
        return;
    }
    result.innerText = 'Area:'+area;
    // return {area:base*height/2,perimeter:base+height};
}
function triangleperimeter(){
    const sideA = parseFloat(side1.value);
    const sideB = parseFloat(side2.value);
    const sideC = parseFloat(side3.value);
    const perimeter = sideA+sideB+sideC;
    const semiperimeter = perimeter/2;
    if (!sideA || !sideB || !sideC){
        result.innerHTML = 'Complete the sides of the boxes'
        return;
    }
    if (sideA<0 || sideB<0 || sideC<0){
        result.innerHTML = 'Enter valid data';
        return;
    }
    if (isNaN(Math.sqrt(semiperimeter*(semiperimeter-sideA)*(semiperimeter-sideB)*(semiperimeter-sideC))) || Math.sqrt(semiperimeter*(semiperimeter-sideA)*(semiperimeter-sideB)*(semiperimeter-sideC))==0){
        result.innerHTML = "This kind of triangle doesn't exist";
        return;
    }
    result.innerText = 'Perimeter:'+perimeter;
}