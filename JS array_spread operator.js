let array=[];
let array1=[..."Waqar"];
console.log(array1);
const obj1={
    key1:"value1",
    key2:"value2"
};
const obj2={
    key1:"valueU",  //key defined later will take the final value
    key3:"value3",
    key4:"value4",
    
};
const newObj={...obj1,...obj2} // obj2 is last thus updated value of key will ValueU of obj2
console.log(newObj);
const newObj1={...obj2,...obj1} //obj1 is last thus final value of key1 will be value1
console.log(newObj1);
const alpha_array={..."abcdefghijklmnopqrstuvwxyz"};
console.log(alpha_array);