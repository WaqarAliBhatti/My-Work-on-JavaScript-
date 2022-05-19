function Person(name,caste,section,id){ // this syntax is also called 'Constructotr'
    this.name=name;
    this.caste=caste;
    this.section=section;
    this.id=id;
}
Person.prototype.details=function(){return this.name+" is bycaste "+this.caste+" studies in Section "+this.section+" under id "+this.id}
const stud1=new Person('Waqar','Bhatti',"A",66);
console.log(stud1);
console.log(stud1.details());