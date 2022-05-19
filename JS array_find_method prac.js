myArray=[
    {userID:1,Username:"Waqar"},
    {userID:2,Username:"Zorain"},
    {userID:3,Username:"Sohail"},
    {userID:4,Username:"Sanaullah"}
];
const ans=myArray.find((user)=>user.userID===3);//finds string with given
console.log(ans);