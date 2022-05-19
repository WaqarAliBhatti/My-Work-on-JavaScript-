const User1={
    name:'Zorain',
    age:22,
    About: function(Footballer,cricketer){
        console.log(this.name+" is "+this.age+" old and Favourites are ",Footballer+" & "+cricketer);
}
}
const User2={
    name:'Waqar',
    age:24,
}
User1.About('Messi','Amir');
//User2 has no function thus for using function of an Object for other object we use call function
User1.About.call(User2,'Wi','Lo');//THis way User2 used funtion of User1
User1.About.apply(User1,['Ronaldo','Babar']);// apply is used to pass arguements as ['Array']
const func=User1.About.bind(User2,'Leo','De Villiars');//bind simply returns a function which is called below
func();