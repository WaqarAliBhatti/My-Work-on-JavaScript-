const UserMethods={ // this function is also created in Users function below with description
    about: function(){
        {
            console.log(this.firstname+" is "+this.Caste+" living in Room "+this.Room);
        };
    }
}
function Users(firstname,Caste,Age,Room){
    const User={};
    User.firstname=firstname;
    User.Caste=Caste;
    User.Age=Age;
    User.Room=Room;
    // User.About= function about() // This function is created every time when Object is created thus takes more memory. this function should be created in a separate object later 'called' in other Object as written above in 'UserMethods Object'.
        // {
        //     console.log(this.firstname+" is "+this.Caste+" living in Room "+this.Room);
        // };
       User.about = UserMethods.about;// function of other object is called here. problem is whenever you will write a function you have to call it here first.     
        return User;
    }
const user1=Users("waqar","Bhatti",22,1);
console.log(user1);
user1.about();
const user2=Users('Zorain','Mughal',23,6)
console.log(user2);
user2.about();
