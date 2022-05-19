function myFunc(){
    function show(){
        return "Function Showed";
    }
    return show;
    //return function() //function could also be returned like this
    //{
    //    console.log("Hello");
   // }
}
const ans=myFunc();
console.log(ans());
