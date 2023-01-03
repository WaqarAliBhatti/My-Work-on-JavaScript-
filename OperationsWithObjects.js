class StudentGroup {
    constructor( students ) {
      this._students = students;
    }
    getAverageAge() {
        var totalAge=0;
        this._students.forEach(element => {
          totalAge+=element.age;
        });
    
        return totalAge/this._students.length;
      }
}  


let maths = new StudentGroup([
    { name: 'Adams', age: 16 },
    { name: 'Baker', age: 15 },
    { name: 'Clark', age: 15 },
    { name: 'Davis', age: 16 },
    { name: 'Evans', age: 14 }
  ]);
  
  console.log(maths.getAverageAge());
  
  let english = new StudentGroup([
    { name: 'Frank', age: 16 },
    { name: 'Ghosh', age: 15 },
    { name: 'Hills', age: 17 },
    { name: 'Irwin', age: 17 },
    { name: 'Jones', age: 14 }
  ]);
//   console.log(english.getMaxAge());