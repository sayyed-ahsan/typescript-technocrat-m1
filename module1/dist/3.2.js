"use strict";
{
    class Animal {
        constructor(a_name, species, sound) {
            this.a_name = a_name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.a_name} says ${this.sound}`);
        }
    }
    const dog = new Animal("Husky", "dog", "gew gew");
    const cat = new Animal("cute kitty", "cat", "mew mew");
    dog.makeSound();
    cat.makeSound();
}
