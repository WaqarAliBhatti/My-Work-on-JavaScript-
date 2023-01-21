var array='waqar';
var count=0;

for(let i=0;i<array.length;i++){
    
    count=0;
 for(let j=0;j<array.length;j++)
    {
       if(array[i]==array[j])
       {
        count++;
       }
    }
    
   if(count>1)
   {
    console.log(array[i]);
   }
}

// for (let i = 0; i < count.length; i++) {
//     console.log(count[i])
// }

// console.log(count);
// console.log(typeof(count))

