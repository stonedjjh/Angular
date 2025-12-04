const skills: string[] = ['bash', 'Counter','Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //El signo de interrogacion indica que esta propiedad es opcional
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'Counter'],    
};

strider.hometown = 'Rivendell';

console.table(strider);

export {strider};