const array = [
    { name: "Waqar", Room: 1, Field: "Web" },
    { name: "Zorain", Room: 6, Field: "C#" },
    { name: "Sidhart", Room: "Private", Field: "HR" }
]
const[user1,user2,user3]=array; //objects of arrays are shifted and stored as user1 user2,user3
console.log(user1);
console.log(user1.name); //accessing name in first object

const[{name:var1, Room:Place},{},{}]=array; //nested Destructuring -> Destructured first object of array , rest remained intact
console.log("\n"+var1+" "+Place);