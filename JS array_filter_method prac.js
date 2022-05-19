const users=[11,12,13,14,15,16,17,18,19,20];
const IsOdd=function(num){
    return num%2!=0;
}
IsOdd_num=users.filter(IsOdd);
console.log(IsOdd_num);