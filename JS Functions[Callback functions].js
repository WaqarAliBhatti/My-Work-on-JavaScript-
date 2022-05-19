function Firstfunc(a)//function Firstfunc(callback){callback();} //passing a function into a function is called callback a fucntion thus in parameters you can type "callback" as parameter name 
{
    a(); //callback(); callback keyword may replace parameter name
}
function secondFunction() {
    console.log("I'm In a Function");
}
Firstfunc(secondFunction)
