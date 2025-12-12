import { Component, signal } from '@angular/core';

//Se usa el decorator Component para definir un componente en Angular
@Component({
  selector: 'counter-page',
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
//Definimos la clase del componente y su lógica
export class CounterPage {
  //Definimos una propiedad counter inicializada en 10
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(0);
  }
}
