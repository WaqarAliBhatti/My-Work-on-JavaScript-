var car = {
    'first name': "Civic",
    color: ["White","BLACK","Silver"],
    company: "Honda",
    price: 2000000,
 }
for(key in car)
{   document.write(car[key]);
    // document.write(`${key} : ${car[key]}`); used this display with keys and values
    document.write("<br>");
} 
for (key1 of Object.keys(car)) {
    document.write(`${key1} : ${car[key1]}`);
    document.write("<br>");
    
}