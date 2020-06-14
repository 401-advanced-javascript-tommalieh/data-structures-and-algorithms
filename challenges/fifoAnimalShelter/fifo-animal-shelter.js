'use strict';

class AnimalShelter {
  constructor() {
    this.shelter = [];
    this.first = null;
  }

  enqueue(animal) {
    if (animal === 'dog' || animal === 'cat') {
      this.shelter.push(animal);
      this.first = this.shelter[0];
    } else {
      return 'Only dogs and cats are allowed';
    }
  }

  dequeue(pref) {
    if (pref === 'dog' || pref === 'cat') {
      let releasedAnimal = this.shelter.shift();
      while (releasedAnimal !== pref) {
        releasedAnimal = this.shelter.shift();
      }
      return releasedAnimal;
    } else {
      return null;
    }
  }
}