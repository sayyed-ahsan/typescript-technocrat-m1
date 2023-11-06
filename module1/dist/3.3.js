"use strict";
{
    class CommonPerson {
        constructor(sName, age, address) {
            this.pName = sName;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.pName} student sleeps ${numberOfHours} daily`);
        }
    }
    class Student extends CommonPerson {
        constructor(pName, age, address) {
            super(pName, age, address);
        }
        getSleep(numberOfHours) {
            console.log(`${this.pName} student sleeps ${numberOfHours} daily`);
        }
    }
    const student1 = new Student("Mr Student", 20, "california");
    student1.getSleep(7);
    class Teacher extends CommonPerson {
        constructor(pName, age, address, designation) {
            super(pName, age, address);
            this.designation = designation;
        }
        takeClass(numberOfClass) {
            console.log(`${this.pName} take ${numberOfClass} classes daily`);
        }
    }
    const teacher1 = new Teacher("Mr Teacher", 40, "california", "Teacher");
    teacher1.takeClass(4);
}
