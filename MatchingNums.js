const numbers=[1,2,3,4,5,6,6,7,8,8,9]

let m=0;
let n=m+1;
for(m=0;m<numbers.length;m++){
    if(numbers[m]==numbers[n]){
    console.log(numbers[m])
}
n++
}