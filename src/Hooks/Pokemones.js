import {useState, useEffect} from 'react'

const Pokemones = () => {

    const [pokemons, setPokemons] = useState([]);
    // const [state, setstate] = useState(initialState)

    const API = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
        .then(result => result.json())
        .then(res => setPokemons(res.results))
    }

    useEffect(() => {
        API();
    }, [])

    return pokemons;
}
 
export default Pokemones;