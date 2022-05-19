const UserMethods={ // this function is also created in Users function below with description
    about: function(){
        {
            console.log(this.firstname+" is "+this.Caste+" living in Room "+this.Room);
        };
    }
}
function Users(firstname,Caste,Age,Room){
    const User=Object.create(UserMethods);// Used Object.create() to take reference of functions of "USERMETHODS"
    User.firstname=firstname;
    User.Caste=Caste;
    User.Age=Age;
    User.Room=Room;  
    return User;
    }
const user1=Users("waqar","Bhatti",22,1);
console.log(user1);
user1.about();// Called method of other object through __proto__
const user2=Users('Zorain','Mughal',23,6)
console.log(user2);
user2.about();//called method of other object through __proto__
