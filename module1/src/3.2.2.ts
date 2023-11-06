{
  //
  class Student {
    sName: string;
    age: number;
    address: string;

    constructor(sName: string, age: number, address: string) {
      this.sName = sName;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.sName} student sleeps ${numberOfHours} daily`);
    }
  }

  const student1 = new Student("Mr Student", 20, "california");
  student1.getSleep(8);

  //------teacher

  class Teacher {
    tName: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      tName: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.tName = tName;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.tName} student sleeps ${numberOfHours} daily`);
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.tName} take ${numberOfClass} classes daily`);
    }
  }

  const teacher1 = new Teacher("Mr Teacher", 40, "california", "Teacher");
  teacher1.takeClass(3);

  //
}
