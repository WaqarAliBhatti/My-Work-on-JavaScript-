const array=[100,1200,134,345,22,42];
array.sort((a,b)=>a-b);//this arrow function sorts the array because otherwise this method sorts it as string is sorted.
console.log(array);
const names=["z","s","d","fg","t","h","w","a","m","h","r"];
names.sort(); //strings get sorted without any functions
console.log(names);