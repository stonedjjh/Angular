import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

interface Character{
  id: number;
  name: string;
  power: number;
}

//Se usa el decorator Component para definir un componente en Angular
@Component({
  selector: 'dragonball-page',
  templateUrl: './dragonball-page.html',
  imports: [NgClass],
})
//Definimos la clase del componente y su lógica
export class DragonBallPage {

  name = signal('Gohan');
  power = signal(100);


  characters = signal<Character[]>([
    {id:1, name: 'Goku', power: 9001},
    {id:2, name: 'Vegeta', power: 8000},
    {id:3, name: 'Piccolo', power: 3000},
    {id:4, name: 'Yamcha', power: 500},
  ]);

  powerClasses = computed ( ()=>{
    return {
      'text-danger': true,
    };
  });

  addCharacter(){
    if (!this.name() || !this.power() || this.power() < 0)
      return;

    console.log(`el personaje ${this.name()} tiene un poder de ${this.power()}`)
  }


}
