let randomNum=[5,6,12,56,78,90,3]

console.log(sortArray(randomNum));

function sortArray(arr){
    let temp=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp
        
            i=-1;
        }

    }
    return arr;
}
