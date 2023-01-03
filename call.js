function details(){
    console.log(`${this.id} earns ${this.salary}`)
}

const waqar = {
    id:'waqar',
    salary:15000,
    detail:details,
    about:function(hobby,caste){
        console.log(`${this.id} is Node JS Dev Hobby is ${hobby} and He's ${caste}`)
    }

}
const zorain ={
    id:'zorain',
    salary:30000,
    // detail:details

}
waqar.detail();
waqar.about.call(zorain,"coding","Mughal"); //if function Called has parameters, we will simply pass arguements to it 

details.call(zorain); // If Fucntion is outside object it can be called with this method