const array = [
    { name: "Waqar", Room: 1, Field: "Web" },
    { name: "Zorain", Room: 6, Field: "C#" },
    { name: "Sidhart", Room: "Private", Field: "HR" }
]
// console.log(array);
for (user of array) {

    console.log(user);
}

for (user of array) {

    console.log(user.name);
}