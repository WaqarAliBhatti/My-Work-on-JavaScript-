const Person=function(id,name,job,exp){
const Man=Object.create(Person.prototype);
Man.id=id;
Man.name=name;
Man.job=job;
Man.exp=exp;
Person.prototype.about=function(){return this.name+" has id "+this.id+" Works as "+this.job+" for "+this.exp+" years"}
Person.prototype.IsElgible=function(exp){
    if(this.exp>=2){console.log(this.name+" is Eligible");
}
    else{
        console.log(this.name+" is not Eligible");
}
}
return Man;
}
const man1=Person(001,'Waqar','Developer',1);
console.log(man1);
console.log(man1.about());
man1.IsElgible();
const man2=Person(2,'Zorain','ASP.net Expert',2);
console.log(man2);
console.log(man2.about());
man2.IsElgible();
for(let key in man1){
if(man1.hasOwnProperty(key))//hasOwnProperty are objects properties without prototype properties.
{
    console.log(key);
}
}