//Task 3
var library=[
   { 
    author:'Bill Gates',
    title:'The Road ahead',
    readingstatus:true
},
{ 
    author:'steve jobs',
    title:'waltor isaacson',
    readingstatus:true
},
{ 
    author:'suzanne collins',
    title:'mockingJay:the final of hunger games',
    readingstatus:false
}
]

const readingStatus=library.map(obj=>obj.readingstatus);
console.log(readingStatus);