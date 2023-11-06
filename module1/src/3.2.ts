{
  //

  // class Animal {
  //   a_name: string;
  //   species: string;
  //   sound: string;

  //   constructor(a_name: string, species: string, sound: string) {
  //     this.a_name = a_name;
  //     this.species = species;
  //     this.sound = sound;
  //   }

  //   makeSound() {
  //     console.log(`The ${this.a_name} says ${this.sound}`);
  //   }
  // }

  // const dog = new Animal("Husky", "dog", "gew gew");
  // const cat = new Animal("cute kitty", "cat", "mew mew");

  // dog.makeSound();
  // cat.makeSound();

  class Animal {
    constructor(
      public a_name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.a_name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Husky", "dog", "gew gew");
  const cat = new Animal("cute kitty", "cat", "mew mew");

  dog.makeSound();
  cat.makeSound();

  //
}
