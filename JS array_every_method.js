const numbers=[2,4,6,8,10,12];
const Evens=numbers.every((num)=>num%2===0);
console.log(Evens);

const people=[
    {firstname:"Waqar",age:22},
    {firstname:"Malo",age:21},
    {firstname:"Farhad",age:4}
]
const range=people.every((a)=>a.age>=20);
console.log(range);