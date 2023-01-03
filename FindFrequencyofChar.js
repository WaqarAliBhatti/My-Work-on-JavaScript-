let string='Waqasr';

function CharTimes (string,Char){
    let count=0;
for(let i=0;i<string.length;i++){
if(string[i]==Char){
    count++;
};
}
return count;
}
console.log(CharTimes(string,'a'))