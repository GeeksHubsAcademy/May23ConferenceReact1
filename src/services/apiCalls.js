
import axios from 'axios';

export const bringCharacters = async () => {
    return await axios.get("https://rickandmortyapi.com/api/character");
}

export const bringLocations = async () => {
    return await axios.get("https://rickandmortyapi.com/api/location");
}