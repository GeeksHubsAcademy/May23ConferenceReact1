
import React, {useState, useEffect} from 'react';
import { bringCharacters } from '../../services/apiCalls';
 
export const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=> {

        if(characters.length === 0){

            bringCharacters()
                .then(respuesta => {
                    console.log(respuesta.data.results)
                })
                .catch(error => console.log(error));
        };

    },[characters]);

    return (
        <div className=''>these are the characters</div>
    )
}