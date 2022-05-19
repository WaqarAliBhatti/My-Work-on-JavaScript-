const people=[
    {firstname:"Waqar",age:22},
    {firstname:"Malo",age:21},
    {firstname:"Farhad",age:4}
]
const names=people.map((user)=>{return user.firstname;})
console.log(names);