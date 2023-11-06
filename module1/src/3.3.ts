{
  //
  class CommonPerson {
    pName: string;
    age: number;
    address: string;

    constructor(sName: string, age: number, address: string) {
      this.pName = sName;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.pName} student sleeps ${numberOfHours} daily`);
    }
  }

  //--------student

  class Student extends CommonPerson {
    constructor(pName: string, age: number, address: string) {
      super(pName, age, address);
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.pName} student sleeps ${numberOfHours} daily`);
    }
  }

  const student1 = new Student("Mr Student", 20, "california");
  student1.getSleep(7);

  //---------teacher

  class Teacher extends CommonPerson {
    designation: string;

    constructor(
      pName: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(pName, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.pName} take ${numberOfClass} classes daily`);
    }
  }

  const teacher1 = new Teacher("Mr Teacher", 40, "california", "Teacher");
  teacher1.takeClass(4);
  //
}
