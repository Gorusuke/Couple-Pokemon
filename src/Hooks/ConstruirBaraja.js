import shuffle from 'lodash.shuffle';
import content from '../Info/content'

const Baraja = () => {

    const barajaClases = content();
    let cartas = [];

    while (cartas.length < 40) {
        const index = Math.floor(Math.random() * barajaClases.length)
        const carta = {
            image: barajaClases.splice(index, 1)[0],
            wasCorrect: false
        };

        cartas.push(carta)
        cartas.push({...carta});
    }

    return shuffle(cartas);
}
 
export default Baraja;