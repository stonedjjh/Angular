interface AudioPlayer {
    AudioVolume: number;
    songDuration: number;
    song: string;
    detail: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    AudioVolume: 90,
    songDuration: 360,
    song: 'My Way',
    detail: {   
        author: 'Frank Sinatra',
        year: 1969
    }
}

const song = 'New Song';

const {song:anotherSong, songDuration:duration, detail} = audioPlayer;
const {author} = detail;

console.log('Song:', anotherSong);
console.log('Duration:', duration);
console.log('Author:', author);

//con arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log(`Personaje 3: ${dbz[2]}`);

//Destructuring 
const [ , , trunks = 'No Name'] = dbz;
console.log(`Personaje 3: ${trunks}`);

export {};