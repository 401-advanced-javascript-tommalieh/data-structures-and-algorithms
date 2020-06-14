'use strict';

class Node{
  constructor(value){
    this.value = value;
  }
}

class AnimalShelter {

  constructor() {
    this.shelter = [];
    this.front = null;
    this.back = null;

  }

  enqueue(animal) {
    if (animal === 'dog' || animal === 'cat') {
      const animalobject = new Node(animal);
      this.shelter.push(animalobject);
      this.front = this.shelter[0];
      this.back = this.shelter[this.shelter.length - 1];

    } else {
      return 'Only dogs and cats are allowed';
    }
  }

  dequeue(pref) {
    if (pref === 'dog' || pref === 'cat') {
      let releasedAnimal = this.shelter.shift();
      this.front = this.shelter[0];
      while (releasedAnimal.value !== pref) {
        releasedAnimal = this.shelter.shift();
        this.front = this.shelter[0];
      }
      return releasedAnimal.value;
    } else {
      return null;
    }
  }
}

let animalshelter = new AnimalShelter();
console.log(animalshelter),
animalshelter.enqueue('cat');
animalshelter.enqueue('dog');
animalshelter.enqueue('cat');
animalshelter.enqueue('cat');
animalshelter.enqueue('dog');
console.log(animalshelter);
animalshelter.dequeue('dog');
console.log(animalshelter);
