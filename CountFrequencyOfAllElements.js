let array='waqarjkgj;lkj;kjkj;lkj';
let count=[]
for(let i=0;i<array.length;i++){
    var num=array[i];
    count[num]=count[num]?count[num]+1:1
}
console.log(count['a']);
console.log(typeof(count))
console.log(count)