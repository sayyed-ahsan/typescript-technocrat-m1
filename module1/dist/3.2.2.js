"use strict";
{
    class Student {
        constructor(sName, age, address) {
            this.sName = sName;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.sName} student sleeps ${numberOfHours} daily`);
        }
    }
    const student1 = new Student("Mr Student", 20, "california");
    student1.getSleep(8);
    class Teacher {
        constructor(tName, age, address, designation) {
            this.tName = tName;
            this.age = age;
            this.address = address;
            this.designation = designation;
        }
        getSleep(numberOfHours) {
            console.log(`${this.tName} student sleeps ${numberOfHours} daily`);
        }
        takeClass(numberOfClass) {
            console.log(`${this.tName} take ${numberOfClass} classes daily`);
        }
    }
    const teacher1 = new Teacher("Mr Teacher", 40, "california", "Teacher");
    teacher1.takeClass(3);
}
