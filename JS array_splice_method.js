const array=[1,2,3,4,5,6,7,8,9];
const edited=array.splice(2,1,"Waqar");//same array updated to spliced no need to store it in other variable.  central is deleted and can be returned to new variable
console.log(array);
console.log(edited);// deleted is stored here