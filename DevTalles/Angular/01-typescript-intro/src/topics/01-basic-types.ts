const name: string = 'Talles';
let hpPoints: number = 100;
let isAlive: boolean = true;

//Con el caracter pipe(tuberia) | podemos definir mas de un tipo para una variable
let superPower: string | number = '100';

//Con el caracter pipe(tuberia) | tambien podemos definir valores especificos para una variable
let actualPower: '100' | '200' | '300' = '100';
// actualPower = '250'; esta linea daria error porque 250 no es un valor permitido

console.log({ name, hpPoints, isAlive, superPower, actualPower });

export {};