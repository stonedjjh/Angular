import { Component, signal, computed } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

//Se usa el decorator Component para definir un componente en Angular
@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
})
//Definimos la clase del componente y su lógica
export class HeroPage {
  name = signal<string>('');
  age = signal<number>(0);

  constructor() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  nameUpper = computed(() => this.name().toUpperCase());

  heroDescription = computed(() => {
    const description = `Super Heroe: ${this.name()} - Edad: ${this.age()}`;
    return description;
  });

  //   getHeroDescription() {
  //     return `Super Heroe: ${this.name().toUpperCase()} - Edad: ${this.age()}`;
  //   }


  updateAge(newAge: number) {
    this.age.set(newAge);
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
