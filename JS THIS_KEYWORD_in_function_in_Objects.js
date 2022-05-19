function personInfo(){
    console.log(`Person name is ${this.name} and Age is ${this.Age}`);
}
const Person1={
    name:'Waqar',
    Age:22,
    about:personInfo
}
const Person2={
    name:'Zorain',
    Age:23,
    about:personInfo
}
const Person3={
    name:'Sohail',
    Age:25,
    about:personInfo
}
Person1.about();
Person2.about();
Person3.about();