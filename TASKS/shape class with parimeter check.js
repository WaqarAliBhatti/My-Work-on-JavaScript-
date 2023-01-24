//TASK-1
class Shape{
    constructor(name,side,sideLength){
        this.name=name;
        this.side=side;
        this.sideLength=sideLength;
    }
    calcPerimeter(side,sideLength){
        console.log(`Perimeter of ${this.name} is ${this.side*this.sideLength}`);
    }
}
let square=new Shape('sqaure',4,10);
let triangle=new Shape('traingle',3,10);
square.calcPerimeter();
triangle.calcPerimeter();

//Task-2
