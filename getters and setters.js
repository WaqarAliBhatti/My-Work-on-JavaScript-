class Car {
    #brand;
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    set cnam(x) {
      this.carname = x;
    }
  }
  
  let myCar = new Car("Ford");
  console.log(myCar.carname='Lord')//we can access this and can change it Thus to avoid this we use encapsulation By Making the variable Private By using # 