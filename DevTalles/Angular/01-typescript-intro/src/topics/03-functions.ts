function sumar(a: number, b: number): number {
    return a + b;
}

//lambda function

const sumarFlecha = (a: number, b: number): number => a + b;


const resultado:string = sumar(10, 15).toString();

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const result: number = sumar(5, 10);
const resultFlecha: number = sumarFlecha(5, 10);
const multiplicacion: number = multiplicar(5);

console.log({resultado,result, resultFlecha, multiplicacion});


interface Character {
    name: string;
    hp: number;
    showHp: ()=> void; 
}


const healcharacter = (character: Character, amount: number): void => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

healcharacter(strider, 20);

strider.showHp();


export{}