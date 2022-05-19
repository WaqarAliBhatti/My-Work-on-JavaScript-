function hello(){
    return 'Hello';
};
console.log(hello());
hello.helloMaam='Hello Maam';// created own property
console.log(hello.helloMaam);
hello.yes=function(){return "Oh Yes!"} //created function in own property 
console.log(hello.yes);

hello.prototype.name="waqar";//prototype adds key value pair in Object in a function
hello.prototype.age=23;
console.log(hello.prototype);
