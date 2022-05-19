// const array=[1,2,3,4,5,6,7,8,9,10]; 
const addall=(...numbers)=>{ // spread operator makes it array
    let sum=0;
    for(element of numbers){
        sum+=element; // if writing a For of Loop then indices not to passed jusr write sum+=elements
    }
    return sum;
}
const arry=addall(1,2,3,4);//array can be assigned values here
console.log(arry);